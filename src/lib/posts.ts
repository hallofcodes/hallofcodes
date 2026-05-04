import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type PostEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  topics: string[];
  author: string;
};

export type Post = {
  content: string;
  data: PostEntry;
};

export type PostHeading = {
  level: number;
  text: string;
  id: string;
};

export function getAllPosts(): PostEntry[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      topics: data.topics,
      author: data.author,
    };
  });

  // Sort newest → oldest
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getRecentPosts(limit = 5) {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string): Post | null {
  try {
    if (!slug || slug.includes("/") || slug.includes("\\")) return null;

    const filePath = path.join(
      process.cwd(),
      "src/content/blog",
      `${slug}.mdx`,
    );

    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);

    return { content, data: data as Post["data"] };
  } catch {
    return null;
  }
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(content: string): PostHeading[] {
  const regex = /^(#{1,3})\s+(.*)$/gm;
  const headings: PostHeading[] = [];

  let match;
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();

    headings.push({
      level,
      text,
      id: slugify(text),
    });
  }

  return headings;
}
