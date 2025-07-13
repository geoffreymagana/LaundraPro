import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah M.',
    title: 'Laundry Network Owner - Nairobi',
    quote: 'With LaundraPro, I no longer chase clients or manage cash. My staff are paid fairly, and my business runs itself.',
    avatar: 'SM',
  },
  {
    name: 'John K.',
    title: 'Operations Manager - Mombasa',
    quote: "We expanded to 3 estates and I didn't need to hire extra admin staff — everything is digital now.",
    avatar: 'JK',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Partners Are Saying
          </h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between p-6 shadow-lg">
              <CardContent className="p-0">
                <blockquote className="text-lg text-foreground">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
              </CardContent>
              <footer className="mt-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://placehold.co/40x40.png`} alt={testimonial.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
