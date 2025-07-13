import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      <Image
        src="https://images.unsplash.com/photo-1556909212-6c5b5d36ec6f?auto=format&fit=crop&w=1200&q=80"
        alt="A clean and organized laundry room"
        fill
        className="object-cover"
        priority
        data-ai-hint="laundry room"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container max-w-4xl text-center text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your Laundry Business, Digitized
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            LaundraPro helps you run your laundry team like a tech company — bookings, payments, performance, all in one dashboard.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="#demo">Book a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="#partner">Join as a Laundry Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
