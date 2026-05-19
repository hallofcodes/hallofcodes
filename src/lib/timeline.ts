export type TimelineEntry = {
  date: string;
  heading: string;
  description: string;
};

const timeline: TimelineEntry[] = [
  {
    date: "Sometime in 2019",
    heading: "The Spark Ignites",
    description:
      "A small crew gathered with big ideas and very questionable sleep schedules. The original name was Android Developer, but the ambitions were already larger than any single platform.",
  },
  {
    date: "Sometime in 2021",
    heading: "Rebranded to Hall of Codes",
    description:
      "We leveled up the name and the mission: build together, argue less, ship more. The community didn’t just survive the rebrand—it got louder, funnier, and far more creative.",
  },
  {
    date: "November 2021",
    heading: "First GitHub Organization Launched",
    description:
      "We planted our flag on GitHub and called it home. Repos started multiplying like rabbits, and suddenly pull requests became our new love language.",
  },
  {
    date: "December 2021",
    heading: "First Facebook Page Goes Live",
    description:
      "We went public, and the internet noticed. Followers rolled in fast, proving that good vibes and great code are surprisingly shareable.",
  },
  {
    date: "July 2025",
    heading: "WhatsApp Era Begins",
    description:
      "We brought the chaos to WhatsApp for real-time collaboration and meme-powered productivity. The group chat became the unofficial headquarters of quick fixes and bold ideas.",
  },
  {
    date: "August 2025",
    heading: "Next.js Migration",
    description:
      "We rebuilt the site on Next.js for speed, SEO, and pure flex. Pages got faster, the dev experience got smoother, and we celebrated like we just pushed to main without conflicts.",
  },
  {
    date: "May 2026",
    heading: "Redesigned, LinkedIn & .org Launch",
    description:
      "We went all in on the new look and expanded our digital footprint with a LinkedIn page and a .org domain. The community’s online presence got a major upgrade, matching the energy and professionalism of our members.",
  },
];

export default timeline;
