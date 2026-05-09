const docsBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/docs";

function normalizeBasePath(basePath: string): string {
  if (!basePath || basePath === "/") return "";
  return basePath.startsWith("/")
    ? basePath.replace(/\/$/, "")
    : `/${basePath.replace(/\/$/, "")}`;
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

export function normalizeLocalAssetSrc(src?: string): string | undefined {
  if (!src) return undefined;
  if (isExternalOrFragment(src)) return src;

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
