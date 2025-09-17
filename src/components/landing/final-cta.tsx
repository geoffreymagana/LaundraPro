import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FinalCta() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            <span className="text-primary">Ready to Join</span> the Laundry Revolution?
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Whether you're a company, a worker, or a client, there's a place for you at LaundraPro.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#why">Become a Partner</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
