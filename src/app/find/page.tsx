import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search } from 'lucide-react';

export default function FindServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">Find a Trusted Laundry Service</h1>
            <p className="mt-4 text-xl text-muted-foreground">
                Enter your city to find professional mama fuas from our trusted local partners.
            </p>
        </div>

        <Card className="max-w-lg mx-auto mt-12 shadow-lg">
            <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-grow">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Enter your city (e.g., Nairobi)" className="pl-10 h-12 text-base" />
                    </div>
                    <Button size="lg" className="h-12">
                        <Search className="mr-2 h-5 w-5" />
                        Search
                    </Button>
                </div>
            </CardContent>
        </Card>

        {/* Placeholder for search results */}
        <div className="max-w-3xl mx-auto mt-12 text-center text-muted-foreground">
            <p>Search results will appear here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
