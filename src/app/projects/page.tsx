import ProjectCard from "@/components/ui/ProjectCard";
import { getRepositories, Repo } from "@/lib/github/repositories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Hall of Codes",
  description:
    "Look at our projects that demonstrate the creativity and collaboration of our members.",
  alternates: {
    canonical: "https://hallofcodes.vercel.app/projects",
  },
  openGraph: {
    title: "Our Projects - Hall of Codes",
    description:
      "Look at our projects that demonstrate the creativity and collaboration of our members.",
    url: "https://hallofcodes.vercel.app/projects",
    siteName: "Hall of Codes",
    images: [
      {
        url: "https://hallofcodes.vercel.app/cover.jpg",
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
        url: "https://hallofcodes.vercel.app/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
  },
};

export default async function Projects() {
  const repositories = await getRepositories();

  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-4">
        Our Projects
      </h1>
      <div className="text-gray-400 mb-12">
        We are proud to showcase our projects that demonstrate the creativity
        and collaboration of our members. Here are some of the amazing projects
        that we have worked on together:
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repositories.map((repository: Repo, index: number) => (
          <ProjectCard key={index} project={repository} />
        ))}
      </div>
    </div>
  );
}
