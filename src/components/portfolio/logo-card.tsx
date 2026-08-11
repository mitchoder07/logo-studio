'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Logo } from '@/data/logos';

interface LogoCardProps {
  logo: Logo;
  index: number;
  onOpen: (logo: Logo) => void;
}

export function LogoCard({ logo, index, onOpen }: LogoCardProps) {
  return (
    <article
      className="group relative cursor-pointer animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 12) * 0.04}s` }}
      onClick={() => onOpen(logo)}
    >
      <div
        className={cn(
          'relative aspect-square overflow-hidden bg-card border border-border',
          'transition-all duration-500 group-hover:border-gold'
        )}
      >
        <Image
          src={`/logos/${logo.slug}.png`}
          alt={`${logo.name} — ${logo.style} logo for ${logo.industry}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1536px) 25vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top-left index number */}
        <div className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-white/0 group-hover:text-white/80 transition-colors duration-500 font-mono">
          № {String(index + 1).padStart(3, '0')}
        </div>

        {/* Bottom content */}
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
      </div>
    </article>
  );
}
