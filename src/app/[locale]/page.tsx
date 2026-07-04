import Link from "next/link";
import Image from "next/image";
import { getMembers, Member } from "@/lib/github/members";
import { getRepositories, Repo } from "@/lib/github/repositories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faPerson,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ScrambleText from "@/components/ui/ScrambleText";
import ProjectCard from "@/components/ui/ProjectCard";
import timeline, { TimelineEntry } from "@/lib/timeline";
import { getRecentPosts, PostEntry } from "@/lib/posts";
import { fetchTrackedMembers } from "@/lib/wakatime/leaderboards";
import HallOfFame from "./components/HallOfFame";
import MemberGlobe from "@/components/ui/MemberGlobe";

export const dynamic = "force-static";

export default async function Home() {
  const [members, getLeaderboards, repositories, posts] = await Promise.all([
    getMembers(),
    fetchTrackedMembers(),
    getRepositories(),
    getRecentPosts(4),
  ]);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hall of Codes",
    url: "https://www.hallofcodes.org",
    logo: "https://www.hallofcodes.org/hoc-icon.png",
    sameAs: [
      "https://www.facebook.com/hallofcodes",
      "https://github.com/hallofcodes",
    ],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hall of Codes",
    url: "https://www.hallofcodes.org",
    inLanguage: "en",
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, webSite],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <section
        className="relative min-h-screen bg-black text-white overflow-hidden"
        aria-label="Hero"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(59,130,246,0.2),transparent_60%)]" />

        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(59,130,246,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

          <div className="relative mx-auto flex min-h-screen flex-col items-start justify-center gap-8 px-6 py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300">
              Merging Programmers Beyond Conflicts
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hall of Codes.
              <span className="block text-blue-400">
                The community that never dies.
              </span>
            </h1>
            <p className="max-w-2xl text-base text-gray-300 md:text-lg">
              We revolutionize development by fostering cohesion among teams,
              transcending conflicts to drive collective innovation. Harnessing
              the synergy of diverse talents, we pave the way for seamless
              collaboration, ensuring projects thrive in an environment of unity
              and progress.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/members"
                className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                Members
              </Link>
              <Link
                href="/projects"
                className="rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white"
              >
                Projects
              </Link>
            </div>
          </div>
        </section>

        <MemberGlobe members={members} />
      </section>

      <main className="overflow-hidden bg-[#090d16] text-white">
        <section
          className="border-t border-white/10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #090d16 0%, #111827 48%, #172033 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Built in public
                </p>
                <ScrambleText
                  as="h2"
                  text="A community shaped by the work."
                  durationMs={2000}
                  className="max-w-xl text-4xl font-semibold leading-tight text-white md:text-5xl"
                  aria-label="About Hall of Codes"
                />
                <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
                  Hall of Codes brings developers, maintainers, and curious
                  builders into the same room. We mentor newcomers, review each
                  other&apos;s work, and turn useful ideas into sustainable
                  open-source projects.
                </p>
                <Link
                  href="https://github.com/hallofcodes/join"
                  className="mt-8 inline-flex items-center gap-3 border-b border-cyan-300 pb-2 text-sm font-semibold text-white transition hover:gap-5 hover:text-cyan-200"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  Join the organization
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

              <div>
                <div className="grid border-y border-white/10 sm:grid-cols-3">
                  <div className="py-6 sm:pr-6">
                    <div className="text-4xl font-semibold text-white">
                      {members.length}+
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      public GitHub members
                    </p>
                  </div>
                  <div className="border-t border-white/10 py-6 sm:border-l sm:border-t-0 sm:px-6">
                    <div className="text-4xl font-semibold text-cyan-300">
                      {repositories.length}
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      active repositories
                    </p>
                  </div>
                  <div className="border-t border-white/10 py-6 sm:border-l sm:border-t-0 sm:pl-6">
                    <div className="text-4xl font-semibold text-amber-300">
                      2019
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      the community began
                    </p>
                  </div>
                </div>

                <ol className="mt-12">
                  {timeline.map((entry: TimelineEntry, index: number) => (
                    <li
                      key={`${entry.date}-${entry.heading}`}
                      className="group grid gap-3 border-t border-white/10 py-7 sm:grid-cols-[8rem_1fr] sm:gap-8"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-cyan-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-gray-500">
                          {entry.date}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-200">
                          {entry.heading}
                        </h3>
                        <p className="mt-2 max-w-2xl leading-7 text-gray-400">
                          {entry.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-white/10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #172033 0%, #101827 50%, #0d1420 100%)",
          }}
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <HallOfFame members={getLeaderboards} />
          </div>
        </section>

        <section
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0d1420 0%, #111827 55%, #172033 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                  People behind the commits
                </p>
                <ScrambleText
                  as="h2"
                  text="Meet the builders"
                  durationMs={2000}
                  className="text-4xl font-semibold text-white md:text-5xl"
                  aria-label="Some of our members"
                />
              </div>
              <p className="max-w-lg leading-7 text-gray-400">
                Different backgrounds, stacks, and time zones. One shared habit:
                helping useful work move forward.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {members.slice(0, 12).map((member: Member, index: number) => (
                <Link
                  key={member.login}
                  href={`https://github.com/${member.login}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative border-b border-white/10 px-3 py-8 text-center transition hover:bg-white/[0.04] sm:px-5 lg:border-r"
                >
                  <span className="absolute left-3 top-3 text-[10px] text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={member.avatar}
                    alt={member.login}
                    width={88}
                    height={88}
                    className="mx-auto size-20 rounded-full object-cover grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="mt-4 block truncate text-sm font-medium text-gray-300 group-hover:text-white">
                    @{member.login}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Link
                href="/members"
                className="inline-flex items-center gap-3 text-sm font-semibold text-cyan-200 transition hover:gap-5"
              >
                Explore all members
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="border-y border-white/10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #172033 0%, #101827 48%, #0c121d 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Open source portfolio
                </p>
                <ScrambleText
                  as="h2"
                  text="Projects with a pulse"
                  durationMs={2000}
                  className="text-4xl font-semibold leading-tight text-white md:text-5xl"
                  aria-label="Some of our projects"
                />
                <p className="mt-5 max-w-md leading-7 text-gray-400">
                  Tools, experiments, and community infrastructure built through
                  practical collaboration rather than handoffs.
                </p>
              </div>

              {repositories[0] && (
                <a
                  href={repositories[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid overflow-hidden border border-white/10 bg-black/20 md:grid-cols-[1.1fr_0.9fr]"
                >
                  <div className="relative min-h-72 overflow-hidden">
                    <Image
                      src={`https://opengraph.githubassets.com/1/hallofcodes/${repositories[0].name}`}
                      alt={repositories[0].name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-col justify-between p-7 md:p-9">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                        Featured repository
                      </span>
                      <h3 className="mt-4 text-3xl font-semibold text-white">
                        {repositories[0].name}
                      </h3>
                      <p className="mt-4 leading-7 text-gray-400">
                        {repositories[0].description ||
                          "An open-source project maintained by Hall of Codes."}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="flex items-center gap-2 text-sm text-gray-300">
                        <FontAwesomeIcon icon={faStar} />
                        {repositories[0].stars}
                      </span>
                      <span className="inline-flex items-center gap-3 text-sm font-semibold text-cyan-200">
                        View repository
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                  </div>
                </a>
              )}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {repositories.slice(1, 5).map((repository: Repo) => (
                <ProjectCard key={repository.name} project={repository} />
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage:
              "linear-gradient(180deg, #0c121d 0%, #151d2e 52%, #1b2940 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                  Field notes
                </p>
                <ScrambleText
                  as="h2"
                  text="What we are learning"
                  durationMs={2000}
                  className="text-4xl font-semibold leading-tight text-white md:text-5xl"
                  aria-label="Latest from our blog"
                />
                <p className="mt-5 max-w-md leading-7 text-gray-400">
                  Lessons from building together, maintaining open source, and
                  growing a developer community without losing the human part.
                </p>
                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-3 border-b border-amber-300 pb-2 text-sm font-semibold transition hover:gap-5 hover:text-amber-200"
                >
                  Browse the journal
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

              <div className="border-t border-white/10">
                {posts.map((post: PostEntry, index: number) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start"
                  >
                    <span className="text-xs font-semibold text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        <span className="capitalize">
                          {post.topics?.[0] ?? "general"}
                        </span>
                        <span>{post.date}</span>
                        <span>@{post.author}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold leading-snug text-white transition group-hover:text-cyan-200 md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 leading-7 text-gray-400">
                        {post.excerpt}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="mt-1 hidden text-gray-500 transition group-hover:translate-x-1 group-hover:text-white sm:block"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-white/10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #1b2940 0%, #263b59 52%, #31557a 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Our north star
                </p>
                <ScrambleText
                  as="h2"
                  text="Build with people, not around them."
                  durationMs={2000}
                  className="text-4xl font-semibold leading-tight text-white md:text-5xl"
                  aria-label="Mission and vision"
                />
                <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                  We turn individual momentum into shared progress. Clear
                  communication, generous review, and visible work are how we
                  get there.
                </p>
              </div>

              <div className="grid sm:grid-cols-2">
                <article className="border-t border-white/20 py-8 sm:pr-8">
                  <div className="flex size-11 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
                    <FontAwesomeIcon icon={faPerson} />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold">Mission</h3>
                  <p className="mt-4 leading-7 text-blue-100">
                    Make collaboration easier than conflict by giving developers
                    the context, mentorship, and trust needed to ship together.
                  </p>
                </article>
                <article className="border-t border-white/20 py-8 sm:border-l sm:pl-8">
                  <div className="flex size-11 items-center justify-center rounded-full bg-amber-300 text-slate-950">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold">Vision</h3>
                  <p className="mt-4 leading-7 text-blue-100">
                    A global network where every useful idea can find a team and
                    every contributor has room to become a maintainer.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage:
              "linear-gradient(180deg, #31557a 0%, #224b70 45%, #143552 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  Founders
                </p>
                <ScrambleText
                  as="h2"
                  text="The first commit"
                  durationMs={2000}
                  className="text-4xl font-semibold text-white md:text-5xl"
                  aria-label="Meet the founders"
                />
                <p className="mt-5 max-w-sm leading-7 text-blue-100">
                  Hall of Codes started with a simple belief: strong software
                  communities are designed around generosity, not gatekeeping.
                </p>
              </div>

              <div className="border-t border-white/20">
                {[
                  {
                    name: "Melvin Jones Repol",
                    role: "Founder",
                    username: "mrepol742",
                    description:
                      "A custom software engineer with more than a decade of experience, focused on removing barriers between people, projects, and useful outcomes.",
                  },
                  {
                    name: "Samiun Nafis",
                    role: "Co-Founder",
                    username: "samiunnafis",
                    description:
                      "A full-stack developer and open-source advocate focused on creating spaces where developers can learn, contribute, and grow together.",
                  },
                ].map((founder) => (
                  <a
                    key={founder.username}
                    href={`https://github.com/${founder.username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid gap-6 border-b border-white/20 py-8 sm:grid-cols-[7rem_1fr_auto] sm:items-center"
                  >
                    <Image
                      src={`https://avatars.githubusercontent.com/${founder.username}`}
                      alt={founder.name}
                      width={112}
                      height={112}
                      className="size-28 rounded-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                        {founder.role}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {founder.name}
                      </h3>
                      <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                        {founder.description}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="hidden text-blue-200 transition group-hover:translate-x-1 group-hover:text-white sm:block"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-t border-white/15"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #143552 0%, #0b2237 55%, #071520 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-8 flex size-14 items-center justify-center rounded-full bg-white text-slate-950">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <ScrambleText
                  as="h2"
                  text="Bring the next idea."
                  durationMs={2000}
                  className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl"
                  aria-label="Join Hall of Codes"
                />
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                  Find collaborators, contribute to active projects, or start
                  something the community can build with you.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="https://github.com/hallofcodes"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-56 items-center justify-between gap-4 bg-white px-5 py-4 font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  GitHub organization
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
                <Link
                  href="/community"
                  className="inline-flex min-w-56 items-center justify-between gap-4 border border-white/30 px-5 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Community page
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
