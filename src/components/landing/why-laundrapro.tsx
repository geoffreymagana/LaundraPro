import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Check, HeartHandshake, User } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"

const forCompaniesFeatures = [
  "Manage bookings and assign jobs in real-time",
  "Automate payouts and track team performance",
  "Access a wider client base through our network",
  "Scale your business with a professional digital presence",
]

const forWorkersFeatures = [
  "Access a steady stream of verified job requests",
  "Receive fair, transparent, and timely bi-weekly payments",
  "Build your professional reputation with client ratings",
  "Gain access to training and community support",
]

const forClientsFeatures = [
  "Book trusted, vetted mama fuas in minutes",
  "Pay securely with M-Pesa or card, no cash needed",
  "Schedule services at your convenience (pickup or in-home)",
  "Enjoy peace of mind with rated and verified professionals",
]

export default function WhyLaundraPro() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Partner With <span className="text-secondary">LaundraPro?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We empower every part of the laundry ecosystem. Find out how our platform creates opportunities for you.
          </p>
        </div>
        <Tabs defaultValue="companies" className="mt-12 w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="companies" className="py-3 text-base">
              <Building className="mr-2 h-5 w-5" /> For Laundry Companies
            </TabsTrigger>
            <TabsTrigger value="workers" className="py-3 text-base">
              <User className="mr-2 h-5 w-5" /> For Mama Fuas
            </TabsTrigger>
            <TabsTrigger value="clients" className="py-3 text-base">
              <HeartHandshake className="mr-2 h-5 w-5" /> For Clients
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="companies" className="mt-8">
            <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-2xl">Scale Your Laundry Business, Effortlessly</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-muted-foreground mb-6">Stop juggling spreadsheets and phone calls. Our dashboard gives you the tools to operate like a modern tech company.</p>
                            <ul className="space-y-3">
                                {forCompaniesFeatures.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0"/>
                                    <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                            <Button asChild className="mt-8">
                                <Link href="/#partner">Become a Partner Company</Link>
                            </Button>
                        </CardContent>
                    </div>
                     <div className="relative h-64 md:h-full min-h-[300px]">
                        <Image src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Business dashboard" layout="fill" objectFit="cover" data-ai-hint="dashboard business"/>
                    </div>
                </div>
            </Card>
          </TabsContent>

          <TabsContent value="workers" className="mt-8">
             <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-2xl">Find Dignified Work You Can Count On</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-muted-foreground mb-6">Join a network that values your skills. LaundraPro connects you with regular clients and ensures you are paid fairly and on time.</p>
                            <ul className="space-y-3">
                                {forWorkersFeatures.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0"/>
                                    <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                            <Button asChild className="mt-8">
                                <Link href="/careers">Join as a Mama Fua</Link>
                            </Button>
                        </CardContent>
                    </div>
                     <div className="relative h-64 md:h-full min-h-[300px]">
                        <Image src="https://plus.unsplash.com/premium_photo-1723780950349-0133c9232939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" alt="Happy worker" layout="fill" objectFit="cover" data-ai-hint="happy worker"/>
                    </div>
                </div>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="mt-8">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-2xl">Reliable Laundry Service is a Tap Away</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-muted-foreground mb-6">Say goodbye to the hassle and uncertainty of finding good help. Book a professional, vetted mama fua through our trusted local partners.</p>
                            <ul className="space-y-3">
                                {forClientsFeatures.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0"/>
                                    <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                             <Button asChild className="mt-8">
                                <Link href="/find">Find Mama Fuas Near Me</Link>
                            </Button>
                        </CardContent>
                    </div>
                    <div className="relative h-64 md:h-full min-h-[300px]">
                        <Image src="https://images.unsplash.com/photo-1587573578335-9672da4d0292?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="Client using a phone" layout="fill" objectFit="cover" data-ai-hint="person phone"/>
                    </div>
                </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
