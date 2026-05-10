import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { paths } from "@/paths";

import { markdownParser } from "./markdown-parser";

// -----------------------------------------------------------

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  social: {
    github: string;
    linkedin: string;
    x: string;
  };
  content: string;
}

// -----------------------------------------------------------

// Used on the home page — no content needed
export function getAllPosts(): Omit<Post, "content" | "social">[] {
  const files = fs.readdirSync(paths.content);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const raw = fs.readFileSync(path.join(paths.content, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title,
        description: data.description,
        author: data.author,
        date: data.date,
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// -----------------------------------------------------------

// Used on the individual post page — parses markdown to HTML
export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(paths.content, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = await markdownParser(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    author: data.author ?? "",
    social: {
      github: data.social.github ?? "",
      linkedin: data.social.linkedin ?? "",
      x: data.social.x ?? "",
    },
    date: data.date ?? "",
    tags: data.tags ?? [],
    content,
  };
}

// -----------------------------------------------------------

// Needed for generateStaticParams in [slug]/page.tsx
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(paths.content)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}
