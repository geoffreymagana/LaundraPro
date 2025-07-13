import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard, CreditCard, CalendarDays, BarChartBig } from 'lucide-react';

const features = [
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Manage Your Team Digitally',
    description: 'Assign jobs, schedule routes, and monitor laundry staff in real time.',
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'Secure Client Payments',
    description: 'Integrated with DPO for safe, local and international transactions — you get paid directly.',
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    title: 'Payout Mama Fuas Bi-Weekly',
    description: 'We track your workers’ earnings and automate payments every 2 weeks.',
  },
  {
    icon: <BarChartBig className="h-8 w-8 text-primary" />,
    title: 'Performance & Ratings Dashboard',
    description: 'View job stats, staff performance, feedback, and trends across your locations.',
  },
];

export default function WhyLaundraPro() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Use LaundraPro?
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg font-semibold">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
