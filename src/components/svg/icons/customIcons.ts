// Project-owned 24×24 line icons. Keep custom glyphs separate from the generated `icons.ts` so a
// future upstream icon import cannot overwrite them. Values contain only inner SVG markup; the
// shared <Icon /> component owns the outer SVG, viewBox, sizing, color, and accessibility behavior.

const lineGroup = (paths: readonly string[]): string =>
  `<g stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths
    .map((path) => `<path d="${path}"/>`)
    .join("")}</g>`;

export const CUSTOM_ICONS = {
  "profile-role": lineGroup([
    "M8 4h8v1h2v2h1v2h1v8h-2v2h-2v1H8v-1H6v-2H4V9h1V7h1V5h2V4Z",
    "M8 9h8v7H8z",
    "M10 12h.01",
    "M14 12h.01",
    "M10 14h4",
  ]),
  "profile-focus": lineGroup([
    "M12 3v2",
    "M12 19v2",
    "M3 12h2",
    "M19 12h2",
    "M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10",
    "M12 10a2 2 0 1 0 0 4a2 2 0 1 0 0-4",
  ]),
  "profile-location": lineGroup([
    "M12 21s5-5.2 5-10a5 5 0 1 0-10 0c0 4.8 5 10 5 10Z",
    "M12 9a2 2 0 1 0 0 4a2 2 0 1 0 0-4",
  ]),
  "profile-status": lineGroup([
    "M20.8 8.6c0 5.3-8.8 10.4-8.8 10.4S3.2 13.9 3.2 8.6A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.8 1.8Z",
  ]),
  "profile-uptime": lineGroup(["M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18", "M12 7v5h4"]),
} as const satisfies Record<string, string>;

export type CustomIconName = keyof typeof CUSTOM_ICONS;
