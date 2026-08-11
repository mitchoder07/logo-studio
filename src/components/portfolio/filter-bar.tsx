'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  LOGOS,
  INDUSTRIES,
  STYLES,
  type LogoIndustry,
  type LogoStyle,
} from '@/data/logos';

interface Filters {
  query: string;
  industry: LogoIndustry | 'All';
  style: LogoStyle | 'All';
}

interface FilterBarProps {
  filters: Filters;
  onChange: (next: Filters) => void;
  visibleCount: number;
}

export function FilterBar({ filters, onChange, visibleCount }: FilterBarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div id="gallery" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 py-6 space-y-5">
        {/* Top row: search + count */}
        <div className="flex items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              strokeWidth={1.5}
            />
            <input
              ref={inputRef}
              type="search"
              value={filters.query}
              onChange={(e) => onChange({ ...filters, query: e.target.value })}
              placeholder="Search by name, brief, or palette..."
              className="w-full bg-transparent border-0 border-b border-border py-3 pl-7 pr-7 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-gold transition-colors"
            />
            {filters.query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  onChange({ ...filters, query: '' });
                  inputRef.current?.focus();
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            <span className="text-gold font-mono text-base tracking-normal">
              {String(visibleCount).padStart(2, '0')}
            </span>
            <span>/ {String(LOGOS.length).padStart(2, '0')} shown</span>
          </div>
        </div>

        {/* Industry chips */}
        <div id="industries" className="space-y-2">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Industry
          </div>
          <ChipRow>
            <Chip
              active={filters.industry === 'All'}
              onClick={() => onChange({ ...filters, industry: 'All' })}
            >
              All
            </Chip>
            {INDUSTRIES.map((ind) => (
              <Chip
                key={ind}
                active={filters.industry === ind}
                onClick={() => onChange({ ...filters, industry: ind })}
              >
                {ind}
              </Chip>
            ))}
          </ChipRow>
        </div>

        {/* Style chips */}
        <div id="styles" className="space-y-2">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Style
          </div>
          <ChipRow>
            <Chip
              active={filters.style === 'All'}
              onClick={() => onChange({ ...filters, style: 'All' })}
            >
              All
            </Chip>
            {STYLES.map((s) => (
              <Chip
                key={s}
                active={filters.style === s}
                onClick={() => onChange({ ...filters, style: s })}
              >
                {s}
              </Chip>
            ))}
          </ChipRow>
        </div>
      </div>
    </div>
  );
}

function ChipRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-2">{children}</div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-3 py-1.5 text-xs tracking-wide border transition-all duration-200',
        active
          ? 'bg-foreground text-background border-foreground'
          : 'border-border text-muted-foreground hover:border-gold hover:text-foreground'
      )}
    >
      {children}
    </button>
  );
}
