import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, User, Building, HeartHandshake, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const companySteps = [
    { title: "1. Become a Partner", description: "Sign up and get approved to join the LaundraPro network." },
    { title: "2. Onboard Your Team", description: "Register your mama fuas and set up their profiles in minutes." },
    { title: "3. Manage Operations", description: "Use your dashboard to assign jobs, track progress, and manage payroll." },
    { title: "4. Scale Your Business", description: "Grow your client base and increase revenue with our powerful tools." },
];

const workerSteps = [
    { title: "1. Join a Partner Company", description: "Connect with a registered laundry company on our platform." },
    { title: "2. Get Job Alerts", description: "Receive real-time notifications for jobs in your area via the app." },
    { title: "3. Deliver Great Service", description: "Accept jobs, communicate with clients, and provide top-quality service." },
    { title: "4. Get Paid, Guaranteed", description: "Receive your earnings automatically via M-Pesa every two weeks." },
];

const clientSteps = [
    { title: "1. Find a Service", description: "Open the app and enter your location to see available mama fuas." },
    { title: "2. Book & Schedule", description: "Choose a professional, select a service, and schedule a convenient time." },
    { title: "3. Pay Securely", description: "Pay with M-Pesa or card directly in the app. No cash needed." },
    { title: "4. Rate Your Experience", description: "Leave feedback to help maintain our high-quality community." },
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

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">How LaundraPro Works</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A simple, powerful, end-to-end solution for laundry services.
          </p>
        </div>

        <Tabs defaultValue="clients" className="mt-12 w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="clients" className="py-3 text-base">
              <HeartHandshake className="mr-2 h-5 w-5" /> For Clients
            </TabsTrigger>
            <TabsTrigger value="workers" className="py-3 text-base">
              <User className="mr-2 h-5 w-5" /> For Mama Fuas
            </TabsTrigger>
            <TabsTrigger value="companies" className="py-3 text-base">
              <Building className="mr-2 h-5 w-5" /> For Companies
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="clients" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Getting Started as a Client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {clientSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="workers" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Getting Started as a Mama Fua</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {workerSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Getting Started as a Company</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {companySteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                       <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
