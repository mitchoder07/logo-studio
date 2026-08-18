'use client';

import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Floating button for the main site (not the lightbox). Scrolls the whole
 * page to the bottom on first click, flips to an up-chevron, and scrolls
 * back to the top on the next click. Hides itself if the page is too short
 * to need it, and stays in sync if the person scrolls manually.
 */
export function ScrollToggle() {
  const [atBottom, setAtBottom] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      const canScroll =
        document.documentElement.scrollHeight - window.innerHeight > 120;
      setVisible(canScroll);
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 24;
      setAtBottom(nearBottom);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={atBottom ? 'Scroll to top' : 'Scroll to bottom'}
      onClick={() =>
        window.scrollTo({
          top: atBottom ? 0 : document.documentElement.scrollHeight,
          behavior: 'smooth',
        })
      }
      className="fixed bottom-6 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 shadow-lg backdrop-blur-md hover:border-gold transition-colors"
    >
      {atBottom ? (
        <ChevronUp className="h-5 w-5 text-foreground" strokeWidth={1.5} />
      ) : (
        <ChevronDown className="h-5 w-5 text-foreground" strokeWidth={1.5} />
      )}
    </button>
  );
}
