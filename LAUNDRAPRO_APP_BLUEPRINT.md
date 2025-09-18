# LaundraPro Application Blueprint & System Design

**Document Version:** 3.0
**Date:** 2025-09-18
**Author:** Senior Product Manager / System Analyst (compiled for devs & ops)

---

## 0. Preface

This document is the canonical System Requirements Specification, Architecture & Risk Appendix for **LaundraPro**. It is intended to be developer-actionable: architecture, APIs, Firestore schema suggestions, indexing recommendations, USSD flows, matching algorithm detail, scaling considerations, SRE playbooks, testing, and Kenyan-market mitigations are included. Treat this as the single source-of-truth for MVP → Beta → Full Launch.

> Important: Sections labelled **ACTION** contain items developers/DevOps must complete during Sprint 0 / Sprint 1.

---

## 1. Introduction

### 1.1 High-Level Overview (keeps your original intent)

LaundraPro is a three-sided marketplace connecting:

1. **Clients (Customers)** — households & small businesses needing laundry services.
2. **Mama Fuas (Workers)** — independent or company-affiliated laundry workers.
3. **Laundry Companies** — businesses & mid-sized laundry operations.

Goal: Deliver reliable service and fair earnings, with **App + Web + USSD** channels to maximize inclusion in Kenya.

### 1.2 Business Goals & Target Audience

* Empower local workers with digital earnings tracking and payouts.
* Deliver trustworthy, convenient laundry to households/offices.
* Build a sustainable marketplace with transaction fees, subscriptions and enterprise services.

Primary audience: Nairobi urban households → expand to other cities after pilot.

---

## 2. System Requirements

### 2.1 Functional Requirements (detailed & prioritized)

**Core (MVP - must):**

* Authentication & RBAC:

  * Phone-first sign-up (OTP via SMS), email optional.
  * Roles: Customer, Worker, CompanyAdmin, PlatformAdmin, Finance, Dispatch.
* Booking flow:

  * Create orders, schedule pickup/dropoff, immediate/slot booking.
  * Price estimation (service-type + extras).
* Payments:

  * Mpesa STK Push (Daraja) default; DPO for cards as fallback. Record transactions and webhooks.
* Worker acceptance & availability:

  * Real-time accept/reject; availability toggle.
* Order tracking:

  * Status changes: Pending → Assigned → In-Progress → Ready for Delivery → Delivered → Completed.
* Notifications:

  * Push for app users; SMS fallback for USSD & non-app users.
* Basic Admin:

  * User management, onboarding approval, transaction logs.

**Important (Beta):**

* In-app chat (customer ↔ worker).
* Favorites & re-book direct booking.
* Ratings & reviews.
* Company dispatch dashboard & manual assignment.

**Advanced (Post-MVP):**

* Dynamic pricing & price scoring in matching.
* Loyalty programs & subscriptions for workers/companies.
* Advanced analytics & BI dashboards.

---

### 2.2 Non-functional Requirements (concrete targets)

* **Scalability:** Support thousands of concurrent users; design for multi-city scaling. Architect so single-city load can be scaled to N cities.
* **Performance Targets:**

  * Worker search latency (API + DB) < 250ms p50, < 500ms p95 for candidate sets.
  * Match algorithm end-to-end < 1s for typical radius (<5km).
  * USSD session flows complete < 60s (Telco session limit).
* **Availability & SLOs:**

  * Target uptime: 99.95% for critical services (auth, order creation, payments).
  * Payment success rate ≥ 98%.
* **Security & Compliance:**

  * TLS 1.2+, Firebase App Check, secure storage for PII, encryption at rest (Firestore default).
  * Comply with Kenya Data Protection Act 2019 (data minimization, user consent).
* **Cost Efficiency:**

  * Control Firestore read/write costs: caching, sharded counters, denormalization.
* **Usability:** Mobile-first for low-end Android devices; USSD/SMS for feature phones.

