interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="py-24 text-center border border-dashed border-border">
      <div
        className="text-6xl text-gold mb-4"
        style={{
          fontFamily: 'var(--font-serif), Georgia, serif',
          fontWeight: 500,
        }}
      >
        ∅
      </div>
      <div className="text-sm text-muted-foreground mb-6">
        No logos match these filters.
      </div>
      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-5 py-3 border border-border text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors"
      >
        Reset filters
      </button>
    </div>
  );
}
