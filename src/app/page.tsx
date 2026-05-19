import Link from "next/link";
import { getMembers, Member } from "@/lib/github/members";
import { getRepositories, Repo } from "@/lib/github/repositories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ScrambleText from "@/components/ui/ScrambleText";
import ProjectCard from "@/components/ui/ProjectCard";
import MemberCard from "@/components/ui/MemberCard";
import timeline, { TimelineEntry } from "@/lib/timeline";
import TimelineCard from "@/components/ui/TimelineCard";
import { getRecentPosts, PostEntry } from "@/lib/posts";
import BlogCard from "@/components/ui/BlogCard";

export default async function Home() {
  const [members, repositories, posts] = await Promise.all([
    getMembers(),
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

        <div className="relative z-10 min-h-screen flex items-end justify-start">
          <div className="max-w-3xl px-6 pb-16 text-left">
            <ScrambleText
              as="h1"
              text="Hall of Codes"
              durationMs={2000}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-4"
              aria-label="Hall of Codes - Merging Programmers Beyond Conflicts"
            />
            <p className="text-lg sm:text-2xl text-gray-200 mb-4">
              Merging Programmers Beyond Conflicts
            </p>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-6 line-clamp-2 md:line-clamp-3">
              We revolutionize development by fostering cohesion among teams,
              transcending conflicts to drive collective innovation. Harnessing
              the synergy of diverse talents, we pave the way for seamless
              collaboration, ensuring projects thrive in an environment of unity
              and progress.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/members"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md"
              >
                View Members
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-white/30 text-sm font-medium py-2 px-4 rounded-md hover:bg-white/5"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-25 xl:right-50 2xl:right-100 top-1/2 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
          <div className="w-80 rounded-2xl border border-white/10 bg-black/40 p-4 shadow-xl backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="ml-2">collaboration.ts</span>
            </div>
            <pre className="text-xs text-gray-300 leading-relaxed text-wrap">
              <code>
                {`const team = ["design", "frontend", "backend"];
const ship = (idea) => team.map(role => role);
export const impact = ship("community");`}
              </code>
            </pre>
          </div>

          <div className="w-80 rounded-2xl border border-white/10 bg-black/40 p-4 shadow-xl backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="ml-2">projects.md</span>
            </div>
            <pre className="text-xs text-gray-300 leading-relaxed text-wrap">
              <code>
                {`# Hall of Codes
Build together, review together.
Open source, real outcomes.
Mentorship drives velocity.`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gray-900">
        <div className="mx-auto flex flex-col lg:flex-row min-h-screen max-w-7xl  items-center gap-10 px-6 py-20">
          <div className="w-full lg:w-[55%]">
            <ScrambleText
              as="h2"
              text="About Hall of Codes"
              durationMs={2000}
              className="text-3xl font-semibold text-white md:text-4xl"
              aria-label="About Hall of Codes - Merging Programmers Beyond Conflicts"
            />

            <p className="mt-4 text-gray-300 leading-relaxed">
              Hall of Codes is an inclusive community of developers and
              contributors who believe collaboration outperforms conflict. We
              bring together diverse skillsets and perspectives to solve real
              problems, mentor newcomers, and ship sustainable open-source
              projects.
            </p>
            <p className="mt-3 text-gray-400">
              Our mission: improve developer collaboration, reduce friction, and
              create an ecosystem where ideas can grow into impactful projects.
            </p>

            <div className="mt-6">
              <Link
                href="https://github.com/hallofcodes/join"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
              >
                <FontAwesomeIcon icon={faGithub} />
                Join Github Organization
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-200">Milestones</h3>
              <span className="text-xs uppercase tracking-widest text-blue-400">
                Timeline
              </span>
            </div>

            <div
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory p-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
              }}
            >
              <div className="flex gap-4">
                {timeline.map((timeline: TimelineEntry, index: number) => (
                  <div
                    key={index}
                    className="min-w-[240px] snap-start rounded-xl bg-gray-800/60 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg md:min-w-[280px]"
                  >
                    <TimelineCard timeline={timeline} />
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-500">Swipe/scroll to explore →</p>
          </div>
        </div>
      </section>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none" />

      <section className="min-h-screen flex items-center bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <ScrambleText
            as="h2"
            text="Some of Our Members"
            durationMs={2000}
            className="text-3xl font-semibold text-white mb-8"
            aria-label="Some of Our Members - Merging Programmers Beyond Conflicts"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6">
            {members.slice(0, 12).map((member: Member, index: number) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <ScrambleText
            as="h2"
            text="Some of Our Projects"
            durationMs={2000}
            className="text-3xl font-semibold text-white mb-8"
            aria-label="Some of Our Projects - Merging Programmers Beyond Conflicts"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repositories.slice(0, 6).map((repository: Repo, index: number) => (
              <ProjectCard key={index} project={repository} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="min-h-screen flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #101828 0%, rgba(31, 41, 55, 0.85) 55%, #1f2937 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <ScrambleText
              as="h2"
              text="Latest from Our Blog"
              durationMs={2000}
              className="text-3xl font-semibold text-white mb-8"
              aria-label="Latest from Our Blog - Merging Programmers Beyond Conflicts"
            />

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post: PostEntry, index: number) => (
                <BlogCard key={index} post={post} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-2/5">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold">
                Our North Star
              </p>

              <ScrambleText
                as="h2"
                text="Mission & Vision"
                durationMs={2000}
                className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4"
                aria-label="Mission & Vision - Merging Programmers Beyond Conflicts"
              />

              <p className="text-gray-300 leading-relaxed">
                We turn late-night ideas into morning launches. Hall of Codes is
                where builders meet, momentum stacks, and the only drama is how
                fast we ship.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-900 p-4 border border-gray-800">
                  <div className="text-2xl font-semibold text-white">100+</div>
                  <div className="text-sm text-gray-400">
                    Collaborations sparked
                  </div>
                </div>
                <div className="rounded-xl bg-gray-900 p-4 border border-gray-800">
                  <div className="text-2xl font-semibold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Ideas in motion</div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <article className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-900/40 text-blue-300 flex items-center justify-center">
                    <FontAwesomeIcon icon={faPerson} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mission</h3>
                </div>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Build a frictionless playground where developers collaborate
                  instead of collide. We champion clarity, empathy, and shipping
                  together—because great code deserves a great community.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Reduce conflict, amplify output
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Mentor fast, iterate faster
                  </li>
                </ul>
              </article>

              <article className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-blue-600 to-indigo-600 p-6 shadow-sm hover:shadow-lg transition-all text-white">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/20 text-white flex items-center justify-center">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <h3 className="text-xl font-semibold">Vision</h3>
                </div>
                <p className="mt-4 text-white/90 leading-relaxed">
                  A global network of builders where collaboration is the
                  default, not the exception. We’re aiming for a future where
                  every idea has a team and every team has a launchpad.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Community-first innovation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Open-source as the heartbeat
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="min-h-screen flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #1f2937 0%, rgba(37,99,235,0.85) 55%, #4f46e5 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-2/5">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200 font-semibold">
                Founders Spotlight
              </p>

              <ScrambleText
                as="h2"
                text="Meet the Founders"
                durationMs={2000}
                className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4"
                aria-label="Meet the Founders - Merging Programmers Beyond Conflicts"
              />

              <p className="text-blue-100 leading-relaxed">
                Hall of Codes is led by a small team committed to improving
                collaboration across open-source projects. Below are the people
                who started this journey — click through to learn more about
                their backgrounds and what they care about.
              </p>
            </div>

            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <article className="group rounded-2xl border border-white/10 bg-white/95 p-6 shadow-sm hover:shadow-lg transition-all">
                <img
                  src="https://avatars.githubusercontent.com/mrepol742"
                  alt="Founder of Hall of Codes"
                  className="rounded-lg w-full h-56 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Melvin Jones Repol
                    </h3>
                    <p className="text-sm text-gray-500">Founder</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Melvin is a custom software engineer with 10+ years
                  experience. He founded Hall of Codes to break down barriers
                  and create a collaborative environment where projects and
                  people thrive.
                </p>
              </article>

              <article className="group rounded-2xl border border-white/10 bg-white/95 p-6 shadow-sm hover:shadow-lg transition-all">
                <img
                  src="https://avatars.githubusercontent.com/samiunnafis"
                  alt="Co-founder of Hall of Codes"
                  className="rounded-lg w-full h-56 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Samiun Nafis
                    </h3>
                    <p className="text-sm text-gray-500">Co‑Founder</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Samiun is a Full Stack Developer with a passion for
                  open-source. He co-founded Hall of Codes to foster a community
                  where developers can collaborate, learn, and build impactful
                  projects together.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center bg-[#4f46e5] text-white">
        <div className="max-w-3xl text-center px-6 py-20">
          <ScrambleText
            as="h2"
            text="Join Hall of Codes"
            durationMs={2000}
            className="text-3xl sm:text-4xl font-bold mb-4"
            aria-label="Join Hall of Codes - Merging Programmers Beyond Conflicts"
          />

          <p className="mb-6 text-gray-100">
            Contribute, collaborate, and learn with fellow developers. Check our
            GitHub organization and join our community.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/hallofcodes"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-700 px-5 py-3 rounded font-semibold hover:opacity-95"
            >
              GitHub Organization
            </a>
            <Link
              href="/community"
              className="border border-white/30 px-5 py-3 rounded hover:bg-white/5"
            >
              Community Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
