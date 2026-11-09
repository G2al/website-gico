import type { CSSProperties } from "react";

// Wave divider: `color` is the fill of the section the wave leads into.
export function Wave({ color, flip = false, className = "" }: { color: string; flip?: boolean; className?: string }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path fill={color} d="M0 50c160-40 320-48 480-22s300 60 480 44 320-56 480-40v58H0z" />
    </svg>
  );
}

type DecorProps = { className?: string; style?: CSSProperties };

// Soft blob shape.
export function Blob({ className = "", style, color }: DecorProps & { color: string }) {
  return (
    <span className={`decor ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 200 200"><path fill={color} d="M45 -60C58-46 67-30 70-12 73 6 70 25 59 39 48 53 29 62 9 67-11 72-33 73-49 63-65 53-75 32-77 11-79-10-73-31-60-46-47-61-27-70-7-70 13-70 32-74 45-60Z" transform="translate(100 100)" /></svg>
    </span>
  );
}

// Ring outline.
export function Ring({ className = "", style, color }: DecorProps & { color: string }) {
  return (
    <span className={`decor ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="10" /></svg>
    </span>
  );
}

// Dotted grid.
export function Dots({ className = "", style, color }: DecorProps & { color: string }) {
  return (
    <span className={`decor ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 100 100">
        {Array.from({ length: 25 }, (_, i) => <circle key={i} cx={10 + (i % 5) * 20} cy={10 + Math.floor(i / 5) * 20} r="4" fill={color} />)}
      </svg>
    </span>
  );
}

// Hand-drawn squiggle, echoing the brush strokes of the GiCo logo.
export function Squiggle({ className = "", style, color }: DecorProps & { color: string }) {
  return (
    <span className={`decor ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 200 60"><path d="M6 40c20-30 40-30 56 0s36 30 56 0 36-30 56 0" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" /></svg>
    </span>
  );
}

// Small sparkle/star.
export function Sparkle({ className = "", style, color }: DecorProps & { color: string }) {
  return (
    <span className={`decor ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 100 100"><path fill={color} d="M50 0c4 30 16 42 50 50-34 8-46 20-50 50-4-30-16-42-50-50 34-8 46-20 50-50z" /></svg>
    </span>
  );
}
