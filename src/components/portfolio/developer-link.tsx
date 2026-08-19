import { cn } from '@/lib/utils';

export function DeveloperLink({ className }: { className?: string }) {
  return (
    <a
      href="https://up1n-portfolio.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative inline-flex items-center text-[10px] tracking-[0.3em] uppercase',
        className
      )}
    >
      {/* Aura — soft glow that intensifies on hover (dark mode only) */}
      <span
        aria-hidden
        className="absolute -inset-x-3 -inset-y-2 -z-10 rounded-full bg-gradient-to-r from-amber-400/40 via-gold/50 to-amber-300/40 blur-md animate-aura-pulse opacity-70 group-hover:opacity-100 transition-opacity duration-300 dark:block hidden"
      />
      {/* Text — uses dark-mode-aware colors so it's visible on both themes */}
      <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:via-amber-600 group-hover:to-amber-700 transition-colors dark:from-amber-300 dark:via-gold dark:to-amber-200 dark:group-hover:from-amber-200 dark:group-hover:via-gold dark:group-hover:to-amber-100">
        Meet the Developer
      </span>
    </a>
  );
}
