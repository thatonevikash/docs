import {
  getAllCourses,
  CourseMetadata,
  getCourseMetadataBySlug,
} from "@/lib/courses";

import { fParam } from "@/utils/format-case";
import { CourseContentView } from "@/sections/content/course/view";

// -----------------------------------------------------------

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const metadata = (await getCourseMetadataBySlug(slug)) as CourseMetadata;

  return {
    title: `${fParam(slug)} - course | thatonevikash`,
    description: metadata.description ?? "",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const metadata = (await getCourseMetadataBySlug(slug)) as CourseMetadata;

  return <CourseContentView metadata={metadata} />;
}
