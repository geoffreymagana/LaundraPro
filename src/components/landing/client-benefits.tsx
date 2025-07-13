import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, ShieldCheck, CalendarCheck, Star } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Easy Booking on WhatsApp',
    description: 'Book a verified mama fua in seconds right from your phone. No app download needed.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Trusted & Vetted Workers',
    description: 'Every mama fua on the platform is background-checked and trained for professional service.',
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-primary" />,
    title: 'Pay Securely with M-Pesa',
    description: 'No more cash hassles. Pay for your service securely and get a digital receipt instantly.',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Rate & Review Your Service',
    description: 'Your feedback helps maintain high quality and ensures you always get the best service.',
  },
];

export default function ClientBenefits() {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Finding a Reliable Mama Fua Has Never Been Easier
            </h2>
              <p className="mt-4 text-lg text-muted-foreground">
              For clients, booking through a LaundraPro-powered company means convenience, safety, and quality you can trust.
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2">
            {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        {benefit.icon}
                      </div>
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold leading-tight text-foreground">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1628191079532-f2b7f3b5e5a4?auto=format&fit=crop&w=800&q=80"
            alt="Happy customer using a smartphone"
            width={600}
            height={700}
            className="rounded-xl shadow-2xl object-cover w-full h-full"
            data-ai-hint="happy customer"
          />
        </div>
      </div>
    </section>
  );
}
