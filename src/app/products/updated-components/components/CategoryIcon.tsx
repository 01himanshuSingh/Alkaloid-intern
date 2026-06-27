interface CategoryIconProps {
  icon: string;
  className?: string;
}

export default function CategoryIcon({ icon, className = "w-5 h-5" }: CategoryIconProps) {
  if (icon === "flask") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path d="M9 3h6M9 3v8l-5 9h16L15 11V3M9 3H7M15 3h2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17h10" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "leaf") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path d="M17 8C8 10 5.9 16.17 3.82 19c0 0 9.36-3.27 13.18-8C19.38 8.53 20 5 20 5S18 6 17 8Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.82 19c2-3 4-6.5 10-9" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "nodes") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 12h4l4-4.5M8 12l4 .5 4 4" strokeLinecap="round" />
      </svg>
    );
  }
  // flask2
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path d="M9 3h6M9 3v8l-5 9h16L15 11V3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3v3M10 15h4" strokeLinecap="round" />
    </svg>
  );
}
