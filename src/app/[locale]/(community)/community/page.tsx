import Link from "next/link";

export default function Community() {
  return (
    <main className="bg-gray-950 text-white mt-10">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

        <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col items-start justify-center gap-8 px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300">
            Hall of Codes Community
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            30+ members
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Build, learn, and ship together.
            <span className="block text-blue-400">This is your crew.</span>
          </h1>
          <p className="max-w-2xl text-base text-gray-300 md:text-lg">
            Our community is a high-signal space for developers, designers, and
            builders to collaborate, share knowledge, and launch meaningful
            projects together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#connect"
              className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              Join the Community
            </Link>
            <button className="rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white">
              Explore Events
            </button>
          </div>

          <div className="mt-8 grid w-full grid-cols-2 gap-4 text-sm text-gray-300 md:grid-cols-4">
            {[
              { label: "Weekly sessions", value: "7+" },
              { label: "Active projects", value: "2+" },
              { label: "Mentors", value: "25+" },
              { label: "Countries", value: "18" },
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

      <section className="min-h-screen border-t border-gray-900" id="connect">
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-10 px-6 py-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Connect
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Join the conversation everywhere.
            </h2>
            <p className="text-gray-300">
              WhatsApp, Messenger, and GitHub Discussions keep us in sync. Ask
              questions, find collaborators, or just share what you’re building.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid gap-4">
              {[
                {
                  title: "Join on GitHub",
                  desc: "Central hub for code, discussions, and project management.",
                  link: "https://github.com/hallofcodes",
                },
                {
                  title: "Join on Codeberge",
                  desc: "Alternative open-source platform for code hosting and collaboration.",
                  link: "https://codeberg.org/hall-of-codes",
                },
                {
                  title: "Join on WhatsApp",
                  desc: "Real-time chat for quick questions, project updates, and casual conversation.",
                  link: "https://chat.whatsapp.com/ICRRqZivQ9PB1kmmZMKNnq?s=cl&p=a&mlu=3",
                },
                {
                  title: "Join on Messenger",
                  desc: "Instant messaging for announcements, discussions, and community bonding.",
                  link: "https://m.me/j/AbajwXM3ZUXO7emx/?send_source=gc%3Acopy_invite_link_c",
                },
              ].map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  target="_blank"
                  className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 transition hover:border-blue-500/40"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs text-blue-400">Open</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen border-t border-gray-900">
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-10 px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Events
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Learn faster with high-impact events.
              </h2>
              <p className="max-w-2xl text-gray-300">
                Workshops, hackathons, and webinars built to level up your
                skills and expand your network.
              </p>
            </div>
            <button className="rounded-xl border border-gray-700 px-5 py-2 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white">
              View Calendar
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {["Hands-on Workshops", "Build-a-thons", "Expert Webinars"].map(
              (item) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-gray-800 bg-gray-900/60 p-6 transition hover:border-blue-500/40 hover:bg-gray-900"
                >
                  <div className="text-sm text-blue-400">Featured</div>
                  <h3 className="mt-2 text-xl font-semibold">{item}</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Curated sessions designed to help you ship projects faster.
                  </p>
                  <div className="mt-4 text-sm font-semibold text-blue-400">
                    Learn more →
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="min-h-screen border-t border-gray-900">
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-8 px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Build
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Build, share, and grow with the community.
              </h2>
              <p className="max-w-2xl text-gray-300">
                Contribute to meaningful open-source projects, pitch new ideas,
                and help others level up through knowledge sharing.
              </p>
            </div>
            <div className="inline-flex items-center rounded-xl bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              Impact focused collaboration
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Starter friendly",
                  desc: "Well scoped issues with clear guidance.",
                },
                {
                  title: "Cross discipline",
                  desc: "Designers and developers ship together.",
                },
                {
                  title: "Real outcomes",
                  desc: "Projects that solve real problems.",
                },
                {
                  title: "Mentor support",
                  desc: "Get feedback and direction fast.",
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl bg-gray-900/70 p-4 transition hover:bg-gray-900"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-semibold text-blue-300">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-3xl bg-gradient-to-br from-blue-500/15 to-blue-500/5 p-6">
                <h3 className="text-xl font-semibold">
                  Have an idea for an event or project?
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Pitch it and we will help shape it with people, resources, and
                  visibility across the community.
                </p>
                <button className="mt-4 rounded-xl bg-blue-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-400">
                  Share Your Idea
                </button>
              </div>

              <div className="rounded-2xl bg-gray-900/60 p-6">
                <h3 className="text-lg font-semibold">Share your knowledge.</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Publish tutorials, write blog posts, or host sessions to help
                  others level up.
                </p>
                <button className="mt-4 rounded-xl bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-200 transition hover:bg-gray-700">
                  Contribute Content
                </button>
              </div>

              <div className="rounded-2xl bg-gray-900/60 p-6">
                <h3 className="text-lg font-semibold">Become a mentor.</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Guide newer members and help projects ship with confidence.
                </p>
                <button className="mt-4 rounded-xl bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-200 transition hover:bg-gray-700">
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen border-t border-gray-900">
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-8 px-6 py-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Sponsorship
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Supported by partners who believe in builders.
          </h2>
          <p className="max-w-2xl text-gray-300">
            Our newest sponsor helps us grow the community and keep learning
            accessible to everyone.
          </p>

          <Link
            href="https://start.excelinweb.com/?utm_source=hallofcodes&utm_medium=referral&utm_campaign=sponsorship"
            className="mt-4 rounded-2xl bg-gray-900/60 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">
                  Newest sponsor
                </div>
                <div className="text-xs text-gray-400">ExcelinWeb</div>
              </div>
              <img
                src="https://start.excelinweb.com/assets/images/logo/excelinweb-logo-white-transparent.png"
                alt="ExcelinWeb logo"
                className="h-10 w-auto opacity-90"
              />
            </div>

            <div className="mt-4 grid gap-3 text-sm text-gray-300 md:grid-cols-3">
              <div className="rounded-xl bg-gray-950/60 p-4">
                Financial assistance for domain registration and related
                infrastructure costs.
              </div>
              <div className="rounded-xl bg-gray-950/60 p-4">
                Increased operational stability for the organization’s online
                presence.
              </div>
              <div className="rounded-xl bg-gray-950/60 p-4">
                Opportunity to build long-term relationships with industry
                supporters and collaborators.
              </div>
            </div>
          </Link>

          <div className="rounded-2xl bg-gray-900/60 p-6">
            <h3 className="text-xl font-semibold text-white">
              Want to sponsor Hall of Codes?
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              Reach us through our official channels above and we will guide you
              through the sponsorship options.
            </p>
            <Link
              href="#connect"
              className="mt-4 inline-flex items-center rounded-xl bg-blue-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-400"
            >
              Contact us via official channels
            </Link>
          </div>
        </div>
      </section>

      <section className="min-h-screen border-t border-gray-900">
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-8 px-6 py-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Portfolio Flex
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Flex your portfolio designs with the community.
          </h2>
          <p className="max-w-2xl text-gray-300">
            Members can showcase their awesome portfolio designs built with
            their own themes and style, and get discovered by the community.
          </p>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-gray-800/60 bg-gray-900/50 p-6 shadow-sm">
              <div className="inline md:flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Portfolio originality criteria
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    To maintain a credible, high-quality showcase, submissions
                    must reflect original work and clear ownership.
                  </p>
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-semibold text-blue-300">
                  Required
                </span>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  "Your portfolio must be authored by you and reflect your own projects or contributions.",
                  "Forked or copied projects without meaningful original work are not accepted.",
                  "If you used a starter, clearly document what you built and how you extended it.",
                  "We may request proof of ownership or contribution history when needed.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-gray-800/60 bg-gray-950/40 p-4"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-semibold text-blue-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gray-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">
                How to contribute your portfolio
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Follow these steps to get featured in the Portfolio Flex.
              </p>
              <ol className="mt-4 space-y-3 text-sm text-gray-300">
                <li className="rounded-xl bg-gray-950/60 p-3">
                  Fork the repository and create your branch.
                </li>
                <li className="rounded-xl bg-gray-950/60 p-3">
                  Add your entry to{" "}
                  <span className="text-blue-300">lib/portfolio.ts</span>.
                </li>
                <li className="rounded-xl bg-gray-950/60 p-3">
                  Save your portfolio screenshot in{" "}
                  <span className="text-blue-300">public/portfolio</span>.
                </li>
                <li className="rounded-xl bg-gray-950/60 p-3">
                  Compress the image using{" "}
                  <span className="text-blue-300">
                    https://imagecompressor.com/
                  </span>
                  .
                </li>
              </ol>
              <Link
                href="/portfolio"
                className="mt-5 inline-flex items-center rounded-xl bg-blue-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-400"
              >
                View Portfolio Flex
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
