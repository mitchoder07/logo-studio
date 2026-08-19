import { cn } from '@/lib/utils';

export function DeveloperLink({ className }: { className?: string }) {
  return (
    <a
      href="https://up1n-portfolio.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className={cn('text-foreground hover:text-gold transition-colors', className)}
    >
      Meet the Developer
    </a>
  );
}
