import { Briefcase, CheckCircle, PiggyBank, Bell } from 'lucide-react';

const features = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Multi-Region Management',
    description: 'Run teams in multiple areas with centralized data and local flexibility.',
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: 'Verified Workforce',
    description: 'Each worker is verified with documents and training before being added to your company.',
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-primary" />,
    title: 'Transparent Finances',
    description: 'Track company income, service charges, and worker payouts easily.',
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: 'Real-Time Updates',
    description: 'Receive alerts on job status, client feedback, and urgent events.',
  },
];

export default function PlatformFeatures() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Platform Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A fully managed SaaS platform to support your laundry business — from booking to payout.
          </p>
        </div>
        <div className="mt-16 grid gap-y-12 gap-x-8 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-7 text-foreground">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
