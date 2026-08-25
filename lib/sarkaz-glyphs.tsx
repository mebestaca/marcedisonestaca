import type { ReactNode, SVGProps } from "react";

/**
 * Props for an individual Sarkaz-style glyph component.
 *
 * Extends the standard SVG element props (className, style, onClick, etc.)
 * so glyphs can be styled and sized like any other inline SVG icon.
 */
export type SarkazGlyphProps = SVGProps<SVGSVGElement> & {
  /**
   * Optional accessible title for the glyph. When provided, the SVG is
   * rendered with `role="img"` and a `<title>` element so screen readers
   * announce it. When omitted, the glyph is treated as purely decorative
   * (`aria-hidden="true"`), which is the default when using `SarkazText`.
   */
  title?: string;
};

/**
 * Internal base wrapper shared by every letter glyph.
 *
 * Sets up the common SVG shell (viewBox, fill, accessibility attributes)
 * so each individual letter component only needs to supply its `<path>`
 * shapes as children. Not exported — consumers should use the individual
 * letter components (`A`, `B`, `C`, ...) or the `SarkazGlyph` /
 * `SarkazText` helpers below.
 */
function Glyph({
  children,
  title,
  ...props
}: SarkazGlyphProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
}

/**
 * Glyph for the letter "A".
 *
 * Renders as a standalone SVG icon. Color is inherited via `currentColor`,
 * so set `color` (CSS) or `className`/`style` on the component to theme it.
 * Accepts all standard SVG props (e.g. `width`, `height`, `className`).
 *
 * @example
 * <A className="h-8 w-8 text-yellow-400" />
 */
