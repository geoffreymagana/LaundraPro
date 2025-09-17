import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const pressReleases = [
  {
    date: "October 26, 2023",
    title: "LaundraPro Launches to Digitize Informal Laundry Services in Kenya",
    link: "#",
  },
  {
    date: "November 15, 2023",
    title: "LaundraPro Secures Pre-Seed Funding to Expand Across East Africa",
    link: "#",
  },
];

export default function PressPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">Press & Media</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Information and resources for journalists, bloggers, and media professionals.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Media Kit</CardTitle>
              <CardDescription>
                Download our official logos, brand guidelines, and product screenshots.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download Media Kit
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Press Releases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {pressReleases.map((release) => (
                <div key={release.title} className="flex flex-col sm:flex-row justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">{release.date}</p>
                    <p className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      <a href={release.link}>{release.title}</a>
                    </p>
                  </div>
                  <Button variant="outline" asChild className="mt-2 sm:mt-0">
                    <a href={release.link}>Read More</a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
               <CardDescription>
                For all media inquiries, please contact our communications team.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    <strong>Email:</strong> <a href="mailto:press@laundrapro.com" className="text-primary hover:underline">press@laundrapro.com</a>
                </p>
            </CardContent>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
}
