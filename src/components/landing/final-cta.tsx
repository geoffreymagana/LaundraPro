import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FinalCta() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Ready to Scale Your Laundry Workforce?
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Join other smart companies digitizing the way they manage domestic help — fully localized, fully mobile.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/start">Launch My App</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
