import type { Root } from "hast";
import { visit } from "unist-util-visit";

const docsBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/docs";

function normalizeBasePath(basePath: string): string {
  if (!basePath || basePath === "/") return "";
  return basePath.startsWith("/") ? basePath.replace(/\/$/, "") : `/${basePath.replace(/\/$/, "")}`;
}

function isExternalOrFragment(src: string): boolean {
  return (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("//") ||
    src.startsWith("data:") ||
    src.startsWith("#")
  );
}

function withBasePath(src: string): string {
  const basePath = normalizeBasePath(docsBasePath);
  if (!basePath) return src;

  if (src === basePath || src.startsWith(`${basePath}/`)) {
    return src;
  }

  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }

  return `${basePath}/${src.replace(/^\.\//, "")}`;
}

export function rehypeNormalizeLocalImageSrc() {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "img") return;

      const src = node.properties?.src;
      if (typeof src !== "string") return;
      if (isExternalOrFragment(src)) return;

      node.properties.src = withBasePath(src);
    });
  };
}
