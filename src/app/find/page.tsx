'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Navigation, CheckCircle, Star, Lock } from 'lucide-react';
import { mockMamaFuas, type MamaFua } from '@/lib/mock-data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function FindServicePage() {
  const [location, setLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState<{lat: number, lng: number} | null>(null);
  const [searchResults, setSearchResults] = useState<MamaFua[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (!location) return;
    setIsSearching(true);
    setSearched(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockMamaFuas);
      setIsSearching(false);
    }, 1000);
  };

  const getCurrentLocation = () => {
    setIsSearching(true);
    setSearched(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocation('Your current location');
          // Simulate API call with location
          setTimeout(() => {
            setSearchResults(mockMamaFuas);
            setIsSearching(false);
          }, 1000);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('Location access denied');
          setIsSearching(false);
        }
      );
    } else {
      setLocation('Geolocation not supported');
      setIsSearching(false);
    }
  };

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

        <Card className="max-w-3xl mx-auto mt-12 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-4">
               <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter your city (e.g., Nairobi)"
                    className="pl-10 h-12 text-base"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 flex-grow" onClick={handleSearch} disabled={isSearching}>
                  <Search className="mr-2 h-5 w-5" />
                  {isSearching && !currentLocation ? 'Searching...' : 'Search'}
                </Button>
                <Button size="lg" variant="outline" className="h-12 flex-grow" onClick={getCurrentLocation} disabled={isSearching}>
                  <Navigation className="mr-2 h-5 w-5" />
                   {isSearching && !!currentLocation ? 'Getting Location...' : 'Use my current location'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {searched && (
          <div className="max-w-4xl mx-auto mt-12">
            {isSearching ? (
              <div className="text-center text-muted-foreground">
                <p>Searching for the best mama fuas near you...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Available Mama Fuas in "{location}"</h2>
                {searchResults.map((fua) => (
                  <Card key={fua.id} className="overflow-hidden shadow-md transition-all hover:shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-full">
                         <Image src={fua.image} alt={fua.name} layout="fill" objectFit="cover" data-ai-hint="person portrait" />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-primary">{fua.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex items-center text-yellow-500">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className={`h-5 w-5 ${i < Math.floor(fua.rating) ? 'fill-current' : 'stroke-current'}`} />
                                        ))}
                                    </div>
                                    <span className="font-bold">{fua.rating.toFixed(1)}</span>
                                    <span className="text-sm text-muted-foreground">({fua.reviews} reviews)</span>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                  <span className="text-sm font-semibold text-green-600">Verified & Available Today</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg">{fua.price}</p>
                                <p className="text-sm text-muted-foreground">{fua.distance} away</p>
                            </div>
                        </div>

                        <div className="mt-4 border-t pt-4">
                            <p className="font-semibold mb-2">Services include:</p>
                            <div className="flex flex-wrap gap-2">
                                {fua.specialties.map(spec => (
                                    <Badge key={spec} variant="secondary" className="rounded-md">
                                        {spec}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                         
                         <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <Button asChild className="flex-grow">
                                <Link href="#login">
                                    <Lock className="mr-2 h-4 w-4" />
                                    Book Now
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="flex-grow">
                               <Link href="#login">
                                 <Lock className="mr-2 h-4 w-4" />
                                 View Profile
                               </Link>
                            </Button>
                         </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <p>No mama fuas found for "{location}". Please try a different location.</p>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
