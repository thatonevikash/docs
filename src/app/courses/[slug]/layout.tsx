import { getAllCourses, getCourseChapters } from "@/lib/courses";
import { CourseLayout } from "@/sections/content/course/layout";

export async function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapters = getCourseChapters(slug);

  return (
    <CourseLayout chapters={chapters} courseSlug={slug}>
      {children}
    </CourseLayout>
  );
}
