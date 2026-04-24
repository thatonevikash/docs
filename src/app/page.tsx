import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { Container, Grid, Typography, Box } from "@mui/material";

export default function Home() {
  const posts = getAllPosts();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
          thatonevikash
          <Box component="span" sx={{ color: "text.secondary" }}>
            /docs
          </Box>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Built for Developers 😼 - Web Development Stuff and much more!
        </Typography>
      </Box>

      {/* MUI v9 Grid — use size prop, not xs/sm/md */}
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.slug}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
