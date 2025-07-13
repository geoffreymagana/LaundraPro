import Header from '@/components/header';
import Hero from '@/components/landing/hero';
import ClientBenefits from '@/components/landing/client-benefits';
import FindMamaFua from '@/components/landing/find-mama-fua';
import WhyLaundraPro from '@/components/landing/why-laundrapro';
import PlatformFeatures from '@/components/landing/platform-features';
import BookDemo from '@/components/landing/book-demo';
import Testimonials from '@/components/landing/testimonials';
import FinalCta from '@/components/landing/final-cta';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4">
          <ClientBenefits />
          <FindMamaFua />
          <WhyLaundraPro />
          <PlatformFeatures />
          <BookDemo />
          <Testimonials />
          <FinalCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
