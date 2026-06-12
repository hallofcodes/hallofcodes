import Image from "next/image";
import Link from "next/link";
import portfolio from "@/lib/portfolio";
import { Metadata } from "next";
import PortfolioCard from "@/components/ui/PortfolioCard";

export const metadata: Metadata = {
  title: "Portfolio - Hall of Codes",
  description:
    "Meet the people behind Hall of Codes and explore their personal portfolios.",
  alternates: {
    canonical: "https://www.hallofcodes.org/portfolio",
  },
  openGraph: {
    title: "Portfolio - Hall of Codes",
    description:
      "Meet the people behind Hall of Codes and explore their personal portfolios.",
    url: "https://www.hallofcodes.org/portfolio",
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
    title: "Portfolio - Hall of Codes",
    description:
      "Meet the people behind Hall of Codes and explore their personal portfolios.",
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

export default function Portfolio() {
  const portfolioItems = portfolio;

  return (
    <main className="bg-gray-950 text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

        <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col items-start justify-center gap-8 px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300">
            Hall of Codes Portfolio
          </div>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            The people behind the build.
            <span className="block text-blue-400">Meet their portfolios.</span>
          </h1>
          <p className="max-w-2xl text-base text-gray-300 md:text-lg">
            Explore the people who drive Hall of Codes and the personal
            portfolios that show their craft.
          </p>
        </div>
      </section>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300">
            Portfolio
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">
            Builders with real impact.
          </h1>
          <p className="max-w-2xl text-gray-300">
            The portfolio showcases the builders who contribute to Hall of
            Codes, highlighting their work and impact.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((portfolioItem, index) => (
            <PortfolioCard
              key={index}
              portfolioItem={portfolioItem}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-800/60 bg-gray-900/50 p-6 shadow-sm">
          <div className="inline md:flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Portfolio originality criteria
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                To maintain a credible, high‑quality showcase, submissions must
                reflect original work and clear ownership.
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
      </section>
    </main>
  );
}
