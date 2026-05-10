import BlogCard from "@/components/ui/BlogCard";
import { getAllPosts, PostEntry } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

const POSTS_PER_PAGE = 12;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const rawPage = Number(sp?.page ?? "1");
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  return {
    title: `Blog - Page ${page}`,
    description: `Browse our blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry. Page ${page}.`,
    keywords: ["blog", "software development", "technology", "personal growth"],
    openGraph: {
      title: `Blog - Page ${page}`,
      description: `Browse our blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry. Page ${page}.`,
      type: "website",
      siteName: "Hall of Codes",
      locale: "en_US",
    },
    alternates: {
      canonical: `https://hallofcodes.vercel.app/blog?page=${page}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog - Page ${page}`,
      description: `Browse our blog posts, insights, and experiences on software development, technology trends, and personal growth in the tech industry. Page ${page}.`,
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const rawPage = Number(sp?.page ?? "1");
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  const posts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, end);

  return (
    <main className="bg-gray-950 text-white mt-10">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_20%,rgba(37,99,235,0.25),transparent_60%),radial-gradient(50%_50%_at_80%_10%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />

        <div className="relative mx-auto flex min-h-screen max-w-screen-xl flex-col items-start justify-center gap-8 px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold text-blue-300">
            Hall of Codes Blog
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Fresh insights
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Stories from the build.
            <span className="block text-blue-400">Read, learn, and grow.</span>
          </h1>
          <p className="max-w-2xl text-base text-gray-300 md:text-lg">
            We share insights on software development, technology trends, and
            growth in the tech industry—crafted for builders.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Join the Community
            </button>
            <button className="rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white">
              Explore Events
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-screen border-t border-gray-900">
        <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center gap-10 px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Blogs
              </div>
              <h2 className="text-3xl font-bold md:text-4xl">
                Real stories. Real insights.
              </h2>
              <p className="max-w-2xl text-gray-300">
                Dive into our members' experiences, lessons learned, and
                thoughts on software development, technology, and personal
                growth.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {paginatedPosts.map((post: PostEntry, index: number) => (
              <BlogCard key={index} post={post} />
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between border-t border-gray-800 pt-6 text-sm">
            {safePage > 1 ? (
              <Link
                href={`/blog?page=${safePage - 1}`}
                className="rounded-lg border border-gray-700 px-4 py-2 text-gray-200 transition hover:border-gray-500 hover:text-white"
              >
                ← Previous
              </Link>
            ) : (
              <span />
            )}
            <span className="text-gray-500">
              Page {safePage} of {totalPages}
            </span>
            {safePage < totalPages ? (
              <Link
                href={`/blog?page=${safePage + 1}`}
                className="rounded-lg border border-gray-700 px-4 py-2 text-gray-200 transition hover:border-gray-500 hover:text-white"
              >
                Next →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