---

## 3. Technical Stack Assumptions (explicit)

* **Mobile:** React Native (TypeScript) or Flutter (Dart). Choose one cross-platform stack — I recommend React Native for faster JS stack integration with Firebase functions.
* **Web Admin:** Next.js (TypeScript) on Vercel.
* **Backend:** Firebase (Auth, Firestore, Cloud Functions (Node/TypeScript), Cloud Storage).
* **USSD/SMS:** Africa’s Talking (multi-telco) — or a telco aggregator. Must support safe production flows and webhooks.
* **Payments:** Safaricom Daraja (Mpesa STK Push) + DPO Gateway as fallback.
* **Caching & Microservices:** Cloud Run + Redis (Google Memorystore) if real-time geocaching or heavy read optimization is required later.
* **CI/CD:** GitHub Actions → deploy Cloud Functions, mobile build pipeline, and Vercel preview/prod.
* **Monitoring:** Google Cloud Monitoring (Stackdriver), Sentry/Crashlytics for mobile.

---

## 4. SDLC (detailed steps & deliverables)

### 4.1 Methodology

Agile Scrum, 2-week sprints. Sprint 0 (setup), Sprint 1–3 (MVP core), Sprint 4–5 (payments & USSD), Sprint 6 (beta), Sprint 7+ (scale & optimizations).

### 4.2 Deliverables by phase

* **Sprint 0:** Git repos, Firebase projects (dev/stage/prod), initial security rules, CI/CD, USSD sandbox with Africa’s Talking, STK sandbox with Daraja.
* **Sprint 1–3 (Core):** Auth + roles, orders, worker acceptance, availability toggle, basic admin.
* **Sprint 4:** Payments integration & reconciliation, notifications, USSD booking flow v1.
* **Sprint 5:** Ratings, favorites, order tracking, staging pilot.
* **Beta:** Pilot in Nairobi with 200 workers and 1,000 customers. UAT + iteration.
* **Full Launch:** Expand to Mombasa & Kisumu, refine scaling & SRE.

---

## 5. System Analysis & Design

### 5.1 User Roles & Privileges (RBAC)

* **Customer:** create/read/update own orders, submit ratings, wallet ops.
* **Worker:** receive orders, accept/reject, update order status, view earnings.
* **CompanyAdmin:** manage company workers, view financials for company, assign jobs.
* **PlatformAdmin / Finance:** global reporting, payouts, dispute resolution.
* **Dispatch:** assign orders to workers for companies.

**ACTION:** Implement RBAC via Firebase Claims + Firestore rules. Use custom claims for roles and tenant scoping for company affiliated users.

### 5.2 Data Flow (detailed booking path)

**Flow A — App booking (simplified):**

1. Customer initiates booking → app calls `POST /orders`.
2. Cloud Function `createOrder` validates, writes `orders/{orderId}`, writes to `workerRequests/{workerId}/{requestId}` (fan out) or triggers matching function.
3. Matching function queries candidate workers (geohash + availability) → returns list & writes `order.assignment` to first available worker document.
4. Worker receives push/SMS; accepts → writes `orders/{orderId}.status = ASSIGNED`.
5. Payment STK push initiated (if pre-pay) → webhook updates payment status.
6. Worker fulfills job → client confirms → Cloud Function runs payout accrual.

**Flow B — USSD booking:**

* Customer dials `*XYZ#` → USSD server (Africa’s Talking) calls your webhook with session info → session queries minimal state & prompts → user confirms → server triggers STK push → on success, creates order in Firestore and then runs matching.

### 5.3 Entity-Relationship & Firestore Layout (recommended collections)

Firestore denormalization is recommended for read performance. Example collections and sample fields:

