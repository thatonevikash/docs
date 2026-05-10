import { notFound } from "next/navigation";

import {
  getAllCourses,
  getCourseChapters,
  getCourseChapterContentBySlug,
} from "@/lib/courses";

import { CourseChapterContentView } from "@/sections/content/course/view";

// -----------------------------------------------------------

export async function generateStaticParams() {
  return getAllCourses().flatMap((course) =>
    getCourseChapters(course.slug).map((chapter) => ({
      slug: course.slug,
      chapter: chapter.slug,
    })),
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; chapter: string }>;
}) {
  const { slug, chapter } = await params;
  const chapterContent = await getCourseChapterContentBySlug(slug, chapter);

  if (!chapterContent) {
    notFound();
  }

  return <CourseChapterContentView chapter={chapterContent} />;
}
