// VIANORA logo: a stylised "A" with a golden upward stroke (growth).
export default function Logo({ light = false, className = '' }) {
  const textColor = light ? '#FFFFFF' : '#0B1F3A'
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 64 64" role="img" aria-label="VIANORA logo">
        <path d="M12 52 L32 10 L52 52" fill="none" stroke={textColor} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 45 L30 34 L36 39 L54 16" fill="none" stroke="#F5C542" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-heading text-xl font-extrabold tracking-wide" style={{ color: textColor }}>
        VIANORA
      </span>
    </span>
  )
}
