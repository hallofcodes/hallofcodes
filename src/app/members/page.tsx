import MemberCard from "@/components/ui/MemberCard";
import { getMembers, Member } from "@/lib/github/members";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Members - Hall of Codes",
  description: "Meet the talented individuals who make up our community.",
  alternates: {
    canonical: "https://www.hallofcodes.org/members",
  },
  openGraph: {
    title: "Our Members - Hall of Codes",
    description: "Meet the talented individuals who make up our community.",
    url: "https://www.hallofcodes.org/members",
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
    title: "Our Members - Hall of Codes",
    description: "Meet the talented individuals who make up our community.",
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

export default async function Members() {
  const members = await getMembers();
  const memberCount = members.length;

  return (
    <main className="bg-gray-950 text-white mt-10">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

        <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col items-start justify-center gap-8 px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300">
            Hall of Codes Members
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Growing network
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            The people behind the build.
            <span className="block text-blue-400">Meet the community.</span>
          </h1>
          <p className="max-w-2xl text-base text-gray-300 md:text-lg">
            We’re a diverse, high-impact group of builders, mentors, and
            collaborators shaping real projects together.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/hallofcodes/join"
              className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              Join the Network
            </Link>
            <Link
              href="https://github.com/hallofcodes?tab=repositories"
              className="rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white"
            >
              Become a Contributor
            </Link>
          </div>

          <div className="mt-8 grid w-full grid-cols-2 gap-4 text-sm text-gray-300 md:grid-cols-4">
            {[
              { label: "Members", value: `${memberCount}+` },
              { label: "Active", value: "5+" },
              { label: "Mentors", value: "6+" },
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
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-10 px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Community
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Our members are the power source.
              </h2>
              <p className="max-w-2xl text-gray-300">
                Designers, developers, and tech leaders collaborating across
                projects, learning streams, and open-source initiatives.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Developers", "Designers", "Mentors"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1 text-xs text-gray-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {members.map((member: Member, index: number) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
