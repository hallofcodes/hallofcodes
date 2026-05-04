import { PostEntry } from "@/lib/posts";
import Link from "next/link";

export default function BlogCard({ post }: { post: PostEntry }) {
  return (
    <li className="group" data-aos="fade-up">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col items-start gap-4 bg-gray-900 rounded-xl p-4 shadow-sm hover:shadow-lg border border-gray-800 transition-all"
      >
        <div className="flex w-full justify-between gap-3 mb-3">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="inline-flex capitalize rounded-full border px-2.5 py-1 text-xs">
              {post.topics?.[0] ?? "general"}
            </span>
            <p className="hidden md:inline-block text-xs md:text-sm">{post.date}</p>
          </div>

          <span className="text-sm">@{post.author}</span>
        </div>

        <h2 className="text-lg md:text-xl font-semibold leading-snug mb-2 group-hover:text-blue-500 transition-colors">
          {post.title}
        </h2>

        <p className="text-sm md:text-base line-clamp-3" title={post.excerpt}>
          {post.excerpt}
        </p>

        <div className="mt-5 inline-flex items-center text-sm font-medium text-blue-400">
          Read article
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </Link>
    </li>
  );
}
