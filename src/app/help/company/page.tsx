import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building } from 'lucide-react';

const faqs = [
    { question: "How do I onboard my laundry workers?", answer: "You can add new workers from your dashboard under the 'Team Management' section. You'll need their name, phone number, and national ID." },
    { question: "How does payment processing work?", answer: "Clients pay through the platform via DPO. The funds are held in escrow and disbursed to your company account after deducting our platform fee. Payouts to your workers are automated based on the schedules you set." },
    { question: "Can I track the performance of my staff?", answer: "Yes, the dashboard includes a performance and ratings section where you can view job completion rates, client ratings, and attendance for each worker." },
    { question: "What are the fees for using LaundraPro?", answer: "We charge a small percentage fee on each completed transaction. Please refer to your partnership agreement for the exact rate." },
];

export default function HelpCompanyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center items-center">
            <div className="p-4 rounded-full bg-primary/10 mb-4">
                <Building className="h-10 w-10 text-primary" />
            </div>
            <CardTitle>Help for Laundry Companies</CardTitle>
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
