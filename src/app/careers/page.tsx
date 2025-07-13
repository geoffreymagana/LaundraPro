import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const whyWorkAtLaundraPro = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Impact-Driven Work',
    description: 'Your work directly empowers local entrepreneurs and creates economic opportunities across Africa.',
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Local & Remote',
    description: 'Flexible work arrangements with options for remote work and collaboration across time zones.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Growth Opportunities',
    description: 'Join us in the early stages and grow with the company as we expand across the continent.',
  },
];

const openPositions = [
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Join our engineering team to build scalable solutions for the laundry industry across Africa.',
    requirements: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead product strategy and roadmap for our B2B SaaS platform serving laundry businesses.',
    requirements: ['B2B SaaS', 'Product Strategy', 'User Research', 'Analytics'],
  },
  {
    title: 'Business Development',
    department: 'Sales',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Drive growth by building relationships with laundry businesses and expanding our network.',
    requirements: ['B2B Sales', 'Relationship Building', 'Local Market Knowledge', 'Swahili/English'],
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 sm:py-24">
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Join Our Team</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Help us transform the laundry industry across Africa. We're building the future of local service businesses.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">Why Work at LaundraPro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {whyWorkAtLaundraPro.map((item) => (
                <div key={item.title} className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <Card key={position.title} className="p-6 shadow-md transition-shadow hover:shadow-lg">
                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2 text-sm text-muted-foreground">
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{position.department}</Badge>
                            <span>{position.location}</span>
                            <span>{position.type}</span>
                        </div>
                        <p className="mt-4 text-muted-foreground">{position.description}</p>
                        <div className="mt-4">
                            <p className="text-sm font-semibold mb-2">Key Requirements:</p>
                            <div className="flex flex-wrap gap-2">
                                {position.requirements.map(req => (
                                    <Badge key={req} variant="outline">{req}</Badge>
                                ))}
                            </div>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                        <Button>Apply Now</Button>
                      </div>
                   </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold">Don't see your role?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We're always looking for talented individuals who share our passion for transforming local businesses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">Send General Application</Button>
              <Button size="lg" variant="outline">Subscribe to Job Alerts</Button>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
