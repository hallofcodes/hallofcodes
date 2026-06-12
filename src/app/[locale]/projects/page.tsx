import ProjectCard from "@/components/ui/ProjectCard";
import { getMembers } from "@/lib/github/members";
import { getRepositories, Repo } from "@/lib/github/repositories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Hall of Codes",
  description:
    "Look at our projects that demonstrate the creativity and collaboration of our members.",
  alternates: {
    canonical: "https://www.hallofcodes.org/projects",
  },
  openGraph: {
    title: "Our Projects - Hall of Codes",
    description:
      "Look at our projects that demonstrate the creativity and collaboration of our members.",
    url: "https://www.hallofcodes.org/projects",
    siteName: "Hall of Codes",
    images: [
      {
        url: "https://www.hallofcodes.org/hoc-cover.png",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects - Hall of Codes",
    description:
      "Look at our projects that demonstrate the creativity and collaboration of our members.",
    images: [
      {
        url: "https://www.hallofcodes.org/hoc-cover.png",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
  },
};

export default async function Projects() {
  const [repositories, members] = await Promise.all([
    getRepositories(),
    getMembers(),
  ]);
  const repoCount = repositories.length;
  const memberCount = members.length;

  return (
    <main className="bg-gray-950 text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

        <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col items-start justify-center gap-8 px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300">
            Hall of Codes Projects
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Open-source driven
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Real projects. Real impact.
            <span className="block text-blue-400">Built by the community.</span>
          </h1>
          <p className="max-w-2xl text-base text-gray-300 md:text-lg">
            Explore products and tools crafted by our members—where creativity,
            collaboration, and execution meet.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Propose a Project
            </button>
            <button className="rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white">
              View GitHub Org
            </button>
          </div>

          <div className="mt-8 grid w-full grid-cols-2 gap-4 text-sm text-gray-300 md:grid-cols-4">
            {[
              { label: "Repositories", value: `${repoCount}+` },
              { label: "Active builds", value: "10+" },
              { label: "Collaborators", value: `${memberCount}+` },
              { label: "Merged PRs", value: "300+" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-4"
              >
                <div className="text-lg font-semibold text-white">
                  {item.value}
                </div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen border-t border-gray-900">
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-10 px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Showcase
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Discover community-built work.
              </h2>
              <p className="max-w-2xl text-gray-300">
                From internal tools to public-facing products, every project
                reflects the energy and talent of our builders.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Open Source", "Tooling", "Web Apps"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1 text-xs text-gray-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {repositories.map((repository: Repo, index: number) => (
              <ProjectCard key={index} project={repository} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
