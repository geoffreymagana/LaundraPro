import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h2 className="font-semibold text-lg">1. Agreement to Terms</h2>
            <p>
              By using our Services, you agree to be bound by these Terms. If you do not agree to be bound by these Terms, do not use the Services.
            </p>
            <h2 className="font-semibold text-lg">2. Changes to Terms or Services</h2>
            <p>
              We may update the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the updated Terms on the Site or through other communications.
            </p>
            <h2 className="font-semibold text-lg">3. Who May Use the Services</h2>
            <p>
              You may use the Services only if you are 18 years or older and capable of forming a binding contract with LaundraPro and are not barred from using the Services under applicable law.
            </p>
            <h2 className="font-semibold text-lg">4. Termination</h2>
            <p>
              We may terminate or suspend your access to and use of the Services, at our sole discretion, at any time and without notice to you.
            </p>
             <h2 className="font-semibold text-lg">5. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: legal@laundrapro.com.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
