import * as React from 'react';

/**
 * Faint tiled watermark over logo previews. Deters right-click saves
 * but won't stop anyone truly determined. Good enough for the gallery.
 */
export function Watermark({ label = 'YOUR STUDIO · PREVIEW' }: { label?: string }) {
  const patternId = React.useId().replace(/:/g, '');
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full select-none opacity-[0.13] mix-blend-screen"
    >
      <defs>
        <pattern
          id={patternId}
          width="200"
          height="120"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-28)"
        >
          <text
            x="0"
            y="60"
            fontSize="14"
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
