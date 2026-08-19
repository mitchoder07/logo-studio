'use client';

import * as React from 'react';
import Image from 'next/image';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Logo } from '@/data/logos';
import { Watermark } from './watermark';

interface LogoCardProps {
  logo: Logo;
  index: number;
  onOpen: (logo: Logo) => void;
}

/**
 * One card in the masonry grid. Shows the logo, and on hover reveals the
 * name, industry, style, and palette swatches. Confidential logos are
 * blurred with a lock badge — client work under NDA.
 */
export function LogoCard({ logo, index, onOpen }: LogoCardProps) {
  const isConfidential = logo.confidential === true;

  return (
    <article
      className="group relative cursor-pointer animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 12) * 0.04}s` }}
      onClick={() => onOpen(logo)}
    >
      <div
        className={cn(
          'relative aspect-square overflow-hidden bg-card border border-border select-none',
          'transition-all duration-500 group-hover:border-gold'
        )}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Image
          src={`/logos/${logo.slug}.png`}
          alt={
            isConfidential
              ? `Confidential client work — ${logo.industry}`
              : `${logo.name} — ${logo.style} logo for ${logo.industry}`
          }
          fill
          draggable={false}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 25vw"
          className={cn(
            'object-contain transition-transform duration-700 group-hover:scale-[1.04]',
            isConfidential && 'blur-lg brightness-50 group-hover:blur-md'
          )}
        />
        <Watermark />

        {/* Hover overlay for non-confidential */}
        {!isConfidential && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}

        {/* Confidential overlay — always visible */}
        {isConfidential && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 backdrop-blur-sm">
                <Lock className="h-4 w-4 text-amber-400" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-amber-400/90 font-mono">
                Client Work
              </span>
            </div>
          </div>
        )}

        {/* Top-left index number */}
        <div className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-white/0 group-hover:text-white/80 transition-colors duration-500 font-mono">
          № {String(index + 1).padStart(3, '0')}
        </div>

        {/* Bottom content — hidden for confidential logos */}
        {!isConfidential && (
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <div
                  className="text-white text-base sm:text-lg truncate"
                  style={{
                    fontFamily: 'var(--font-serif), Georgia, serif',
                    fontWeight: 500,
                  }}
                >
                  {logo.name}
                </div>
                <div className="mt-0.5 text-[10px] tracking-[0.2em] uppercase text-white/60 truncate">
                  {logo.industry} · {logo.style}
                </div>
              </div>
              <div className="flex shrink-0 gap-1">
                {logo.palette.slice(0, 3).map((hex, i) => (
                  <span
                    key={i}
                    className="h-3 w-3 ring-1 ring-white/30"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
