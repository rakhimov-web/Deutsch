/**
 * The app's mark: three overlapping forms in the der/die/das colors.
 * It's a direct nod to the one functional color system the whole UI
 * is built around, rather than a decorative monogram.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="9" fill="var(--sidebar-accent)" />
        <circle cx="13" cy="13" r="6.5" fill="var(--der)" fillOpacity="0.9" />
        <circle cx="20" cy="13" r="6.5" fill="var(--die)" fillOpacity="0.85" />
        <circle cx="16.5" cy="20" r="6.5" fill="var(--das)" fillOpacity="0.85" />
      </svg>
    </div>
  );
}