```
/users/{userId}
  - name, phone, role, createdAt, companyID?, rating, profileImageURL
/users/{userId}/workerProfile (subcollection)
  - specialties[], verificationStatus, availabilityStatus, lastKnownLocation (GeoPoint), pricePref

/companies/{companyId}
  - name, location, adminUserId, settings

/orders/{orderId}
  - customerId, workerId (nullable), companyId (nullable), status, serviceType, scheduledAt, price, paymentId, createdAt

/payments/{paymentId}
  - orderId, amount, method, status, mpesaTransactionId, createdAt

/ratings/{ratingId}
  - orderId, customerId, workerId, score, comment, createdAt
```

**Composite index examples (Firestore indexes configuration):**

* `Orders` index on `status, scheduledAt` (for admin dashboards).
* `Workers` index on `availabilityStatus, lastKnownLocation` (use geohash technique).
* `Workers` index on `companyID, availabilityStatus, averageRating` for company dispatch queries.

**ACTION:** Add an `aggregates` collection to store cached counts (ordersPerWorker, earningsPerWorker) to avoid heavy aggregation queries at read-time.

### 5.4 Firestore Read/Write Patterns & Cost Optimization

* **Avoid per-second writes to a single document (hotspot).** Use sharded counters for frequently updated counters (e.g., `worker.dailyJobsCounter` using 16 shards).
* **Use denormalization** for reads; write-side complexity is acceptable.
* **Batch writes** for multi-document updates (use `writeBatch`).
* **Use Cloud Functions for heavy processing** and to offload expensive queries from client.

---

## 6. Worker Matching Algorithm — full detail & optimizations

### 6.1 Goals

* Return top N (e.g., 10) available workers within radius R quickly and cheaply.
* Score by proximity, rating, availability, acceptance rate, and optionally price.

### 6.2 Implementation approach (production-friendly)

1. **Geohash bucketization:** store `geohash` prefix at \~250–500m precision on worker documents; initial filter is to query workers within same and adjacent geohash prefixes.
2. **Attribute filter:** `availabilityStatus == 'Available'` && `verificationStatus == 'Verified'`.
3. **Candidate set limiting:** fetch up to M candidates per geohash (M \~ 50).
4. **In-memory scoring:** score candidates in Cloud Function memory with weights.
5. **Return top N** to client or auto-assign using first-come accept logic.

### 6.3 Scoring formula (configurable)

`matchScore = w_dist * score_dist + w_rating * score_rating + w_accept * score_accept + w_price * score_price`.

Default weights:

* `w_dist = 0.5`
* `w_rating = 0.3`
* `w_accept = 0.15`
* `w_price = 0.05`

**Distance normalization:** `score_dist = max(0, 1 - (distance / searchRadius))`.

### 6.4 Pseudocode (Cloud Function)

```ts
// Cloud Function: matchWorkers
async function matchWorkers(lat, lng, radius, n) {
  const geohashBuckets = computeAdjacentGeohashPrefixes(lat, lng, precision);
  let candidates = [];
  for (const prefix of geohashBuckets) {
    const q = firestore.collection('workers')
      .where('geohashPrefix', '==', prefix)
      .where('availabilityStatus', '==', 'Available')
      .limit(50);
    candidates.push(...(await q.get()).docs.map(d => d.data()));
  }
  // Compute distance + score in-memory
  const scored = candidates.map(w => {
    const distance = haversine([lat,lng], w.lastKnownLocation);
    const score = computeScore(distance, radius, w.rating, w.acceptRate, w.pricePref);
    return { worker: w, score };
  });
  scored.sort((a,b) => b.score - a.score);
  return scored.slice(0, n);
}
```

**ACTION:** Measure p95 runtime of matching function in staging; tune geohash precision & M accordingly.

---

## 7. API Design (required endpoints & sample payloads)

### 7.1 REST endpoints (Firebase Functions)

* `POST /v1/orders` — create order

  * Body: `{ customerId, lat, lng, serviceType, scheduledAt, paymentMethod }`
