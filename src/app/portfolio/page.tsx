import Image from "next/image";
import Link from "next/link";
import portfolio from "@/lib/portfolio";
import { Metadata } from "next";

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
    <main className="bg-gray-950 text-white mt-10">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300">
            Hall of Codes Portfolio
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Community profiles
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">
            Builders with real impact.
          </h1>
          <p className="max-w-2xl text-gray-300">
            Explore the people who drive Hall of Codes and the personal
            portfolios that show their craft.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.name}
              className="group flex flex-col rounded-2xl bg-gray-900/60 p-5 transition hover:bg-gray-900"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-xl">
                <Image
                  src={item.img_url}
                  alt={`${item.name} portfolio preview`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {item.name}
                  </h2>
                  <p className="text-xs text-blue-300">{item.title}</p>
                </div>

                <div className="rounded-lg bg-gray-950/60 px-2 py-1 text-right">
                  <div className="text-[10px] text-gray-400">
                    Contribution {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              <p className="mt-3 text-sm text-gray-300 line-clamp-3">
                {item.description}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-500"
                >
                  View Portfolio
                </Link>
              </div>
            </article>
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
