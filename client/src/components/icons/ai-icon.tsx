export default function AIIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      data-testid="icon-ai"
    >
      {/* Neural network nodes */}
      <circle cx="4" cy="6" r="2"/>
      <circle cx="4" cy="18" r="2"/>
      <circle cx="20" cy="12" r="2"/>
      <circle cx="12" cy="4" r="2"/>
      <circle cx="12" cy="20" r="2"/>
      <circle cx="12" cy="12" r="1.5"/>
      
      {/* Neural network connections */}
      <path d="M6 8L10 10" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M6 16L10 14" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M14 6L18 10" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M14 18L18 14" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M10 10L14 6" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M10 14L14 18" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M11 12L10 12" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M13 12L14 12" stroke="currentColor" strokeWidth="1" fill="none"/>
      
      {/* Additional connection points */}
      <circle cx="8" cy="8" r="0.5" opacity="0.7"/>
      <circle cx="8" cy="16" r="0.5" opacity="0.7"/>
      <circle cx="16" cy="8" r="0.5" opacity="0.7"/>
      <circle cx="16" cy="16" r="0.5" opacity="0.7"/>
    </svg>
  );
}
