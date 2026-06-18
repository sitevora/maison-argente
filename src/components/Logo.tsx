export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const color = tone === "light" ? "#f5efe3" : "#2b1f15";
  const gold = "#b8915a";
  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <svg width="48" height="40" viewBox="0 0 48 40" fill="none" aria-hidden>
        <path
          d="M4 36 L4 4 L14 4 L24 22 L34 4 L44 4 L44 36"
          stroke={gold}
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M24 22 L24 36" stroke={gold} strokeWidth="1.2" />
        <circle cx="24" cy="36" r="1.4" fill={gold} />
      </svg>
      <div
        className="font-display mt-1.5 text-center"
        style={{ color, letterSpacing: "0.32em", fontSize: "0.78rem", fontWeight: 500 }}
      >
        MAISON
      </div>
      <div
        className="font-display text-center"
        style={{ color, letterSpacing: "0.32em", fontSize: "0.78rem", fontWeight: 500 }}
      >
        ARGENTÉ
      </div>
    </div>
  );
}
