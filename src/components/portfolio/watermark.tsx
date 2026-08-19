import * as React from 'react';

/**
 * Faint, tiled watermark laid over a logo preview. Purely a deterrent —
 * see the note in lightbox.tsx / logo-card.tsx for what this can and
 * can't actually protect against.
 */
export function Watermark({ label = 'YOUR STUDIO · PREVIEW' }: { label?: string }) {
  const patternId = React.useId().replace(/:/g, '');
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full select-none opacity-[0.09] mix-blend-overlay"
    >
      <defs>
        <pattern
          id={patternId}
          width="220"
          height="140"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-28)"
        >
          <text
            x="0"
            y="70"
            fontSize="15"
            letterSpacing="2"
            fontFamily="ui-monospace, monospace"
            fill="white"
          >
            {label}
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
