import { CourseChapterContent } from "@/lib/courses";

import { MarkdownRenderer } from "@/components/markdown-renderer";

export function CourseChapterContentView({
  chapter,
}: {
  chapter: CourseChapterContent;
}) {
  return <MarkdownRenderer content={chapter.content} />;
}
