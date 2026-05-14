import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { paths } from "@/paths";

import { markdownParser } from "./markdown-parser";
import { normalizeLocalAssetSrc } from "./normalize-local-asset-src";

// -----------------------------------------------------------

export interface CourseMetadata {
  slug: string;
  title: string;
  description: string;
  logo: string | undefined;
  banner: string | undefined;
  rootColor: string | undefined;
  content: string;
}

export interface CourseChapter {
  slug: string;
  fileName: string;
  title: string;
}

export interface CourseChapterContent {
  slug: string;
  title: string;
  content: string;
  description: string;
}

// -----------------------------------------------------------

export function getAllCourses(): Omit<CourseMetadata, "banner" | "content">[] {
  const courses = fs.readdirSync(paths.courses);

  return courses
    .filter((c) => !c.endsWith(".md"))
    .map((dirname) => {
      const raw = fs.readFileSync(
        path.join(paths.courses, dirname, "metadata.md"),
        "utf-8",
      );
      const { data } = matter(raw);

      return {
        slug: dirname,
        title: data.title,
        description: data.description,
        logo: normalizeLocalAssetSrc(data.logo),
        rootColor: data.rootColor,
      };
    });
}

// -----------------------------------------------------------

export async function getCourseMetadataBySlug(
  slug: string,
): Promise<CourseMetadata | null> {
  const metadataPath = path.join(paths.courses, slug, "metadata.md");

  if (!fs.existsSync(metadataPath)) return null;

  const raw = fs.readFileSync(metadataPath, "utf-8");
  const { data, content } = await markdownParser(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    logo: normalizeLocalAssetSrc(data.logo),
    banner: data.banner,
    rootColor: data.rootColor,
    content,
  };
}

// -----------------------------------------------------------

export function getCourseChapters(slug: string): CourseChapter[] {
  const coursePath = path.join(paths.courses, slug);

  if (!fs.existsSync(coursePath)) return [];

  return fs
    .readdirSync(coursePath)
    .filter((fileName) => /^\d+_.+\.md$/i.test(fileName))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((fileName) => {
      const chapterPath = path.join(coursePath, fileName);
      const raw = fs.readFileSync(chapterPath, "utf-8");
      const { data } = matter(raw);

      return {
        slug: fileName.replace(/\.md$/i, ""),
        fileName,
        title: data.title || fileName.replace(/\.md$/i, ""),
      };
    });
}

// -----------------------------------------------------------

export async function getCourseChapterContentBySlug(
  courseSlug: string,
  chapterSlug: string,
): Promise<CourseChapterContent | null> {
  const chapterPath = path.join(paths.courses, courseSlug, `${chapterSlug}.md`);

  if (!fs.existsSync(chapterPath)) return null;

  const raw = fs.readFileSync(chapterPath, "utf-8");
  const { data, content } = await markdownParser(raw);

  return {
    slug: chapterSlug,
    title: data.title,
    description: data.description,
    content,
  };
}
