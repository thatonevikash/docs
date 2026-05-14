import { notFound } from "next/navigation";

import {
  getAllCourses,
  getCourseChapters,
  getCourseChapterContentBySlug,
} from "@/lib/courses";

import { fParam } from "@/utils/format-case";
import { CourseChapterContentView } from "@/sections/content/course/view";

// -----------------------------------------------------------

interface PageProps {
  params: Promise<{ slug: string; chapter: string }>;
}

export async function generateStaticParams() {
  return getAllCourses().flatMap((course) =>
    getCourseChapters(course.slug).map((chapter) => ({
      slug: course.slug,
      chapter: chapter.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, chapter } = await params;

  const content = await getCourseChapterContentBySlug(slug, chapter);

  return {
    title: `${fParam(content?.title ?? "")} - ${fParam(slug)} | thatonevikash`,
    description: content?.description ?? "",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug, chapter } = await params;

  const chapterContent = await getCourseChapterContentBySlug(slug, chapter);

  if (!chapterContent) {
    notFound();
  }

  return <CourseChapterContentView chapter={chapterContent} />;
}
