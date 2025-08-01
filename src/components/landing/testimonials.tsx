import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    title: 'Laundry Network Owner - Nairobi',
    quote: 'With LaundraPro, I no longer chase clients or manage cash. My staff are paid fairly, and my business runs itself.',
    avatar: 'SM',
    rating: 5,
    image: 'https://plus.unsplash.com/premium_vector-1721131162476-9dcc47328755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'John K.',
    title: 'Operations Manager - Mombasa',
    quote: "We expanded to 3 estates and I didn't need to hire extra admin staff — everything is digital now.",
    avatar: 'JK',
    rating: 5,
    image: 'https://plus.unsplash.com/premium_vector-1721131162649-5dad38ff8bb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Grace W.',
    title: 'Happy Client - Kilimani',
    quote: "Booking a mama fua used to be a gamble. Now I just use the app, pay with M-Pesa, and get the same great service every time. It’s so simple and safe.",
    avatar: 'GW',
    rating: 5,
    image: 'https://plus.unsplash.com/premium_vector-1721131162376-d379c6614b89?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our <span className="text-secondary">Partners</span> Are Saying
          </h2>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between p-6 shadow-lg">
              <CardContent className="p-0">
                 <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
              </CardContent>
              <footer className="mt-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person portrait" />
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
