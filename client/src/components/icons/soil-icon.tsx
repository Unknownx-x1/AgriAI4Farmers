export default function SoilIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      data-testid="icon-soil"
    >
      {/* Seedling/Plant icon representing soil analysis */}
      <path d="M12 2l-1.5 6.5L4 9l6.5 1.5L12 17l1.5-6.5L20 9l-6.5-1.5L12 2z"/>
      <path d="M6 14c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
      <path d="M14 14c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
      <path d="M10 18c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
      {/* Soil layers */}
      <rect x="2" y="19" width="20" height="1" opacity="0.7"/>
      <rect x="3" y="20" width="18" height="1" opacity="0.5"/>
      <rect x="4" y="21" width="16" height="1" opacity="0.3"/>
    </svg>
  );
}
