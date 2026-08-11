'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // SSR-safe placeholder with the same dimensions
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center border border-border rounded-none',
          className
        )}
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'group inline-flex h-9 w-9 items-center justify-center border border-border rounded-none',
        'hover:border-gold transition-colors duration-300',
        className
      )}
    >
      {isDark ? (
        <Sun
          className="h-4 w-4 text-foreground group-hover:text-gold transition-colors duration-300"
          strokeWidth={1.5}
        />
      ) : (
        <Moon
          className="h-4 w-4 text-foreground group-hover:text-gold transition-colors duration-300"
          strokeWidth={1.5}
        />
      )}
    </button>
  );
}
