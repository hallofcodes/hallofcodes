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
    <section className="mx-auto mt-10 max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
            Hall of Codes Journal
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-white md:text-5xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-gray-300">
            We share insights on software development, technology trends, and
            growth in the tech industry—crafted for builders.
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
    </section>
  );
}
