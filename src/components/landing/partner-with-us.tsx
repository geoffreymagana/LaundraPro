import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Briefcase } from 'lucide-react';

const partnershipBenefits = [
  {
    icon: <Briefcase className="h-8 w-8 text-secondary-foreground" />,
    title: 'For Companies',
    description: 'Digitize operations and scale your business.',
  },
  {
    icon: <Users className="h-8 w-8 text-secondary-foreground" />,
    title: 'For Mama Fuas',
    description: 'Find consistent, dignified work with fair pay.',
  },
  {
    icon: <Calendar className="h-8 w-8 text-secondary-foreground" />,
    title: 'Quick Onboarding',
    description: 'Get started in minutes with our team.',
  },
];

export default function PartnerWithUs() {
  return (
    <section id="partner" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's <span className="text-secondary">Partner</span> Together
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We're looking for passionate companies and individuals to join our mission. See how we can help you grow.
          </p>
          <Card className="mt-12 text-left shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
                {partnershipBenefits.map((feature) => (
                  <div key={feature.title} className="flex flex-col items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/contact">Book a Partnership Demo</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
