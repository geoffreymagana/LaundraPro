'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#why', label: 'Why LaundraPro' },
  { href: '/#features', label: 'Features' },
  { href: '/#testimonials', label: 'Testimonials' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
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
              <Link href="/#partner">Join as Partner</Link>
            </Button>
            <Button asChild>
              <Link href="/#demo">Book a Demo</Link>
            </Button>
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
              </nav>
              <div className="flex flex-col gap-2">
                <Button variant="outline" asChild>
                  <Link href="/#partner" onClick={() => setIsOpen(false)}>Join as Partner</Link>
                </Button>
                <Button asChild>
                  <Link href="/#demo" onClick={() => setIsOpen(false)}>Book a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
