import { type HomeDataProps } from "./types/configDataTypes";

/**
 * Homepage-only facts and explicitly requested placeholders for the Paper Pixel redesign.
 *
 * Projects stay here until real collection entries replace them; labeling them as placeholders in
 * the UI prevents the template's demo collection from being presented as Jin's work. Empty URLs
 * are intentional launch placeholders and must not be replaced with invented destinations.
 */
const homeData = {
  identity: {
    brandMark: "JS",
    brandLabel: "Jin Song // Dev Log",
    name: "Jin Song",
    role: "Software Engineer",
    focus: "Cloud Infrastructure / Platform / Automation",
    profileFocus: "Cloud / Platform / Automation",
    location: "Kitchener-Waterloo, Canada",
    intro: "I build reliable cloud infrastructure, internal platforms, and developer tooling.",
    resumeHref: "",
  },
  status: "Building & Learning",
  featuredProjects: [
    { title: "Home Infrastructure", stack: "Docker / Cloudflare / Tailscale" },
    { title: "Photo Backup Architecture", stack: "Immich / Object Storage / Backup" },
    { title: "jsong.ca", stack: "Astro / Cloudflare" },
  ],
  experience: [{ organization: "D2L", role: "Software Developer", period: "2022–Present" }],
} as const satisfies HomeDataProps;

export default homeData;
