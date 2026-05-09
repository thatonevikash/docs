import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { paths } from "@/paths";

export interface CourseMetadata {
  title: string;
  description: string;
  logo: string | undefined;
  banner: string | undefined;
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
        title: data.title,
        description: data.description,
        logo: data.logo,
      };
    });
}
