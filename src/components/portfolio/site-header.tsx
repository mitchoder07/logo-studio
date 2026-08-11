'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BrandMark } from './brand-mark';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70'
          : 'border-transparent bg-background'
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Your Studio — home" className="group">
          <BrandMark />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em]">
          <Link
            href="/#gallery"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/#industries"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Industries
          </Link>
          <Link
            href="/#styles"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Styles
          </Link>
          <Link
            href="/#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Est. 2024
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
