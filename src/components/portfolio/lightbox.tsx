'use client';

import * as React from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Logo } from '@/data/logos';

interface LightboxProps {
  logos: Logo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}

export function Lightbox({ logos, index, onClose, onNavigate }: LightboxProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Lock body scroll while open
  React.useEffect(() => {
    if (index === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [index]);

  // Keyboard navigation
  React.useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && index > 0) onNavigate(index - 1);
      else if (e.key === 'ArrowRight' && index < logos.length - 1)
        onNavigate(index + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, logos.length, onClose, onNavigate]);

  if (!mounted || index === null) return null;

  const logo = logos[index];
  if (!logo) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-stretch bg-black/90 backdrop-blur-sm animate-fade-up"
      style={{ animationDuration: '0.2s' }}
      onClick={onClose}
    >
      {/* Top bar — z-20 so it stays above the prev/next full-height click areas */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-8 py-4 text-white bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-white/60">
          <span className="text-gold font-mono text-base tracking-normal">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>/ {String(logos.length).padStart(2, '0')}</span>
          <span className="hidden sm:inline mx-2 h-3 w-px bg-white/20" />
          <span className="hidden sm:inline">{logo.industry}</span>
        </div>
        <button
          type="button"
          aria-label="Close lightbox"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="group inline-flex h-10 w-10 items-center justify-center border border-white/20 hover:border-gold transition-colors"
        >
          <X
            className="h-5 w-5 text-white group-hover:text-gold transition-colors"
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Prev / Next — full-height click areas, but z-10 so the top bar (z-20) stays clickable */}
      {index > 0 && (
        <button
          type="button"
          aria-label="Previous logo"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index - 1);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-full w-16 sm:w-24 flex items-center justify-center group"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center border border-white/20 group-hover:border-gold group-hover:bg-gold/10 transition-all">
            <ChevronLeft
              className="h-6 w-6 text-white group-hover:text-gold transition-colors"
              strokeWidth={1.5}
            />
          </span>
        </button>
      )}
      {index < logos.length - 1 && (
        <button
          type="button"
          aria-label="Next logo"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index + 1);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full w-16 sm:w-24 flex items-center justify-center group"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center border border-white/20 group-hover:border-gold group-hover:bg-gold/10 transition-all">
            <ChevronRight
              className="h-6 w-6 text-white group-hover:text-gold transition-colors"
              strokeWidth={1.5}
            />
          </span>
        </button>
      )}

      {/* Main content */}
      <div
        className="flex-1 flex items-center justify-center p-6 sm:p-12 pt-16 pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 max-w-6xl w-full items-center">
          {/* Image */}
          <div className="relative aspect-square w-full max-w-[55vh] mx-auto bg-white/[0.02] border border-white/10 overflow-hidden">
            <Image
              src={`/logos/${logo.slug}.png`}
              alt={`${logo.name} — ${logo.style} logo for ${logo.industry}`}
              fill
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Info panel */}
          <aside className="text-white space-y-6 max-h-[70vh] overflow-y-auto pr-1">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                {logo.industry} · {logo.year}
              </div>
              <h2
                className="text-3xl sm:text-4xl leading-tight"
                style={{
                  fontFamily: 'var(--font-serif), Georgia, serif',
                  fontWeight: 500,
                }}
              >
                {logo.name}
              </h2>
            </div>

            <div className="space-y-1">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                Style
              </div>
              <div className="text-sm">{logo.style}</div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                Brief
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                {logo.brief}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                Palette
              </div>
              <div className="flex flex-wrap gap-2">
                {logo.palette.map((hex, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="h-6 w-6 ring-1 ring-white/20"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="text-[10px] font-mono text-white/60">
                      {hex.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Concept
              </div>
              <p className="text-xs leading-relaxed text-white/60 font-mono border-l-2 border-gold/40 pl-3">
                {logo.prompt}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>,
    document.body
  );
}