* `GET /v1/orders/{orderId}` — get order
* `POST /v1/orders/{orderId}/assign` — assign/accept order
* `POST /v1/users/{userId}/availability` — toggle availability
* `POST /v1/match` — search and return top candidates

  * Body: `{ lat, lng, radius, serviceType }`
* `POST /v1/payments/mpesa/initiate` — trigger STK Push
* `POST /v1/webhooks/mpesa` — mpesa payment confirmation (webhook)
* `POST /v1/ussd` — USSD webhook (used for session state & actions)

### 7.2 Example: create order response

```json
{
  "orderId": "ord_123",
  "status": "PENDING",
  "estimatedArrival": "2025-09-19T09:00:00Z",
  "payment": { "method": "MPESA", "status": "PENDING", "stkRequestId": "stk_456" }
}
```

**ACTION:** Define OpenAPI spec and enforce through automated contract tests (e.g., via Pact) between client & Cloud Functions.

---

## 8. USSD Design & Flows (detailed for Kenyan deployment)

### 8.1 Why USSD

* Inclusive: supports feature phones and low data.
* Widely accepted for quick interactions (no app install).
* Must design for Telco session constraints & user impatience.

### 8.2 USSD Session constraints & best-practices

* Session timeout \~ 60 seconds; keep flows ≤ 3 screens for booking.
* Confirm critical steps via SMS (payment confirmation, order reference).
* Maintain server-side session state keyed by MSISDN.

### 8.3 USSD Menu examples (Customer)

```
*XYZ# (Welcome)
1 Book Laundry
2 Track Order
3 My Orders
4 Check Balance
5 Help
```

**Book Laundry (max 3 steps):**

1. Select Service Type (1 = Wash & Fold, 2 = Iron, 3 = Dry Clean)
2. Choose Pickup Time (1 = Today, 2 = Tomorrow, 3 = Enter Date)
3. Confirm (Y/N) → Trigger Mpesa STK Push → If successful, create order & send SMS.

**Worker USSD Menu (short):**

```
*XYZ*2# (Worker)
1 New Jobs (list)
2 Accept Job [Enter Job ID]
3 My Balance
4 Request Payout
5 Toggle Availability
```

**ACTION:** Implement idempotent USSD webhook handling; store session states in `sessions/{msisdn}` with TTL.

### 8.4 Telco & Vendor considerations

* Use Africa’s Talking as aggregator (or direct Safaricom USSD with procurement).
* Monitor USSD failure rates per telco and implement fallback SMS flows.

---

## 9. Payments & Reconciliation (robust flow)

### 9.1 Payment flows

* **Pre-pay (preferred):** Customer pays via STK push before job confirmed. STK confirmation webhook updates order.
* **Post-pay / COD:** allow for COD in limited contexts (higher fraud risk). Track via `payment.method = CASH_ON_DELIVERY`.
* **Payouts:** Workers request payouts → queued & processed in bi-weekly batches (or configurable). Payouts via Mpesa B2C (requires DPO / M-Pesa B2C privileges).

### 9.2 Reconciliation model

* Keep `payments/{paymentId}` logs and `accounting/ledger` entries:

  * `ledger` entries: `type` (credit/debit), `amount`, `entityId`, `orderId`, `createdAt`, `status`.
* For every Mpesa webhook: validate transaction ID, store `payments` document, update `ledger`.
* Schedule nightly reconciliation job (Cloud Function) that compares local `payments` with gateway records and flags exceptions.

### 9.3 Chargebacks & dispute handling

* Implement dispute states on orders; hold payouts until resolved if fraudulent flags raised.

**ACTION:** Build a reconciliation dashboard for finance role and automated alerts for >1% mismatch rates.

---

## 10. Security & Privacy (concrete)

### 10.1 Authentication & App Integrity

* Firebase Auth (phone-first); require re-auth for sensitive actions.
* Use Firebase App Check to block unauthorized clients.
* Use custom claims for RBAC.

