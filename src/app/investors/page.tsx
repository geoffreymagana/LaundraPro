import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Mail } from 'lucide-react';

export default function InvestorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">Investor Relations</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Powering the future of on-demand services in Africa.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Investment Thesis</CardTitle>
              <CardDescription>
                LaundraPro is positioned at the intersection of the growing gig economy and the need for digitization in Africa's informal sector. We are building the essential infrastructure for local service businesses to scale.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    We are creating a scalable, capital-efficient model that empowers small businesses while delivering high-quality services to a growing urban population. Our platform is not just about laundry; it's about building the operating system for local, on-demand work across the continent.
                </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <CardTitle>Reports & Filings</CardTitle>
                 <CardDescription>
                    Access our latest financial reports and company statements.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
                <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Q3 2023 Report
                </Button>
                 <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Annual Shareholder Letter
                </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Investor Relations</CardTitle>
              <CardDescription>
                For investment inquiries, please reach out to our IR team.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-muted-foreground" />
                <a href="mailto:investors@laundrapro.com" className="text-primary font-semibold hover:underline">
                    investors@laundrapro.com
                </a>
            </CardContent>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
}
