import { cn } from '@/lib/utils';

interface BrandMarkProps {
  className?: string;
  /** Show the "YOUR STUDIO" wordmark next to the mark */
  showWordmark?: boolean;
}

/**
 * Editorial brand mark: a serif "Y." inside a thin gold square frame.
 * Pure SVG — scales crisply at any size.
 */
export function BrandMark({ className, showWordmark = true }: BrandMarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-3 select-none', className)}>
      <svg
        viewBox="0 0 48 48"
        width={36}
        height={36}
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer frame */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.25"
        />
        {/* Serif Y. */}
        <text
          x="24"
          y="33"
          textAnchor="middle"
          fontFamily="var(--font-serif), Georgia, serif"
          fontSize="26"
          fontWeight="600"
          fill="currentColor"
        >
          Y
        </text>
        {/* Period as gold dot */}
        <circle cx="33" cy="34" r="1.6" fill="var(--gold)" />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="text-sm font-medium tracking-[0.18em] uppercase"
            style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}
          >
            Your Studio
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
            Logo Portfolio
          </span>
        </span>
      )}
    </span>
  );
}
