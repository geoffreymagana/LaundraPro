<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check, Shield, Briefcase, Users, PieChart, CreditCard, Smartphone, Heart, Star, Clock, MapPin, TrendingUp, Package } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

const clientBenefits = [
  { icon: <Shield className="h-5 w-5 text-primary" />, title: "Verified Professionals", description: "Background-checked mama fuas" },
  { icon: <Clock className="h-5 w-5 text-primary" />, title: "Reliable Service", description: "Book pickup & delivery times" },
  { icon: <CreditCard className="h-5 w-5 text-primary" />, title: "Secure Payments", description: "M-Pesa integration" },
  { icon: <Star className="h-5 w-5 text-primary" />, title: "Quality Assured", description: "Ratings & reviews system" },
]

const workerBenefits = [
  { icon: <Smartphone className="h-5 w-5 text-green-600" />, title: "Easy Job Management", description: "Accept jobs through the app" },
  { icon: <TrendingUp className="h-5 w-5 text-green-600" />, title: "Steady Income", description: "Weekly guaranteed payments" },
  { icon: <MapPin className="h-5 w-5 text-green-600" />, title: "Local Clients", description: "Work in your neighborhood" },
  { icon: <Heart className="h-5 w-5 text-green-600" />, title: "Support & Training", description: "Business development help" },
]

const companyBenefits = [
  { icon: <Users className="h-5 w-5 text-purple-600" />, title: "Manage Your Team", description: "Dashboard for staff & jobs" },
  { icon: <CreditCard className="h-5 w-5 text-purple-600" />, title: "Payment Processing", description: "Automated billing & payouts" },
  { icon: <PieChart className="h-5 w-5 text-purple-600" />, title: "Business Analytics", description: "Performance insights" },
  { icon: <Package className="h-5 w-5 text-purple-600" />, title: "White-label App", description: "Your brand, our platform" },
=======
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
>>>>>>> 8160e0d08474a5a4d998d285eba3c6ca485e32a0
]

export default function WhyLaundraPro() {
  return (
<<<<<<< HEAD
    <section id="why" className="py-16 sm:py-24 bg-background">
=======
    <section id="why" className="py-16 sm:py-24 bg-white">
>>>>>>> 8160e0d08474a5a4d998d285eba3c6ca485e32a0
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Partner With <span className="text-secondary">LaundraPro?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We empower every part of the laundry ecosystem. Find out how our platform creates opportunities for you.
          </p>
        </div>
<<<<<<< HEAD
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* For Clients */}
          <Card className="flex flex-col text-left hover:shadow-primary/20 !shadow-lg">
            <CardHeader className="rounded-t-lg bg-primary text-primary-foreground p-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">For Clients</CardTitle>
                  <CardDescription className="text-primary-foreground/80">Find trusted laundry professionals</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <ul className="space-y-5 flex-grow">
                {clientBenefits.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-6">
                <Link href="/find">Find Mama Fuas</Link>
              </Button>
            </CardContent>
          </Card>

          {/* For Mama Fuas */}
          <Card className="flex flex-col text-left bg-green-500/10 hover:shadow-green-500/20 !shadow-lg">
            <CardHeader className="rounded-t-lg bg-green-600 text-white p-6">
              <div className="flex items-center gap-4">
                <Heart className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">For Mama Fuas</CardTitle>
                  <CardDescription className="text-white/80">Grow your laundry business</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <ul className="space-y-5 flex-grow">
                {workerBenefits.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-green-900">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
                <Link href="/careers">Join as Mama Fua</Link>
              </Button>
            </CardContent>
          </Card>

          {/* For Businesses */}
          <Card className="flex flex-col text-left bg-purple-500/10 hover:shadow-purple-500/20 !shadow-lg">
            <CardHeader className="rounded-t-lg bg-purple-600 text-white p-6">
              <div className="flex items-center gap-4">
                <Briefcase className="h-8 w-8" />
                <div>
                  <CardTitle className="text-2xl">For Businesses</CardTitle>
                  <CardDescription className="text-white/80">Scale your laundry operations</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <ul className="space-y-5 flex-grow">
                {companyBenefits.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-purple-900">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/#partner">Start Your Platform</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
=======
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
>>>>>>> 8160e0d08474a5a4d998d285eba3c6ca485e32a0
      </div>
    </section>
  );
}
