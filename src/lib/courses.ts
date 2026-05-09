import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { paths } from "@/paths";

import { normalizeLocalAssetSrc } from "./normalize-local-asset-src";

export interface CourseMetadata {
  slug: string;
  title: string;
  description: string;
  logo: string | undefined;
  banner: string | undefined;
  rootColor: string | undefined;
}

export function getAllCourses(): Omit<CourseMetadata, "banner">[] {
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

export function getCourseBySlug(slug: string): CourseMetadata | null {
  const metadataPath = path.join(paths.courses, slug, "metadata.md");

  if (!fs.existsSync(metadataPath)) return null;

  const raw = fs.readFileSync(metadataPath, "utf-8");
  const { data } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    logo: normalizeLocalAssetSrc(data.logo),
    banner: data.banner,
    rootColor: data.rootColor,
  };
}
