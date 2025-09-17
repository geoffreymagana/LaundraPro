import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Building, HeartHandshake, User } from 'lucide-react';
import Link from 'next/link';

const userTypes = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Laundry Company",
    description: "Support for managing your dashboard, workers, and payments.",
    link: "/help/company"
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: "Mama Fua / Worker",
    description: "Help with your profile, job notifications, and getting paid.",
    link: "/help/worker"
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Client",
    description: "Assistance with booking, payments, and finding services.",
    link: "/help/client"
  }
];

export default function HelpCenterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">Help Center</h1>
            <p className="mt-4 text-xl text-muted-foreground">
                Welcome! How can we help you today? Select your account type to get started.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {userTypes.map((user) => (
            <Card key={user.title} className="flex flex-col text-center items-center p-6 hover:shadow-primary/20">
              <CardHeader className="items-center p-0">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                    {user.icon}
                </div>
                <CardTitle>{user.title}</CardTitle>
                <CardDescription className="pt-2">{user.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-auto pt-6 w-full">
                <Button asChild className="w-full">
                  <Link href={user.link}>
                    Get Help
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