export function A(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 4.00,4.00 11.66,21.87 12.51,22.72 18.47,22.72 19.32,23.57 20.17,22.72 21.02,23.57 21.87,22.72 22.72,23.57 24.43,22.72 34.64,22.72 43.15,4.00 Z" />
      <path d="M 23.57,25.28 13.36,43.15 33.79,43.15 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "B". See {@link A} for prop and usage details. */
export function B(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 7.40,21.87 16.77,21.87 39.74,4.00 7.40,4.00 Z" />
      <path d="M 7.40,26.13 7.40,43.15 38.89,43.15 16.77,26.13 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "C". See {@link A} for prop and usage details. */
export function C(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 6.55,4.00 6.55,14.21 40.60,14.21 40.60,4.00 Z" />
      <path d="M 6.55,33.79 6.55,43.15 40.60,43.15 40.60,32.94 7.40,32.94 Z" />
      <path d="M 6.55,18.47 6.55,28.68 20.17,28.68 20.17,18.47 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "D". See {@link A} for prop and usage details. */
export function D(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 12.51,4.00 23.57,22.72 33.79,4.00 Z" />
      <path d="M 22.72,24.43 1.45,24.43 11.66,43.15 Z" />
      <path d="M 24.43,24.43 34.64,42.30 36.34,41.45 45.70,24.43 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "E". See {@link A} for prop and usage details. */
export function E(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 6.55,4.00 6.55,28.68 7.40,29.53 8.26,28.68 14.21,28.68 15.06,29.53 18.47,29.53 19.32,28.68 35.49,28.68 38.04,29.53 40.60,28.68 40.60,4.00 Z" />
      <path d="M 6.55,32.94 6.55,43.15 20.17,43.15 20.17,32.94 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "F". See {@link A} for prop and usage details. */
export function F(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 7.40,4.00 34.64,28.68 39.74,28.68 39.74,4.00 Z" />
      <path d="M 7.40,43.15 39.74,43.15 39.74,32.94 17.62,32.94 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "G". See {@link A} for prop and usage details. */
export function G(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 21.02,4.00 6.55,32.09 26.13,32.09 26.98,32.94 26.98,43.15 40.60,43.15 39.74,41.45 40.60,33.79 39.74,32.94 26.98,32.94 26.13,32.09 39.74,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "H". See {@link A} for prop and usage details. */
export function H(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 1.45,4.00 15.06,28.68 16.77,29.53 17.62,28.68 27.83,28.68 28.68,29.53 31.23,29.53 45.70,4.00 Z" />
      <path d="M 28.68,33.79 18.47,33.79 23.57,43.15 26.13,39.74 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "I". See {@link A} for prop and usage details. */
export function I(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 22.30,4.00 18.04,5.70 14.64,9.11 13.79,11.66 14.64,18.47 19.74,22.72 27.40,22.72 30.81,20.17 31.66,21.87 14.64,43.15 33.36,43.15 33.36,27.83 32.51,26.98 32.51,20.17 33.36,19.32 31.66,21.02 30.81,20.17 33.36,14.21 32.51,13.36 32.51,9.96 29.11,5.70 24.85,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "J". See {@link A} for prop and usage details. */
export function J(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 18.47,5.70 15.91,9.11 15.91,15.06 16.77,16.77 21.02,20.17 26.98,20.17 29.53,18.47 32.09,13.36 32.09,10.81 30.38,7.40 27.83,4.85 22.72,4.00 Z" />
      <path d="M 43.15,18.47 36.34,18.47 35.49,19.32 27.83,43.15 35.49,43.15 37.19,35.49 39.74,30.38 Z" />
      <path d="M 4.00,18.47 12.51,43.15 20.17,43.15 17.62,38.04 17.62,35.49 14.21,27.83 12.51,20.17 10.81,18.47 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "K". See {@link A} for prop and usage details. */
export function K(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 33.79,4.00 13.36,4.00 23.57,22.72 31.23,9.96 Z" />
      <path d="M 23.57,25.28 13.36,43.15 33.79,43.15 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "L". See {@link A} for prop and usage details. */
export function L(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 6.98,4.00 6.98,32.09 40.17,32.09 40.17,4.00 Z" />
      <path d="M 6.98,36.34 6.98,43.15 40.17,43.15 40.17,36.34 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "M". See {@link A} for prop and usage details. */
export function M(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 32.09,27.83 27.83,32.94 27.83,38.04 28.68,39.74 32.94,43.15 38.89,43.15 43.15,39.74 44.00,37.19 44.00,32.94 43.15,31.23 39.74,27.83 37.19,26.98 Z" />
      <path d="M 19.32,4.85 15.91,8.26 15.06,13.36 16.77,17.62 21.02,20.17 26.13,20.17 27.83,19.32 31.23,15.06 31.23,9.11 28.68,5.70 25.28,4.00 Z" />
      <path d="M 9.11,26.98 4.00,30.38 3.15,32.09 3.15,38.89 8.26,43.15 13.36,43.15 18.47,38.89 18.47,32.09 15.91,28.68 12.51,26.98 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "N". See {@link A} for prop and usage details. */
export function N(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 4.43,4.00 4.43,22.72 3.57,23.57 4.43,26.13 4.43,43.15 43.57,43.15 32.51,14.21 33.36,12.51 37.62,15.06 41.02,14.21 43.57,10.81 43.57,7.40 41.02,4.85 36.77,4.00 33.36,6.55 33.36,9.11 31.66,9.96 29.11,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "O". See {@link A} for prop and usage details. */
export function O(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 16.77,4.00 16.77,43.15 30.38,43.15 30.38,4.00 Z" />
      <path d="M 32.94,14.21 32.94,32.94 37.19,32.94 37.19,14.21 Z" />
      <path d="M 9.96,14.21 9.96,32.94 14.21,32.94 14.21,14.21 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "P". See {@link A} for prop and usage details. */
export function P(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 13.79,4.00 13.79,43.15 21.45,43.15 21.45,4.00 Z" />
      <path d="M 33.36,4.00 28.26,4.00 28.26,6.55 25.70,12.51 25.70,15.06 23.15,22.72 27.40,22.72 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "Q". See {@link A} for prop and usage details. */
export function Q(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 14.21,4.00 14.21,9.11 15.06,9.96 15.06,15.06 15.91,15.91 15.91,21.02 16.77,21.87 16.77,26.98 17.62,27.83 19.32,43.15 29.53,43.15 27.83,26.98 26.13,21.02 26.13,15.06 26.98,14.21 32.94,14.21 32.94,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "R". See {@link A} for prop and usage details. */
export function R(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 6.98,15.06 6.98,28.68 40.17,28.68 40.17,4.00 18.04,4.00 Z" />
      <path d="M 12.09,33.79 12.09,43.15 40.17,43.15 40.17,32.94 12.94,32.94 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "S". See {@link A} for prop and usage details. */
export function S(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 18.04,4.00 6.98,15.06 6.98,28.68 17.19,28.68 18.04,29.53 18.04,32.09 17.19,32.94 9.53,32.94 9.53,43.15 31.66,43.15 40.17,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "T". See {@link A} for prop and usage details. */
export function T(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 21.45,4.00 21.45,20.17 19.74,21.87 9.53,21.87 8.68,21.02 6.98,21.87 6.98,43.15 40.17,43.15 40.17,30.38 26.55,30.38 25.70,29.53 25.70,26.98 26.55,26.13 40.17,26.13 40.17,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "U". See {@link A} for prop and usage details. */
export function U(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 29.96,4.00 29.96,43.15 40.17,43.15 40.17,4.00 Z" />
      <path d="M 6.98,4.00 6.98,32.94 17.19,42.30 17.19,4.00 Z" />
      <path d="M 21.45,4.00 21.45,22.72 25.70,22.72 25.70,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "V". See {@link A} for prop and usage details. */
export function V(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 23.09,4.00 12.18,43.09 34.91,43.09 33.09,34.91 31.27,31.27 31.27,28.55 29.45,24.91 29.45,22.18 26.73,15.82 25.82,9.45 24.00,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "W". See {@link A} for prop and usage details. */
export function W(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 23.15,4.00 24.00,12.51 24.85,13.36 24.85,18.47 26.55,24.43 28.26,42.30 29.11,43.15 41.87,43.15 40.17,27.83 39.32,26.98 39.32,21.87 37.62,15.91 36.77,4.00 Z" />
      <path d="M 5.28,4.00 6.13,4.85 6.13,9.96 6.98,10.81 6.98,15.91 7.83,16.77 7.83,21.87 8.68,22.72 8.68,27.83 9.53,28.68 9.53,33.79 10.38,34.64 11.23,43.15 24.00,43.15 24.00,37.19 23.15,36.34 23.15,31.23 22.30,30.38 22.30,25.28 21.45,24.43 21.45,19.32 20.60,18.47 18.89,4.00 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "X". See {@link A} for prop and usage details. */
export function X(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 38.89,4.00 24.43,4.00 18.47,15.91 16.77,21.87 18.47,21.02 19.32,21.87 30.38,21.87 32.94,18.47 32.94,16.77 Z" />
      <path d="M 21.87,26.13 15.06,26.13 14.21,26.98 7.40,43.15 14.21,43.15 15.06,42.30 Z" />
      <path d="M 25.28,26.13 32.09,42.30 32.94,43.15 39.74,43.15 36.34,33.79 32.94,27.83 32.94,26.13 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "Y". See {@link A} for prop and usage details. */
export function Y(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 6.55,4.00 6.55,28.68 40.60,28.68 40.60,15.06 29.53,4.00 Z" />
      <path d="M 30.38,32.94 30.38,43.15 40.60,43.15 40.60,32.94 Z" />
    </Glyph>
  );
}

/** Glyph for the letter "Z". See {@link A} for prop and usage details. */
export function Z(props: SarkazGlyphProps) {
  return (
    <Glyph {...props}>
      <path d="M 1.87,4.00 17.19,30.38 31.66,4.00 Z" />
      <path d="M 15.49,43.15 45.28,43.15 33.36,23.57 30.81,17.62 29.11,18.47 26.55,24.43 24.85,26.13 Z" />
    </Glyph>
  );
}

/**
 * Lookup map from a letter (A–Z) to its corresponding glyph component.
 * Used internally by `SarkazGlyph`, and exported in case consumers
 * want to enumerate or dynamically pick a glyph component themselves
 * (e.g. building a character picker).
 */
export const SARKAZ_GLYPHS = {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
} as const;

/** A single uppercase letter A–Z, used as a key into {@link SARKAZ_GLYPHS}. */
export type SarkazLetter = keyof typeof SARKAZ_GLYPHS;

/**
 * Renders the glyph for a single letter, looked up dynamically by the
 * `letter` prop. Prefer this over importing individual letter components
 * (`A`, `B`, ...) when the letter is only known at runtime — e.g. when
 * mapping over user input.
 *
 * The `letter` prop is case-insensitive; it's uppercased internally
 * before lookup.
 *
 * @example
 * <SarkazGlyph letter="q" className="h-6 w-6" />
 *
 * @throws Renders nothing meaningful (returns `undefined`-backed component)
 * if `letter` doesn't resolve to a key in {@link SARKAZ_GLYPHS} — callers
 * passing dynamic/user-controlled strings should validate against
 * `/^[A-Za-z]$/` first, as `SarkazText` does.
 */
export function SarkazGlyph({
  letter,
  ...props
}: SarkazGlyphProps & { letter: SarkazLetter }) {
  const normalized = letter.toUpperCase() as SarkazLetter;
  const GlyphComponent = SARKAZ_GLYPHS[normalized];

  return <GlyphComponent {...props} />;
}

/**
 * Renders an arbitrary string as a sequence of Sarkaz-style letter
 * glyphs, preserving non-letter characters (spaces, digits, punctuation)
 * as plain text.
 *
 * - Letters (A–Z, case-insensitive) are rendered as `SarkazGlyph` icons.
 * - Spaces are preserved as non-breaking spaces so they don't collapse.
 * - Any other character (digits, punctuation, non-Latin characters) is
 *   rendered as plain text, unchanged.
 * - The full original `text` is exposed via `aria-label` on the wrapping
 *   `<span>` for accessibility; the individual glyphs and passthrough
 *   characters are marked `aria-hidden` to avoid duplicate announcements.
 *
 * @param text - The string to render. Case is normalized to uppercase
 *   for glyph lookup; the accessible label preserves the original casing.
 * @param className - Optional class applied to the outer wrapping `<span>`.
 * @param glyphClassName - Optional class applied to each individual glyph
 *   SVG (e.g. for sizing/color via Tailwind utilities).
 * @param gap - Right margin (in `em`, relative to the glyph's font-size)
 *   applied between each letter glyph. Defaults to `0.35`.
 *
 * @example
 * <SarkazText text="HELLO WORLD" glyphClassName="h-8 w-8 text-yellow-400" />
 */
export function SarkazText({
  text,
  className,
  glyphClassName,
  gap = 0.35,
}: {
  text: string;
  className?: string;
  glyphClassName?: string;
  gap?: number;
}) {
  const letters = text.toUpperCase().split("");

  return (
    <span className={className} aria-label={text}>
      {letters.map((character, index) => {
        if (!/^[A-Z]$/.test(character)) {
          return (
            <span key={`${character}-${index}`} aria-hidden="true">
              {character === " " ? "\u00A0" : character}
            </span>
          );
        }

        return (
          <SarkazGlyph
            key={`${character}-${index}`}
            letter={character as SarkazLetter}
            className={glyphClassName}
            style={{ marginRight: `${gap}em` }}
            aria-hidden="true"
          />
        );
      })}
    </span>
  );
}
