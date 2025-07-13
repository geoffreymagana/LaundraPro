import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to LaundraPro, your trusted partner in digitizing and empowering laundry service networks. Our mission is to provide technology that streamlines operations, ensures fair pay, and delivers reliable, high-quality service to clients.
            </p>
            <p>
              Founded on the belief that technology can uplift local economies, we equip laundry businesses with the tools they need to succeed in a digital world. From managing bookings and payments to tracking performance, LaundraPro is the all-in-one solution for modern laundry management.
            </p>
            <p>
              We are passionate about creating a transparent and efficient ecosystem for both laundry companies and the dedicated 'mama fuas' who are the backbone of this industry.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
