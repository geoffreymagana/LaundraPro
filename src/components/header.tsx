'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '/#why', label: 'Why Partner With Us' },
  { href: '/#testimonials', label: 'Testimonials' },
];

const aboutLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/about#offerings', label: 'Our Offerings' },
    { href: '/how-it-works', label: 'How LaundraPro Works' },
    { href: '/press', label: 'Press' },
    { href: '/investors', label: 'Investor Relations' },
    { href: '/blog', label: 'Blog' },
]

const partnerLinks = [
    { href: '/#why', label: 'For Laundry Companies' },
    { href: '/#why', label: 'For Mama Fuas' },
    { href: '/#find-mama-fua', label: 'For Clients' },
]

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {link.label}
                </Link>
              </Button>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Button variant="ghost" className="transition-colors hover:text-foreground/80 text-foreground/60">
                  About Us
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {aboutLinks.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="md:hidden">
              <Logo />
            </Link>
          </div>
          <nav className="hidden md:flex gap-2">
            <Button variant="ghost" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  Become a Partner
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {partnerLinks.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {isOpen && (
          <div
            className={cn(
              'fixed inset-0 top-14 z-50 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-rows-max overflow-y-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
            )}
          >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
              <nav className="grid grid-flow-row auto-rows-max text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between p-2 font-medium hover:underline">
                            About Us
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {aboutLinks.map((link) => (
                            <DropdownMenuItem key={link.label} asChild>
                                <Link href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
              </nav>
              <div className="flex flex-col gap-2">
                <Button variant="outline" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Sales</Link>
                </Button>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>
                        Become a Partner
                        <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {partnerLinks.map((link) => (
                            <DropdownMenuItem key={link.label} asChild>
                                <Link href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
