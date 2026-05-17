import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  extractHeadings,
  getAllPosts,
  getPostBySlug,
  PostEntry,
  PostHeading,
  slugify,
} from "@/lib/posts";
import BlogCard from "@/components/ui/BlogCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.data.title ?? "Blog Post",
    description: post.data.excerpt ?? "Read this blog post.",
    keywords: post.data.topics,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      type: "article",
      siteName: "Hall of Codes",
      locale: "en_US",
    },
    alternates: {
      canonical: `https://www.hallofcodes.org/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.excerpt,
    },
  };
}

/**
 * Table of Contents component that generates a list of links based on the headings in the blog post.
 *
 * @param headings - An array of Heading objects containing the level, text, and id for each heading in the blog post.
 * @returns A React component that renders the table of contents, or null if there are no headings.
 */
function TableOfContents({ headings }: { headings: PostHeading[] }) {
  if (!headings.length) return null;

  return (
    <aside className="hidden xl:block w-64 sticky top-24 self-start">
      <div className="text-sm font-semibold mb-3">On this page</div>

      <ul className="space-y-1 text-sm">
        {headings.map((h, i) => (
          <li
            key={i}
            style={{
              paddingLeft: `${(h.level - 1) * 12}px`,
            }}
          >
            <a
              href={`#${h.id}`}
              className=" hover:text-blue-500 transition-colors"
            >
              • {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  const posts = getAllPosts();
  if (!post) notFound();

  const { content, data } = post;

  const headings = extractHeadings(content);
  const estimatedReadingTime = Math.ceil(content.split(" ").length / 200);

  const components = {
    h1: (props: any) => {
      const id = slugify(props.children?.toString() || "");
      return <h1 id={id} {...props} />;
    },
    h2: (props: any) => {
      const id = slugify(props.children?.toString() || "");
      return <h2 id={id} {...props} />;
    },
    h3: (props: any) => {
      const id = slugify(props.children?.toString() || "");
      return <h3 id={id} {...props} />;
    },
    pre: (props: any) => <pre {...props} />,
    code: (props: any) => <CodeBlock {...props} />,
  };

  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center">
        <div className="flex gap-10 w-full max-w-6xl">
          <div className="prose prose-invert w-full max-w-none xl:max-w-prose p-4 md:p-8 flex-1 min-w-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-blue-500 transition-colors mb-4 no-underline"
            >
              <span>←</span> Back to blogs
            </Link>
            <h1 className="text-3xl font-bold text-white mb-4">{data.title}</h1>
            <div className="text-gray-400 mb-6">{data.excerpt}</div>

            <p className="text-sm text-muted-foreground">
              @{data.author} • {data.date} • {estimatedReadingTime} min read
            </p>

            {data.topics && data.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 my-4">
                {data.topics.map((topic: string, number: number) => (
                  <span
                    key={number}
                    className="inline-flex capitalize rounded-full border px-2.5 py-1 text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            <MDXRemote source={content} components={components} />
          </div>
        </div>

        <TableOfContents headings={headings} />
      </div>

      <div className="flex justify-center">
        <div className="p-10 gap-10 pt-10 w-full max-w-6xl">
          <h3 className="text-lg font-semibold mb-3">More posts</h3>

          {posts.length > 1 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {posts
                .filter((p) => p.slug !== slug)
                .slice(0, 4)
                .map((post: PostEntry, index: number) => (
                  <BlogCard key={index} post={post} />
                ))}
            </ul>
          ) : (
            <p className="text-gray-400">
              No other posts available. Consider contributing your own insights
              and experiences to our blog!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