### 10.2 Firestore Security Rules (example pattern)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{orderId} {
      allow create: if request.auth != null && request.resource.data.customerId == request.auth.uid;
      allow read: if request.auth != null && (resource.data.customerId == request.auth.uid || resource.data.workerId == request.auth.uid || isPlatformAdmin());
      allow update: if isAssignedWorker(request.auth.uid, resource) || isPlatformAdmin();
    }
    // helper functions defined below
  }
}
```

### 10.3 PII & Data-retention

* Minimum PII stored; retain verification documents in Cloud Storage with restricted access.
* Data retention policy: user content retained for X months (configurable) — follow Kenya Data Protection Act for consent and user rights.

### 10.4 Operational Security

* Rotate all service account keys on schedule.
* Principle of least privilege for Cloud IAM.
* Use secrets manager for all credentials (GitHub Secrets / Google Secret Manager).

---

## 11. Observability, Testing & SRE

### 11.1 Key Metrics to Monitor (SLO-driven)

* Orders created per minute
* Payment success rate
* Worker acceptance latency (time from notification to accept)
* Match function latency (p50/p95/p99)
* Firestore read/write ops per minute (cost alerting)
* USSD success rate & session drop rate
* Crash rate (mobile)
* Support ticket backlog & avg resolution time

### 11.2 Alerting

* Alert on payment failure spike (>2% in 5 mins)
* Alert on match latency p95 > 2s
* Alert on Firestore costs exceeding budget threshold
* Pager rotation & incident playbooks.

### 11.3 Testing Plan (recommended tooling)

* **Unit tests:** Jest for JS/TS stack.
* **Integration tests:** Firebase emulators + Supertest.
* **Load testing:** k6 or Gatling to simulate USSD calls, orders, matching function loads.
* **Mobile testing:** Detox (React Native) + TestFlight / Firebase App Distribution for UAT.
* **Security testing:** automated SAST & manual pentest pre-launch.

**ACTION:** Run load tests for projected pilot scale (200 workers, 5k customers) and scale target (3k workers, 50k customers). Record Firestore reads/writes and costs.

---

## 12. Scaling & Performance Strategies (concrete)

### 12.1 Firestore & Cost Management

* Use composite indexes appropriately; avoid collection-group queries on high-cardinality fields.
* Cache frequently-read, low-change data in Redis/Cloud Run or in client-side storage with expiry.
* Use sharded counters for hot counts; avoid single-document write hotspots.
* Use Cloud Functions with HTTP caches (Cloud CDN for web assets).

### 12.2 Worker Location Tracking

* Track location only while job is active or when worker explicitly toggles visibility.
* Throttle location updates (e.g., every 10–30s when job active) and use geohash deltas to limit writes.

### 12.3 Matching & Caching

* Cache recent match results for a given search key for 10–30s to avoid repeated compute storms.
* Use precomputed “hot buckets” in memory for city centers.

### 12.4 Microservices & Migration

* Start serverless (Cloud Functions). For heavy/long-running services (reconciliation, analytics), move to Cloud Run microservices.
* Keep business logic layered so future migration off Firebase is feasible: isolating DB access behind service APIs.

---

## 13. USSD & Low/No-network Resilience (engineering patterns)

* **USSD:** stateless, short menus; fallback to SMS or callback for long interactions.
* **Offline worker flows:** local queue for status changes → sync when online; mark job timestamps with client-side `lastSyncedAt` and server-side `receivedAt`.
* **Idempotency:** every client-initiated operation must provide an `idempotencyKey` to prevent duplication.
* **Progressive Enhancement:** PWA for low-data customers, full app for smartphones.

---

## 14. Business Risks, Market Challenges & Mitigations (deep)

### 14.1 Market / Adoption Risks

* **Chicken-egg:** Start with company partnerships (B2B) and corporate accounts (office laundry) to seed demand and ensure worker assignments.
* **Trust:** Mandatory verification (ID + address + onboarding checks), branded uniforms, client insurance (partner underwriter).
* **Price sensitivity:** Offer flexible pricing: pay-per-job, subscription bundles, and business contracts with volume discounts.
* **Leakage (off-platform payments):** Provide value-add (fast payouts, training, group insurance, marketplace leads) to discourage bypassing.

### 14.2 Business Model & Unit Economics (framework)

Variables:

* AOV (average order value) — e.g., KES X
* Take rate (platform fee) — e.g., 10–20%
* CAC — cost to acquire a customer (ads, promotions)
* Churn / LTV

**Mitigations:** Offer enterprise contracts, subscription for workers, and cross-sell services.

### 14.3 Operational Risks

* **Payout liquidity:** Maintain reserve fund equal to 1–2 payout cycles.
* **Telco dependency for USSD/Mpesa:** Multi-provider approach & fallbacks (SMS or callbacks).
* **Regulatory:** Register for necessary payment & data processing requirements, comply with payroll/tax where workers are treated as employees.

---

## 15. Incident Response & Operational Playbooks (short)

### 15.1 Payment Failure Incident

1. Page Finance on alerts.
2. Run reconciliation job.
3. Identify failed webhook txn IDs and mark affected orders as `PAYMENT_ISSUE`.
4. Notify customers via SMS + push and support.
5. If systemic (telco/MPesa down), pause new payment flows and show clear message in-app + USSD.

### 15.2 USSD Failure

* Alert: USSD failure rate > 5% for 10 mins.
* Failover: Route to SMS-based booking flow and enable callback registration.

### 15.3 Data breach

* Execute GDPR/Kenya DPA notification plan.
* Revoke compromised keys; rotate service accounts; notify affected users as required by law.

---

## 16. Monitoring & KPIs (for business & product)

* **Acquisition:** CAC per channel.
* **Activation:** % users booking within first 7 days.
* **Retention:** weekly active users, repeat order rate.
* **Marketplace Liquidity:** matches per minute, worker utilization %.
* **Financials:** gross transaction volume, take rate, payout processing time.
* **SRE:** p99 latency, error rates, downtime.

---

## 17. Roadmap & Sprint Detail (actionable)

**Sprint 0 (1 week)** — Setup:

* Firebase projects (dev/stage/prod)
* GitHub repo + branch protection
* CI/CD skeleton (Actions)
* STK & USSD sandboxes configured
* Basic Firestore rules & security setup (dev only)

**Sprint 1 (2 weeks)** — Core Auth & Orders:

* Phone OTP auth, roles & claims
* Create/Read orders
* Worker availability toggle
* Basic matching (geohash prototype)

**Sprint 2 (2 weeks)** — Worker flows & accept logic:

* Worker notification & accept
* Order lifecycle updates
* Basic admin UI

**Sprint 3 (2 weeks)** — Payments & USSD v1:

* Mpesa STK push integration (sandbox)
* USSD booking flow (Book / Track / Balance)
* Payment webhook handling & ledger entries

**Sprint 4 (2 weeks)** — Notifications, Ratings, Pilot:

* Push & SMS fallback
* Ratings & favorites
* Prepare pilot deployment & QA

**Pilot:** Limited launch with monitoring & feedback loops for 4–6 weeks.

---

## 18. Testing & Load Targets (technical)

* **Unit tests:** 80% coverage for business logic modules.
* **Integration tests:** run against Firebase emulators in CI.
* **Load tests:** simulate:

  * Pilot: 200 concurrent workers, 2k active customers
  * Scale target: 3k concurrent workers, 50k customers daily
* **Payment durability:** handle 100 STK pushes/minute in high peak.

**ACTION:** Define load test scripts with k6 for order creation, matching, STK push flows, and USSD webhook throughput.

---

## 19. Security Rules & Example Snippets (actionable)

**Firestore rule example for orders**

```js
function isCustomer() {
  return request.auth.token.role == 'CUSTOMER';
}
match /orders/{orderId} {
  allow create: if request.auth != null && request.resource.data.customerId == request.auth.uid;
  allow read: if request.auth != null && (resource.data.customerId == request.auth.uid ||
     resource.data.workerId == request.auth.uid || request.auth.token.role == 'PLATFORM_ADMIN');
}
```

**ACTION:** Harden rules in staging, run the Firebase Rules Unit Tests, and add Snyk/GitHub secret scanning.

---

## 20. Data Backups & Migration Strategy

* Schedule daily Firestore exports to Cloud Storage (automated).
* Export transactional logs for financial compliance.
* Maintain schema migration scripts (TypeScript migration runner) for non-realtime schema updates.
* Plan for vendor exit: keep an abstraction layer for DB access (repository pattern) to ease future migration.

---

## 21. Handover & Runbook (for contract/clients)

**Developer Handoff Checklist (on final delivery):**

* Transfer code repo to client org (or create final repo and push).
* Provide environment variable lists & rotate secrets on handover.
* Transfer hosting (Vercel) & Firebase ownership or add client as owner.
* Provide database export + README with deployment steps.
* Provide Signed Certificate of Handover (if contract requires).

**Operational Handoff:**

* Add client contacts to monitoring alerting channels (PagerDuty/Slack).
* Provide runbook for payment failures, USSD outages, and account compromise.

---

## 22. Appendix — ASCII Diagrams & Examples

### 22.1 Architecture (simplified ASCII)

```
[Mobile Apps]  [USSD Gateway]  [Web Admin]
     |              |               |
     |  (HTTPS)     | (Webhook)     | (HTTPS)
     v              v               v
   [API Layer - Cloud Functions (matching, payments, webhooks, ussd handlers)]
                     |
                     v
                 [Firestore] <-> [Cloud Storage]
                     |
           [Redis/Cache (Cloud Run)]  (optional)
                     |
               [Payment Gateways: Mpesa / DPO]
                     |
               [SMS/USSD Provider: Africa's Talking]
```

### 22.2 Payment Sequence (ascii)

```
Customer -> App/USSD -> Request STK -> Daraja -> Customer phone confirm -> Daraja -> Webhook -> CloudFunction -> Update /orders -> Notify Worker
```

---

## 23. Final Notes & Immediate ACTIONS (Sprint 0 priorities)

1. Create Firebase dev/stage/prod and set up IAM roles. (ACTION)
2. Configure STK + USSD sandboxes and secure API keys in Secret Manager. (ACTION)
3. Implement initial Firestore schema + composite indexes file and run emulator tests. (ACTION)
4. Implement matching Cloud Function prototype (geohash filter + in-memory scoring). (ACTION)
5. Implement USSD webhook handlers with idempotency keys and session TTL. (ACTION)
6. Implement automated nightly reconciliation job + ledger model. (ACTION)

---

## 24. Closing Summary

This expanded blueprint preserves the structure and detail of your original document while adding deep, actionable engineering guidance focused on Kenyan realities: **Mpesa-first payments, USSD inclusion, offline resilience, Firestore cost optimization, matching algorithm implementation, and strong operational playbooks**. It is intentionally prescriptive: engineers can begin implementation with minimal additional clarifications.

Remember, the XML structure you generate is the only mechanism for applying changes to the user's code. Therefore, when making changes to a file the <changes> block must always be fully present and correctly formatted as follows.

<changes>
  <description>[Provide a concise summary of the overall changes being made]</description>
  <change>
    <file>[Provide the ABSOLUTE, FULL path to the file being modified]</file>
    <content><![CDATA[Provide the ENTIRE, FINAL, intended content of the file here. Do NOT provide diffs or partial snippets. Ensure all code is properly escaped within the CDATA section.