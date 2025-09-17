import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h2 className="font-semibold text-lg">1. Introduction</h2>
            <p>
              This Privacy Policy explains how LaundraPro ("we", "us", or "our") collects, uses, and discloses information about you when you use our website, mobile application, and other online products and services (collectively, the "Services").
            </p>
            <h2 className="font-semibold text-lg">2. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, payment information, and any other information you choose to provide.
            </p>
            <h2 className="font-semibold text-lg">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our Services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and events offered by LaundraPro.
            </p>
            <h2 className="font-semibold text-lg">4. Data Security</h2>
            <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>
            <h2 className="font-semibold text-lg">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: privacy@laundrapro.com.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
