import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import Faq from '@/components/landing/faq';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">Get in Touch</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              We’d love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <Card>
                <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Subject" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message..." />
                    </div>
                    <Button type="submit">Send Message</Button>
                    </form>
                </CardContent>
                </Card>
            </div>
            <div className="space-y-8">
              <Card>
                  <CardHeader>
                    <CardTitle>Our Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <p className="font-semibold">LaundraPro HQ</p>
                            <p className="text-muted-foreground">123 Kindaruma Road, Kilimani</p>
                            <p className="text-muted-foreground">Nairobi, Kenya</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <p className="font-semibold">Phone</p>
                            <a href="tel:+254712345678" className="text-muted-foreground hover:text-primary">+254 712 345 678</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href="mailto:hello@laundrapro.com" className="text-muted-foreground hover:text-primary">hello@laundrapro.com</a>
                        </div>
                    </div>
                  </CardContent>
              </Card>
               <Card className="overflow-hidden">
                <div className="h-64 bg-muted">
                    {/* Placeholder for a map component */}
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.794717366367!2d36.78401131475459!3d-1.2996142990540786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e4a7a55555%3A0x2d348d8905a50720!2sKindaruma%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1678886400000!5m2!1sen!2ske"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="LaundraPro Location"
                    ></iframe>
                </div>
               </Card>
            </div>
          </div>

          <div className="pt-16">
            <Faq />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
