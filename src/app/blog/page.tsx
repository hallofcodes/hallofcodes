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
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Blog
      </h1>
      <div className="text-gray-500 dark:text-gray-400 mb-12">
        We share our insights, experiences, and knowledge on software
        development, technology trends, and personal growth in the tech
        industry. Explore our latest articles and join the conversation!
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {paginatedPosts.map((post: PostEntry, index: number) => (
          <BlogCard key={index} post={post} />
        ))}
      </ul>

      <div className="flex gap-4 mt-6">
        {safePage > 1 && (
          <Link href={`/blog?page=${safePage - 1}`}>← Prev</Link>
        )}
        {safePage < totalPages && (
          <Link href={`/blog?page=${safePage + 1}`}>Next →</Link>
        )}
      </div>
    </div>
  );
}
