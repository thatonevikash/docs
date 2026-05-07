import type { Root } from "hast";
import { visit } from "unist-util-visit";

function shouldKeepOriginalSrc(src: string): boolean {
  return (
    src.startsWith("/") ||
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("//") ||
    src.startsWith("data:") ||
    src.startsWith("#")
  );
}

export function rehypeNormalizeLocalImageSrc() {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "img") return;

      const src = node.properties?.src;
      if (typeof src !== "string") return;
      if (shouldKeepOriginalSrc(src)) return;

      node.properties.src = `/${src.replace(/^\.\//, "")}`;
    });
  };
}
