// Public icon registry: generated vendor icons plus project-owned additions. Custom names use a
// project prefix to avoid accidental collisions with future generated imports.
import { CUSTOM_ICONS } from "./customIcons";
import { ICONS as GENERATED_ICONS } from "./icons";

export const ICONS = {
  ...GENERATED_ICONS,
  ...CUSTOM_ICONS,
} as const;

export type IconName = keyof typeof ICONS;

export const iconNames = Object.keys(ICONS) as IconName[];
