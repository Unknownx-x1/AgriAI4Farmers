export default function WeatherIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      data-testid="icon-weather"
    >
      {/* Cloud with weather patterns */}
      <path d="M6.5 20C4.02 20 2 17.98 2 15.5C2 13.47 3.37 11.79 5.25 11.34C5.84 8.84 8.17 7 11 7C13.83 7 16.16 8.84 16.75 11.34C18.63 11.79 20 13.47 20 15.5C20 17.98 17.98 20 15.5 20H6.5Z"/>
      {/* Rain drops */}
      <path d="M8 16l2-2-2-2" strokeWidth="1" stroke="currentColor" fill="none"/>
      <path d="M16 16l-2-2 2-2" strokeWidth="1" stroke="currentColor" fill="none"/>
      <path d="M10 18l2-2 2 2" strokeWidth="1" stroke="currentColor" fill="none"/>
      {/* Weather prediction arrows */}
      <circle cx="12" cy="14" r="1" opacity="0.8"/>
      <circle cx="9" cy="15" r="0.5" opacity="0.6"/>
      <circle cx="15" cy="15" r="0.5" opacity="0.6"/>
    </svg>
  );
}
