import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

const faqs = [
    { question: "How do I book a service?", answer: "You can find a list of our partner laundry services on our website. Once you select a provider, you can book and schedule a service directly through their app or booking link." },
    { question: "Is it safe to pay online?", answer: "Yes, all payments are processed securely through DPO, our trusted payment partner. We support M-Pesa and all major credit/debit cards." },
    { question: "Are the mama fuas vetted?", answer: "Absolutely. All workers on the LaundraPro platform are registered and verified by our partner laundry companies, ensuring they are professional and trustworthy." },
    { question: "What if I'm not satisfied with the service?", answer: "Your satisfaction is our priority. Please leave a rating and detailed feedback after your service. For any urgent issues, please contact the laundry company you booked with directly." },
];

export default function HelpClientPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center items-center">
            <div className="p-4 rounded-full bg-primary/10 mb-4">
                <HeartHandshake className="h-10 w-10 text-primary" />
            </div>
            <CardTitle>Help for Clients</CardTitle>
            <CardDescription>Frequently Asked Questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
