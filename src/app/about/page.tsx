import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const clientBenefits = [
    "View available mama fuas near you",
    "Schedule pickups or in-home service",
    "Pay securely via DPO (Mpesa, card)",
    "Rate service and rebook with ease"
];

const companyBenefits = [
    "Manage bookings in real time",
    "Assign mama fuas based on availability and location",
    "Track worker performance, ratings, and attendance",
    "Get paid instantly from clients through DPO",
    "Automate bi-weekly payouts to mama fuas"
];

const ourPromise = [
    { title: "Accountability", description: "Every job is tracked, rated, and verified." },
    { title: "Equity", description: "Mama fuas are paid fairly and on time — always." },
    { title: "Trust", description: "Our platform is built with client safety and worker dignity at its core." },
    { title: "Growth", description: "We help laundry businesses scale without chaos." }
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">About Us | LaundraPro</h1>
            <p className="mt-4 text-xl text-muted-foreground">Digitizing Local Laundry Workforces. Empowering Communities.</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>🌍 Who We Are</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              <p>
                LaundraPro is an African-built technology platform designed to transform the way on-demand laundry services are delivered, managed, and experienced. We work with local laundry companies and organizations to help them digitize their operations — connecting them to clients in need of trusted, professional mama fuas (laundry workers).
              </p>
              <p className="font-semibold text-foreground">
                We believe that clean clothes shouldn’t be a luxury, and dignified work shouldn’t be hard to find. That’s why LaundraPro exists.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>🎯 Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a future where every household has access to reliable, on-demand laundry services — while empowering thousands of mama fuas with consistent, dignified work through technology.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🚀 Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To digitize informal laundry work in Africa by providing companies with the tools they need to manage workers, automate payments, and deliver exceptional client experiences at scale.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
                <CardTitle>💡 What We Do</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">👥 For Clients</h3>
                    <p className="text-muted-foreground">We help everyday people book laundry professionals they can trust — in just a few taps.</p>
                    <ul className="space-y-2">
                        {clientBenefits.map((item, index) => (
                           <li key={index} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0"/>
                                <span>{item}</span>
                           </li>
                        ))}
                    </ul>
                    <p className="font-semibold">Your laundry experience becomes simpler, safer, and stress-free.</p>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">🧩 For Laundry Companies</h3>
                    <p className="text-muted-foreground">We power your business with modern tools to help you run a high-performing workforce.</p>
                     <ul className="space-y-2">
                        {companyBenefits.map((item, index) => (
                           <li key={index} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0"/>
                                <span>{item}</span>
                           </li>
                        ))}
                    </ul>
                    <p className="font-semibold">Whether you're managing 10 or 100 workers, LaundraPro turns your team into a trusted, organized, digital-ready brand.</p>
                </div>
            </CardContent>
          </Card>

           <Card>
              <CardHeader>
                <CardTitle>🤝 Our Promise</CardTitle>
                 <p className="text-muted-foreground pt-2">At LaundraPro, we believe in local solutions with global standards:</p>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-6">
                 {ourPromise.map((item) => (
                    <div key={item.title}>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                ))}
              </CardContent>
            </Card>

            <div className="text-center bg-muted/50 p-8 rounded-xl">
                 <h2 className="text-2xl font-bold">📍 Proudly Built in Kenya, for Africa</h2>
                 <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    LaundraPro is more than just software — it’s a movement to uplift informal work through technology. We partner with Saccos, estates, and organizations that share this vision of empowerment and excellence.
                </p>
            </div>

             <div className="text-center">
                 <h2 className="text-3xl font-bold">📬 Want to Work With Us?</h2>
                 <p className="mt-4 text-lg text-muted-foreground">
                    Are you a laundry company looking to streamline operations? <br/>
                    Are you a mama fua looking for consistent jobs? <br/>
                    Are you a client in need of trusted help at home?
                 </p>
                 <p className="mt-4 font-bold text-xl">We’re here for you.</p>
                 <div className="mt-8 flex items-center justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                     <Button variant="secondary" asChild>
                        <Link href="/#demo">Book a Demo</Link>
                    </Button>
                 </div>
            </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
