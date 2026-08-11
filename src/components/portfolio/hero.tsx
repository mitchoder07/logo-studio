'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { LOGOS, INDUSTRIES, STYLES } from '@/data/logos';

export function Hero() {
  const logoCount = LOGOS.length;
  const industryCount = INDUSTRIES.length;
  const styleCount = STYLES.length;

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background gold radial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 70% 20%, var(--gold-dim), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 py-20 sm:py-28 lg:py-36">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10 animate-fade-up">
          <span className="h-px w-12 bg-gold" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
            Logo Portfolio · 2024
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight"
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontWeight: 500,
            animationDelay: '0.1s',
          }}
        >
          Brand marks,
          <br />
          <span className="italic text-gold">drawn</span> with intent.
        </h1>

        {/* Subhead */}
        <p
          className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          A catalogue of {logoCount} brand marks spanning {industryCount}{' '}
          industries and {styleCount} design styles. Each logo is composed
          against a written brief, catalogued with its palette and concept
          notes, and presented here as a working studio would present its
          case file. Filter, search, and open any mark in the lightbox to
          inspect the full rationale.
        </p>

        {/* Stats row */}
        <div
          className="mt-14 grid grid-cols-3 gap-px bg-border border border-border max-w-xl animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Stat label="Logos" value={logoCount} />
          <Stat label="Industries" value={industryCount} />
          <Stat label="Styles" value={styleCount} />
        </div>

        {/* CTA */}
        <div
          className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Link
            href="#gallery"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-background transition-colors duration-300"
          >
            Browse the gallery
            <ArrowDown
              className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300"
              strokeWidth={1.5}
            />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-2 py-4 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            What is this?
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-background p-6 sm:p-8">
      <div
        className="text-4xl sm:text-5xl text-gold"
        style={{
          fontFamily: 'var(--font-serif), Georgia, serif',
          fontWeight: 500,
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
