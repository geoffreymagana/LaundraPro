import Header from '@/components/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: "The Tech Powering Your Neighborhood Laundry Service",
    date: "October 30, 2023",
    category: "Technology",
    excerpt: "A deep dive into the platform features that make LaundraPro a game-changer for local businesses.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    imageHint: "laptop code",
    link: "#"
  },
  {
    title: "Empowering Mama Fuas: More Than Just a Job",
    date: "November 5, 2023",
    category: "Community",
    excerpt: "How fair wages, digital payments, and a professional identity are transforming lives.",
    image: "https://plus.unsplash.com/premium_photo-1723780950349-0133c9232939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    imageHint: "happy worker",
    link: "#"
  },
   {
    title: "Why Your Laundry Business Needs to Go Digital in 2024",
    date: "November 12, 2023",
    category: "Business Growth",
    excerpt: "The market is changing. Discover how digitization can unlock new revenue streams and operational efficiencies.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    imageHint: "business meeting",
    link: "#"
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">The LaundraPro Blog</h1>
                <p className="mt-4 text-xl text-muted-foreground">
                Insights on technology, community empowerment, and the future of on-demand services.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <Card key={post.title} className="flex flex-col overflow-hidden">
                <div className="relative h-56 w-full">
                    <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.imageHint} />
                </div>
                <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="secondary">{post.category}</Badge>
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <CardTitle className="mt-2 text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="link" className="p-0">
                        <Link href={post.link}>Read More &rarr;</Link>
                    </Button>
                </CardFooter>
                </Card>
            ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
