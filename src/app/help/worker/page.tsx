import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User } from 'lucide-react';

const faqs = [
    { question: "How do I receive job notifications?", answer: "Job notifications will be sent to you via SMS and through the LaundraPro worker app once it's available. Ensure your contact information is up to date." },
    { question: "When and how do I get paid?", answer: "Payments are sent directly to your M-Pesa account bi-weekly. You can track your earnings for each job in your profile." },
    { question: "How can I improve my ratings?", answer: "Great ratings come from being punctual, professional, and providing excellent service. Communicate clearly with the client and follow their instructions carefully." },
    { question: "What if I have an issue with a client?", answer: "If you have any issue, please contact your company manager immediately. They can provide support and resolve the situation through the platform." },
];

export default function HelpWorkerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center items-center">
             <div className="p-4 rounded-full bg-primary/10 mb-4">
                <User className="h-10 w-10 text-primary" />
            </div>
            <CardTitle>Help for Mama Fuas</CardTitle>
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
