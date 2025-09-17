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
]

export default function WhyLaundraPro() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Partner With <span className="text-secondary">LaundraPro?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We empower every part of the laundry ecosystem. Find out how our platform creates opportunities for you.
          </p>
        </div>
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
      </div>
    </section>
  );
}
