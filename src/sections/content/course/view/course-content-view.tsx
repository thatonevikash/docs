import { CourseMetadata } from "@/lib/courses";

import { MarkdownRenderer } from "@/components/markdown-renderer";

export function CourseContentView({ metadata }: { metadata: CourseMetadata }) {
  return <MarkdownRenderer content={metadata.content} />;
}
