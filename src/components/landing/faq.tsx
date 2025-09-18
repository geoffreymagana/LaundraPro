import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What is LaundraPro?",
    answer: "LaundraPro is a technology platform that connects laundry companies, professional mama fuas (laundry workers), and clients. We provide the digital tools for laundry businesses to manage their operations and for clients to easily book trusted services.",
  },
  {
    question: "How do I book a laundry service?",
    answer: "You can use our 'Find a Service' page to enter your location and see a list of available, verified mama fuas from our partner companies. From there, you can view profiles and book a service directly through the app.",
  },
  {
    question: "Are the mama fuas on the platform verified?",
    answer: "Yes. All mama fuas are registered and background-checked by our trusted partner laundry companies. We prioritize safety and professionalism to ensure you have a secure and reliable experience.",
  },
  {
    question: "How does payment work?",
    answer: "Payments are handled securely and cashlessly through the platform. We support M-Pesa and all major credit/debit cards, so you can pay with convenience and peace of mind.",
  },
  {
    question: "Can I choose the same mama fua for future services?",
    answer: "Absolutely. We understand the importance of trust and loyalty. Our platform includes a 'Favorites' feature, allowing you to easily re-book professionals you've had a great experience with.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <Card className="mt-12">
            <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
