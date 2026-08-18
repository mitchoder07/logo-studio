import Link from 'next/link';
import { BrandMark } from './brand-mark';

export function SiteFooter() {
  return (
    <footer
      id="about"
      className="mt-auto border-t border-border bg-background"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* About / disclosure */}
          <div className="space-y-4 max-w-md">
            <BrandMark />
            <p className="text-sm text-muted-foreground leading-relaxed">
              A peek inside the studio&apos;s filing cabinet. Some marks
              here landed on real products. Others are private client work,
              locked behind a blur until the embargo lifts. The rest are
              ideas still looking for a home. Poke around, filter by
              industry or style, click anything to open the full case file.
            </p>
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              Next.js 16, Tailwind CSS 4, and way too much coffee. Built
              one quiet weekend, polished over several more.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Browse
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#gallery"
                  className="text-foreground hover:text-gold transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#industries"
                  className="text-foreground hover:text-gold transition-colors"
                >
                  By Industry
                </Link>
              </li>
              <li>
                <Link
                  href="/#styles"
                  className="text-foreground hover:text-gold transition-colors"
                >
                  By Style
                </Link>
              </li>
            </ul>
          </div>

          {/* Meta */}
          <div className="space-y-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Info
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://up1n-portfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-gold transition-colors"
                >
                  Meet the Developer
                </a>
              </li>
              <li className="text-foreground">2024 — Present</li>
              <li className="text-muted-foreground">
                {new Date().getFullYear()} · Catalogue v1.0
              </li>
              <li className="text-muted-foreground">
                Filter · Search · Lightbox · Masonry
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span>© {new Date().getFullYear()} Your Studio</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            Made with care, not autocomplete
          </span>
        </div>
      </div>
    </footer>
  );
}
