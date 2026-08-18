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
      {/* Aura — a soft, always-on glow that intensifies on hover */}
      <span
        aria-hidden
        className="absolute -inset-x-3 -inset-y-2 -z-10 rounded-full bg-gradient-to-r from-amber-400/40 via-gold/50 to-amber-300/40 blur-md animate-aura-pulse opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      />
      <span className="bg-gradient-to-r from-amber-300 via-gold to-amber-200 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:via-gold group-hover:to-amber-100 transition-colors">
        Meet the Developer
      </span>
    </a>
  );
}
