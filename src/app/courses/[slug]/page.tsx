import { CourseContentView } from "@/sections/content/course/view";

import {
  getAllCourses,
  CourseMetadata,
  getCourseMetadataBySlug,
} from "@/lib/courses";

export async function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const metadata = (await getCourseMetadataBySlug(slug)) as CourseMetadata;

  return <CourseContentView metadata={metadata} />;
}
