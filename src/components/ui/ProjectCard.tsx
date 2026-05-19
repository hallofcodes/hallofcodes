import { Repo } from "@/lib/github/repositories";
import { faStar, faCodeFork, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Repo }) {
  return (
    <article
      className="group flex flex-col lg:flex-row items-start gap-4 bg-gray-900 rounded-xl p-4 shadow-sm hover:shadow-lg border border-gray-800 transition-all"
      data-aos="fade-up"
    >
      <div className="w-full lg:w-44 h-28 relative flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={`https://opengraph.githubassets.com/1/hallofcodes/${project.name}`}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <h3
          className="text-lg font-semibold text-white line-clamp-1"
          title={project.name}
        >
          {project.name}
        </h3>
        <p
          className="text-gray-300 mb-4 line-clamp-3"
          title={project.description || "No description provided."}
        >
          {project.description || "No description provided."}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden />
            View on GitHub
          </a>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="inline-flex items-center gap-1">
              <FontAwesomeIcon icon={faStar} />
              {project.stars}
            </span>
            <span className="inline-flex items-center gap-1">
              <FontAwesomeIcon icon={faCodeFork} />
              {project.forks}
            </span>
            <span className="inline-flex items-center gap-1">
              <FontAwesomeIcon icon={faEye} />
              {project.watchers}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
