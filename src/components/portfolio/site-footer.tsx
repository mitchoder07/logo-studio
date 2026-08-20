import Link from 'next/link';
import { Github, Mail, Figma } from 'lucide-react';
import { BrandMark } from './brand-mark';
import { DeveloperLink } from './developer-link';
import { NewsletterForm } from './newsletter-form';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/mitchoder07',
    icon: Github,
  },
  {
    label: 'X',
    href: 'https://x.com/mitchoder07',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/mitchoder07',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm9.568 5.302c1.401 1.711 2.253 3.89 2.276 6.265-3.331-.685-6.483-.623-9.117-.073-.229-.529-.469-1.053-.724-1.572 2.831-1.167 5.159-2.912 6.834-4.992.245-.021.489-.041.731-.041v.021l.229.041-.049.025zm-1.492-1.077c-1.58 1.924-3.756 3.533-6.407 4.604-1.284-2.36-2.747-4.564-4.373-6.583 1.26-.327 2.576-.567 3.931-.567 2.504 0 4.808.745 6.712 2.001l.137-.455zm-9.076-1.339c1.653 2.043 3.143 4.276 4.432 6.659-3.444.916-7.476 1.299-11.964 1.131 1.036-3.484 3.701-6.276 7.151-7.567l.381-.223zm-7.996 9.114c0-.085.012-.168.012-.253 4.724.184 8.948-.237 12.596-1.272.235.455.461.913.677 1.376-.243.073-.484.148-.724.231-3.628 1.176-6.628 3.585-8.832 6.712-2.299-2.135-3.728-5.171-3.728-8.544v-.25zm5.168 10.064c2.067-2.884 4.747-5.085 8.067-6.164.207-.067.412-.128.62-.188 1.101 2.864 1.96 5.856 2.555 8.924-1.532.936-3.34 1.484-5.279 1.484-2.12 0-4.072-.667-5.689-1.792l-.274-.264zm12.936-1.464c-.563-2.708-1.357-5.348-2.373-7.884 2.399-.412 5.048-.361 7.936.085-.4 3.244-2.267 6.056-4.951 7.772l-.612.027z" />
      </svg>
    ),
  },
  {
    label: 'Figma',
    href: 'https://figma.com/@mitchoder07',
    icon: Figma,
  },
  {
    label: 'Email',
    href: 'mailto:olaniyiaremu2003@gmail.com',
    icon: Mail,
  },
];

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
                <DeveloperLink />
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

        {/* Connect — social links */}
        <div className="mt-14 pt-10 border-t border-border">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Need a logo? Let&apos;s talk.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                <social.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-gold" />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 pt-10 border-t border-border">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            New Logo Alerts
          </div>
          <NewsletterForm />
        </div>

        {/* Bottom strip */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span>© {new Date().getFullYear()} Your Studio</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-gold" />
            Made with stationery, junk foods & Adobe
          </span>
        </div>
      </div>
    </footer>
  );
}
