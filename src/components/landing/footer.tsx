import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';
import Logo from '@/components/logo';
import WhatsappIcon from '@/components/icons/whatsapp-icon';

const footerLinks = [
  { text: "Privacy Policy", link: "/privacy" },
  { text: "Terms of Service", link: "/terms" },
  { text: "Contact Us", link: "/contact" },
];

const socialLinks = [
  { platform: 'linkedin', link: 'https://linkedin.com/company/laundrapro', icon: <Linkedin className="h-6 w-6" /> },
  { platform: 'whatsapp', link: 'https://wa.me/254712345678', icon: <WhatsappIcon className="h-6 w-6" /> },
  { platform: 'email', link: 'mailto:hello@laundrapro.com', icon: <Mail className="h-6 w-6" /> },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Logo />
            <p className="mt-2 text-muted-foreground">Empowering Local Laundry Networks</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 md:mb-0">
            {footerLinks.map((item) => (
              <Link key={item.text} href={item.link} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item.text}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <Link key={social.platform} href={social.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">{social.platform}</span>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LaundraPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
