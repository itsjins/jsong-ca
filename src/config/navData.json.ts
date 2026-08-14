import { type NavItemProps } from "./types/configDataTypes";

/**
 * * Primary navigation for jsong.ca.
 *
 * Notes keeps the existing `/blog/` route while presenting the new public label. Experience points
 * to the homepage preview until its dedicated route is introduced in a later phase.
 */
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects/" },
  { label: "Experience", href: "/#experience" },
  { label: "Notes", href: "/blog/" },
  { label: "About", href: "/about/" },
] as const satisfies readonly NavItemProps[];
