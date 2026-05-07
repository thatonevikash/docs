import { getAllPosts } from "@/lib/posts";
import { Container } from "@mui/material";
import { DocsHomeClient } from "@/components/docs-home-client";

export default function Home() {
  const posts = getAllPosts();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <DocsHomeClient posts={posts} />
    </Container>
  );
}
