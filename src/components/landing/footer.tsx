import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MessageSquareText, Twitter } from 'lucide-react';
import Logo from '@/components/logo';

const linkGroups = [
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Contact Us', href: '/contact' },
      { text: 'Blog', href: '/blog' },
      { text: 'Press', href: '/press' },
    ],
  },
    {
    title: 'Partnerships',
    links: [
      { text: 'For Laundry Companies', href: '/#why' },
      { text: 'For Mama Fuas', href: '/#why' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Help Center', href: '/help' },
      { text: 'Investor Relations', href: '/investors' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Service', href: '/terms' },
    ],
  },
];

const socialLinks = [
  { platform: 'twitter', href: 'https://x.com/laundrapro', icon: <Twitter className="h-6 w-6" /> },
  { platform: 'linkedin', href: 'https://linkedin.com/company/laundrapro', icon: <Linkedin className="h-6 w-6" /> },
  { platform: 'instagram', href: 'https://instagram.com/laundrapro', icon: <Instagram className="h-6 w-6" /> },
  { platform: 'facebook', href: 'https://facebook.com/laundrapro', icon: <Facebook className="h-6 w-6" /> },
  { platform: 'whatsapp', href: 'https://wa.me/254712345678', icon: <MessageSquareText className="h-6 w-6" /> },
  { platform: 'email', href: 'mailto:hello@laundrapro.com', icon: <Mail className="h-6 w-6" /> },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <Logo />
            <p className="mt-4 text-muted-foreground text-sm">Empowering Local Laundry Networks</p>
             <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                <Link key={social.platform} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">{social.platform}</span>
                    {social.icon}
                </Link>
                ))}
            </div>
          </div>
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.text}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LaundraPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
