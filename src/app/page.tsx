import Header from '@/components/header';
import Hero from '@/components/landing/hero';
import FindMamaFua from '@/components/landing/find-mama-fua';
import WhyLaundraPro from '@/components/landing/why-laundrapro';
import PartnerWithUs from '@/components/landing/partner-with-us';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import FinalCta from '@/components/landing/final-cta';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyLaundraPro />
        <div className="container mx-auto px-4">
          <FindMamaFua />
          <PartnerWithUs />
          <Testimonials />
          <Faq />
          <FinalCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
