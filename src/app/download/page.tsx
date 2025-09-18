
'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Star, Hash, Construction, Building, ArrowRight } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from '@/components/ui/alert-dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DownloadPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">Get LaundraPro</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Dedicated apps for clients and professionals, a management dashboard for businesses, and USSD access for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Smartphone className="h-8 w-8 text-primary"/>
                        </div>
                        <div>
                            <CardTitle>For Clients</CardTitle>
                            <CardDescription>Book and manage your laundry</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Find trusted mama fuas, schedule services, and pay securely right from your phone.</p>
                    <div className="flex flex-col gap-4 items-start">
                        <button onClick={() => setIsModalOpen(true)} className="transition-transform hover:scale-105">
                           <Image src="/images/DownloadBadge/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg" alt="Pre-order on the App Store" width={160} height={54} />
                        </button>
                        <button onClick={() => setIsModalOpen(true)} className="transition-transform hover:scale-105">
                           <Image src="/images/DownloadBadge/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Get it on Google Play" width={180} height={54} />
                        </button>
                    </div>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                 <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-600/10 rounded-lg">
                            <Star className="h-8 w-8 text-green-600"/>
                        </div>
                        <div>
                            <CardTitle>For Mama Fuas</CardTitle>
                            <CardDescription>Find jobs and manage your earnings</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Receive job alerts, track your schedule, and get paid weekly. Your professional toolkit.</p>
                    <div className="flex flex-col gap-4 items-start">
                        <button onClick={() => setIsModalOpen(true)} className="transition-transform hover:scale-105">
                           <Image src="/images/DownloadBadge/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg" alt="Pre-order on the App Store" width={160} height={54} />
                        </button>
                        <button onClick={() => setIsModalOpen(true)} className="transition-transform hover:scale-105">
                           <Image src="/images/DownloadBadge/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Get it on Google Play" width={180} height={54} />
                        </button>
                    </div>
                </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
             <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-600/10 rounded-lg">
                        <Building className="h-8 w-8 text-purple-600"/>
                    </div>
                    <div>
                        <CardTitle>For Laundry Companies</CardTitle>
                        <CardDescription>Manage your team and scale your business</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">
                    Get access to the LaundraPro dashboard to manage your workers, track jobs in real-time, and automate payments. Our sales team will help you get set up.
                </p>
                <Button asChild>
                  <Link href="/contact">
                    Contact Sales for a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
             <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                        <Hash className="h-8 w-8 text-primary"/>
                    </div>
                    <div>
                        <CardTitle>No Smartphone? No Problem.</CardTitle>
                        <CardDescription>Access LaundraPro with any phone via USSD</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">
                    We believe in accessibility for everyone. You can book a laundry service, track your order, and check your balance using our simple USSD service.
                </p>
                <div className="bg-background p-4 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground">Dial the code below to get started:</p>
                    <p className="text-2xl font-bold text-primary tracking-widest mt-2">*XYZ#</p>
                </div>
            </CardContent>
          </Card>
        </div>

        <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <AlertDialogContent>
                <AlertDialogHeader className="items-center text-center">
                    <div className="p-3 bg-yellow-400/20 rounded-full mb-2">
                        <Construction className="h-8 w-8 text-yellow-500" />
                    </div>
                    <AlertDialogTitle>Coming Soon!</AlertDialogTitle>
                    <AlertDialogDescription>
                        Our mobile apps are currently in development and will be available on the App Store and Google Play shortly. Thank you for your interest!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setIsModalOpen(false)}>Got it!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

      </main>
      <Footer />
    </div>
  );
}
