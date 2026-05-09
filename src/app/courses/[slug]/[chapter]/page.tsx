import { notFound } from "next/navigation";

import { CourseChapterContentView } from "@/sections/content/course/view";

import { getCourseChapterContentBySlug } from "@/lib/courses";

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
