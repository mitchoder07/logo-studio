'use client';

import * as React from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Logo } from '@/data/logos';

interface LightboxProps {
  logos: Logo[];
  index: number | null;
  onClose: () => void;
  /** Step the current index by +1 or -1. Bounds-checking happens in the parent. */
  onNavigate: (direction: 1 | -1) => void;
}

// Page-turn variants — the outgoing logo rotates away like the front of a
// sheet of paper flipping over, the incoming one rotates in from the other
// side like its back/next page settling into place.
const pageVariants = {
  enter: (dir: 1 | -1) => ({
    rotateY: dir === 1 ? 90 : -90,
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
  },
  exit: (dir: 1 | -1) => ({
    rotateY: dir === 1 ? -90 : 90,
    opacity: 0,
  }),
};

/**
 * Full-screen lightbox. Opens when a logo card is clicked.
 * Esc, arrow keys, and prev/next buttons all work.
 * Confidential logos show a blurred preview with a lock badge.
 */
export function Lightbox({ logos, index, onClose, onNavigate }: LightboxProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Which way we're navigating, so the flip rotates the right direction.
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const prevIndexRef = React.useRef<number | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (index === null) {
      prevIndexRef.current = null;
      return;
    }
    if (prevIndexRef.current !== null && prevIndexRef.current !== index) {
      setDirection(index > prevIndexRef.current ? 1 : -1);
    }
    prevIndexRef.current = index;
    // Reset scroll position for the new logo (imperative DOM op, not state).
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const navigate = React.useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      onNavigate(dir);
    },
    [onNavigate]
  );

  // Stop the page from scrolling behind the lightbox
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
      else if (e.key === 'ArrowLeft' && index > 0) navigate(-1);
      else if (e.key === 'ArrowRight' && index < logos.length - 1) navigate(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, logos.length, onClose, navigate]);

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
            navigate(-1);
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
            navigate(1);
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

      {/* Main content — scrolls internally so nothing gets clipped when it
          doesn't fit the viewport (this was the cause of the logo/image
          getting cut off on mobile and short desktop windows). */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overscroll-contain flex items-center justify-center p-6 sm:p-12 pt-16 pb-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full max-w-6xl"
          style={{ perspective: 1600 }}
        >
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={logo.slug}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
              className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 w-full items-center py-4"
            >
          {/* Image — sized off fixed breakpoints instead of vh, so it no
              longer shrinks/squishes unpredictably between mobile and
              desktop viewports. */}
          <div className="relative aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px] mx-auto bg-white/[0.02] border border-white/10 overflow-hidden">
            <Image
              src={`/logos/${logo.slug}.png`}
              alt={
                logo.confidential
                  ? `Confidential client work — ${logo.industry}`
                  : `${logo.name} — ${logo.style} logo for ${logo.industry}`
              }
              fill
              sizes="(max-width: 1024px) 90vw, 50vw"
              className={cn(
                'object-contain',
                logo.confidential && 'blur-xl brightness-50'
              )}
              priority
            />
            {logo.confidential && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-amber-500/40 bg-black/60 px-8 py-6 backdrop-blur-md">
                  <Lock className="h-8 w-8 text-amber-400" strokeWidth={1.5} />
                  <span className="font-display text-lg font-bold text-amber-400" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>
                    Confidential
                  </span>
                  <span className="text-xs text-amber-200/70 text-center max-w-[200px]">
                    Under client NDA. Full case study available on request.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Info panel */}
          <aside className="text-white space-y-6 lg:max-h-[70vh] lg:overflow-y-auto pr-1">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2 flex items-center gap-2">
                {logo.industry} · {logo.year}
                {logo.confidential && (
                  <span className="inline-flex items-center gap-1 text-amber-400">
                    <Lock className="h-3 w-3" strokeWidth={1.5} />
                    NDA
                  </span>
                )}
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

            {logo.confidential ? (
              <div className="space-y-4">
                <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                  <p className="text-sm leading-relaxed text-amber-100/80">
                    This mark was delivered to a paying client and is under
                    a non-disclosure agreement until the brand launches.
                    The brief, palette, and concept notes are available to
                    serious inquiries only.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                    Industry
                  </div>
                  <div className="text-sm">{logo.industry}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                    Style
                  </div>
                  <div className="text-sm">{logo.style}</div>
                </div>
              </div>
            ) : (
              <>
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
              </>
            )}
          </aside>
            </motion.div>
          </AnimatePresence>

          {/* Subtle sheen that peaks mid-flip, like light catching the
              back of a page as it turns. */}
          <motion.div
            key={`sheen-${logo.slug}`}
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.16, 0] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
