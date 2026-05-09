import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

import { rehypeAlerts } from "@/extensions/rehype-alerts";
import { rehypeNormalizeLocalImageSrc } from "@/extensions/rehype-normalize-local-image-src";

import { normalizeMarkdownTables } from "./normalize-markdown-tables";

export async function markdownParser(raw: string) {
  const { data, content } = matter(raw);
  const normalizedContent = normalizeMarkdownTables(content);

  const processed = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeAlerts)
    .use(rehypeNormalizeLocalImageSrc)
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(normalizedContent);

  return {
    data,
    content: processed.toString(),
  };
}
