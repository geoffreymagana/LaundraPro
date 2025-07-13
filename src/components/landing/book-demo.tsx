import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BookDemo() {
  return (
    <section id="demo" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Book a <span className="text-secondary">Demo</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            See how LaundraPro can power your laundry network. A 15-minute walkthrough with our team will show you the full dashboard, booking app, and payment flow.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/schedule">Schedule Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
