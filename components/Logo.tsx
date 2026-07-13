export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`} aria-label="Sol del Catedral">
      <svg className="brand__mark" viewBox="0 0 90 54" role="img" aria-hidden="true">
        <path d="M16 39 34 23l11 10 9-8 20 14" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M29 24a17 17 0 0 1 32 0" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
      </svg>
      <span className="brand__name">Sol del Catedral</span>
    </div>
  );
}
