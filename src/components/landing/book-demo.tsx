import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Users } from 'lucide-react';

const demoFeatures = [
  {
    icon: <Calendar className="h-8 w-8 text-secondary-foreground" />,
    title: 'Schedule Instantly',
    description: 'Pick a time that works for you',
  },
  {
    icon: <Clock className="h-8 w-8 text-secondary-foreground" />,
    title: '15-Minute Demo',
    description: 'Quick walkthrough of key features',
  },
  {
    icon: <Users className="h-8 w-8 text-secondary-foreground" />,
    title: 'Expert Guidance',
    description: 'Get answers to your questions',
  },
];

export default function BookDemo() {
  return (
    <section id="demo" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Book a <span className="text-secondary">Demo</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            See how LaundraPro can power your laundry network. A 15-minute walkthrough with our
            team will show you the full dashboard, booking app, and payment flow.
          </p>
          <Card className="mt-12 text-left shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
                {demoFeatures.map((feature) => (
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
                  <Link href="/schedule">Schedule Demo Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
