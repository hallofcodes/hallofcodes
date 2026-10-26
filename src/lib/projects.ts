export interface Project {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  html_url: string;
  homepage?: string;
  coverImage: string;
}

export const projects: Project[] = [
  {
    slug: "acode-ai-agent-plugin",
    name: "Rutex (Acode AI Agent Plugin)",
    description:
      "An autonomous code intelligence assistant engineered specifically for mobile development within the Acode IDE.",
    tags: ["TypeScript", "AI Agent", "Plugin", "Mobile Dev"],
    homepage: "https://acode.app/plugin/hallofcodes.rutex.coding_agent",
    html_url: "https://github.com/hallofcodes/acode-ai-agent-plugin",
    coverImage: "/images/rutex.png",
  },
  {
    slug: "warpshare",
    name: "WarpShare",
    description:
      "A high-speed cross-platform file transfer utility engineered for rapid local-network and peer-to-peer data distribution.",
    tags: ["Cross-platform", "Networking", "P2P", "CLI"],
    homepage: "https://www.dconco.tech/tools/warpshare",
    html_url: "https://github.com/hallofcodes/WarpShare",
    coverImage: "/hoc-cover.png",
  },
  {
    slug: "devpulse",
    name: "DevPulse",
    description:
      "Centralizes continuous integration statuses, repository commit activity, pull request velocity, and team benchmarks into unified visual dashboards designed to improve transparency across open-source teams.",
    tags: ["Productivity", "Dashboard", "DevOps", "Web"],
    homepage: "https://devpulse.hallofcodes.org",
    html_url: "https://github.com/hallofcodes/devpulse",
    coverImage: "/images/devpulse.png",
  },
  {
    slug: "wisp",
    name: "WISP",
    description:
      "Standardizes incident datasets, plots emerging disease outbreaks across interactive geographic coordinates, and maintains historical trajectory telemetry for research and public analysis.",
    tags: ["TypeScript", "Data Analytics", "Public Health", "GeoMapping"],
    homepage: "https://wisp.hallofcodes.org",
    html_url: "https://github.com/hallofcodes/wisp",
    coverImage: "/images/wisp.png",
  },
  {
    slug: "vhdpeek",
    name: "VHDPeek",
    description:
      "Browse VHD/VHDX disk images over HTTP or locally - no download, no mount.",
    tags: ["vhd", "filesystem", "python"],
    homepage: "https://github.com/hallofcodes/vhdpeek",
    html_url: "https://github.com/hallofcodes/vhdpeek",
    coverImage: "/images/vhdpeek.png",
  },
];
