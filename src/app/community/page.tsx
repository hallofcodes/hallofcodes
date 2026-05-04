export default function Community() {
  return (
    <main className="bg-gray-950 text-white">
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
            <button className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Join the Community
            </button>
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

      <section className="min-h-screen border-t border-gray-900">
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
                  title: "WhatsApp",
                  desc: "Fast feedback loops and daily check-ins.",
                },
                {
                  title: "Facebook Messenger",
                  desc: "Community updates and event reminders.",
                },
                {
                  title: "GitHub Discussions",
                  desc: "Deep technical threads and project planning.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 transition hover:border-blue-500/40"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs text-blue-400">Open</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
                </div>
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
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-10 px-6 py-16 md:flex-row md:items-center">
          <div className="flex-1">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Build
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Contribute to open-source projects.
            </h2>
            <p className="text-gray-300">
              Whether you’re just starting or already experienced, there’s a
              project that needs your contribution.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            {[
              "Starter-friendly issues",
              "Design + Dev collaboration",
              "Real-world product outcomes",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900/60 p-4"
              >
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <div className="text-sm text-gray-200">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen border-t border-gray-900">
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-10 px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
              <h3 className="text-xl font-semibold">
                Have an idea for an event or project?
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Pitch it. We back initiatives with people, resources, and
                visibility.
              </p>
              <button className="mt-4 rounded-xl bg-blue-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-400">
                Share Your Idea
              </button>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6">
              <h3 className="text-xl font-semibold">Share your knowledge.</h3>
              <p className="mt-2 text-sm text-gray-400">
                Publish tutorials, write blog posts, or host sessions. Become a
                voice people trust.
              </p>
              <button className="mt-4 rounded-xl border border-gray-700 px-4 py-2 text-xs font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white">
                Contribute Content
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
