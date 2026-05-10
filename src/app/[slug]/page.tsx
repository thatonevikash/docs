import { getAllSlugs, getPostBySlug } from "@/lib/posts";

import { DocContentView } from "@/sections/content/doc/view";

// -----------------------------------------------------------

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  return <DocContentView post={post} />;
}
