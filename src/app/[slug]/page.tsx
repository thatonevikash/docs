import { getAllSlugs, getPostBySlug } from "@/lib/posts";

import { fParam } from "@/utils/format-case";
import { DocContentView } from "@/sections/content/doc/view";

// -----------------------------------------------------------

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: `${fParam(slug)} - docs | thatonevikash`,
    description: post.description ?? "",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  return <DocContentView post={post} />;
}
