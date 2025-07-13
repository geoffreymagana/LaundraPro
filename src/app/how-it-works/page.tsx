import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, HeartHandshake, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const companySteps = [
    { title: "1. Become a Partner", description: "Sign up and get approved to join the LaundraPro network.", image: "https://placehold.co/350x150.png", imageHint: "handshake deal" },
    { title: "2. Onboard Your Team", description: "Register your mama fuas and set up their profiles in minutes.", image: "https://placehold.co/350x150.png", imageHint: "team members" },
    { title: "3. Manage Operations", description: "Use your dashboard to assign jobs, track progress, and manage payroll.", image: "https://placehold.co/350x150.png", imageHint: "dashboard analytics" },
    { title: "4. Scale Your Business", description: "Grow your client base and increase revenue with our powerful tools.", image: "https://placehold.co/350x150.png", imageHint: "business growth" },
];

const workerSteps = [
    { title: "1. Join a Partner Company", description: "Connect with a registered laundry company on our platform.", image: "https://placehold.co/350x150.png", imageHint: "group meeting" },
    { title: "2. Get Job Alerts", description: "Receive real-time notifications for jobs in your area via the app.", image: "https://placehold.co/350x150.png", imageHint: "phone notification" },
    { title: "3. Deliver Great Service", description: "Accept jobs, communicate with clients, and provide top-quality service.", image: "https://placehold.co/350x150.png", imageHint: "clean laundry" },
    { title: "4. Get Paid, Guaranteed", description: "Receive your earnings automatically via M-Pesa every two weeks.", image: "https://placehold.co/350x150.png", imageHint: "mobile payment" },
];

const clientSteps = [
    { title: "1. Find a Service", description: "Open the app and enter your location to see available mama fuas.", image: "https://placehold.co/350x150.png", imageHint: "person phone" },
    { title: "2. Book & Schedule", description: "Choose a professional, select a service, and schedule a convenient time.", image: "https://placehold.co/350x150.png", imageHint: "calendar schedule" },
    { title: "3. Pay Securely", description: "Pay with M-Pesa or card directly in the app. No cash needed.", image: "https://placehold.co/350x150.png", imageHint: "secure payment" },
    { title: "4. Rate Your Experience", description: "Leave feedback to help maintain our high-quality community.", image: "https://placehold.co/350x150.png", imageHint: "review stars" },
];

const downloadCards = [
    {
        title: "Download the Client App",
        description: "Scan to download",
        qrCode: "https://placehold.co/150x150.png",
        qrHint: "qr code",
        link: "#"
    },
    {
        title: "Download the Worker App",
        description: "Scan to download",
        qrCode: "https://placehold.co/150x150.png",
        qrHint: "qr code",
        link: "#"
    }
];

const TimelineStep = ({ step, isLast, imageSide = 'left' }: { step: { title: string, description: string, image: string, imageHint: string }, isLast: boolean, imageSide?: 'left' | 'right' }) => (
  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
    <div className={cn("relative justify-self-center", imageSide === 'right' && 'md:order-last')}>
      <Image src={step.image} alt={step.title} width={350} height={150} className="rounded-lg shadow-lg" data-ai-hint={step.imageHint} />
    </div>
    <div className="relative">
      {!isLast && <div className={cn("hidden md:block absolute top-4 h-full w-px bg-border", imageSide === 'left' ? 'left-[-4rem]' : 'right-[-4rem]')} />}
      <div className={cn("relative", imageSide === 'left' ? 'pl-8 md:pl-0' : 'pl-8 md:pl-0 md:text-right')}>
         <div className={cn("hidden md:block absolute top-4 h-3 w-3 rounded-full bg-primary ring-4 ring-background", imageSide === 'left' ? 'left-[-4.375rem]' : 'right-[-4.375rem]')} />
        <h3 className="text-2xl font-bold">{step.title}</h3>
        <p className="mt-2 text-muted-foreground text-lg">{step.description}</p>
      </div>
    </div>
  </div>
);

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">How LaundraPro Works</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A simple, powerful, end-to-end solution for laundry services.
          </p>
        </div>

        <section id="for-clients" className="mt-24 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3"><HeartHandshake className="h-8 w-8 text-primary"/>For Clients</h2>
            <p className="mt-2 text-lg text-muted-foreground">Your guide to hassle-free laundry.</p>
          </div>
          <div className="space-y-12 md:space-y-24 max-w-5xl mx-auto">
            {clientSteps.map((step, index) => (
              <TimelineStep key={step.title} step={step} isLast={index === clientSteps.length - 1} imageSide="left" />
            ))}
          </div>
        </section>

        <section id="for-workers" className="mt-24 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3"><User className="h-8 w-8 text-primary"/>For Mama Fuas</h2>
            <p className="mt-2 text-lg text-muted-foreground">Your path to consistent, dignified work.</p>
          </div>
           <div className="space-y-12 md:space-y-24 max-w-5xl mx-auto">
            {workerSteps.map((step, index) => (
              <TimelineStep key={step.title} step={step} isLast={index === workerSteps.length - 1} imageSide="right" />
            ))}
          </div>
        </section>

        <section id="for-companies" className="mt-24 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3"><Building className="h-8 w-8 text-primary"/>For Laundry Companies</h2>
            <p className="mt-2 text-lg text-muted-foreground">How to scale your business with our tools.</p>
          </div>
           <div className="space-y-12 md:space-y-24 max-w-5xl mx-auto">
            {companySteps.map((step, index) => (
              <TimelineStep key={step.title} step={step} isLast={index === companySteps.length - 1} imageSide="left" />
            ))}
          </div>
        </section>

        <section className="mt-24 bg-muted/50 py-16 rounded-xl">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold">It's easier in the apps</h2>
                <p className="mt-2 text-muted-foreground">One platform, two tailored experiences.</p>
                <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {downloadCards.map((card) => (
                        <Card key={card.title} className="text-left overflow-hidden">
                            <Link href={card.link} className="block h-full hover:bg-muted/50 transition-colors">
                                <CardContent className="p-6 flex items-center gap-6 h-full">
                                    <Image src={card.qrCode} alt={card.title} width={100} height={100} data-ai-hint={card.qrHint} className="rounded-md" />
                                    <div className="flex-grow">
                                        <CardTitle className="text-xl">{card.title}</CardTitle>
                                        <CardDescription>{card.description}</CardDescription>
                                    </div>
                                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
