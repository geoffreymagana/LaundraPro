import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      <Image
        src="https://images.unsplash.com/photo-1593855648042-850fa7bf86bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Clean clothes, dignified work, and business <span className="text-secondary">growth</span>—all in one place.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            LaundraPro connects laundry companies, professional mama fuas, and clients through a seamless digital platform built for Africa.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="#why">Partner with Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white bg-white/20 hover:bg-white/30">
              <Link href="/find">Find a Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
