
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FindMamaFua() {
  return (
    <section id="find-mama-fua" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 text-center shadow-lg sm:p-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to Experience Hassle-Free Laundry?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join thousands of satisfied clients who trust LaundraPro for their laundry needs. Professional service, fair prices, delivered to your doorstep.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/find">Find Mama Fuas Near Me</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/download">Download the App</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

    