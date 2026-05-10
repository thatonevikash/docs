import { getAllPosts } from "@/lib/posts";

import { DocRootView } from "@/sections/root/doc/view";

// -----------------------------------------------------------

export default function Home() {
  const posts = getAllPosts();

  return <DocRootView posts={posts} />;
}
