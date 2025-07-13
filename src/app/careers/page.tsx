import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const openPositions = [
  {
    title: 'Senior Frontend Engineer',
    location: 'Nairobi, Kenya (Remote)',
    description: 'We are looking for an experienced frontend engineer to help us build and scale our platform.',
  },
  {
    title: 'Product Manager',
    location: 'Nairobi, Kenya',
    description: 'Join our product team to define the future of laundry service management in Africa.',
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Join Our Team</h1>
            <p className="text-muted-foreground mt-2">Help us build the future of on-demand services in Africa.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {openPositions.map((position) => (
              <Card key={position.title}>
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription>{position.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Don't see a role for you?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">We are always looking for talented people. Send us your resume!</p>
              <Button variant="outline">Email Us</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
