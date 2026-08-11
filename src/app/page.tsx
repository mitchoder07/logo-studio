'use client';

import * as React from 'react';
import { SiteHeader } from '@/components/portfolio/site-header';
import { Hero } from '@/components/portfolio/hero';
import { FilterBar } from '@/components/portfolio/filter-bar';
import { LogoCard } from '@/components/portfolio/logo-card';
import { Lightbox } from '@/components/portfolio/lightbox';
import { EmptyState } from '@/components/portfolio/empty-state';
import { SiteFooter } from '@/components/portfolio/site-footer';
import { LOGOS, type Logo, type LogoIndustry, type LogoStyle } from '@/data/logos';

interface Filters {
  query: string;
  industry: LogoIndustry | 'All';
  style: LogoStyle | 'All';
}

const DEFAULT_FILTERS: Filters = {
  query: '',
  industry: 'All',
  style: 'All',
};

export default function Home() {
  const [filters, setFilters] = React.useState<Filters>(DEFAULT_FILTERS);
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Filtered list (memoised)
  const filtered = React.useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return LOGOS.filter((logo) => {
      if (filters.industry !== 'All' && logo.industry !== filters.industry)
        return false;
      if (filters.style !== 'All' && logo.style !== filters.style) return false;
      if (q) {
        const haystack =
          `${logo.name} ${logo.industry} ${logo.style} ${logo.brief} ${logo.prompt} ${logo.palette.join(' ')}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  const openLightbox = (logo: Logo) => {
    const i = filtered.findIndex((l) => l.slug === logo.slug);
    if (i >= 0) setLightboxIndex(i);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        <FilterBar
          filters={filters}
          onChange={setFilters}
          visibleCount={filtered.length}
        />

        <section className="mx-auto max-w-[1600px] px-5 sm:px-8 py-10 sm:py-14">
          {filtered.length === 0 ? (
            <EmptyState onReset={() => setFilters(DEFAULT_FILTERS)} />
          ) : (
            <div className="masonry-grid">
              {filtered.map((logo, i) => (
                <LogoCard
                  key={logo.slug}
                  logo={logo}
                  index={i}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />

      <Lightbox
        logos={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
