import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { Container, Typography, Box, Chip } from "@mui/material";
import "highlight.js/styles/github.css"; // code block theme
import "github-markdown-css/github-markdown.css"; // prose styles

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Required for Next.js static export — generates all routes at build time
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={500} gutterBottom>
          {post.title}
        </Typography>

        {post.date && (
          <Typography
            variant="caption"
            color="text.disabled"
            display="block"
            sx={{ mb: 1.5 }}
          >
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        )}

        <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Box>
      </Box>

      {/* Markdown content — github-markdown-css styles this */}
      <Box
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        sx={{
          "& pre": { borderRadius: 1, overflow: "auto" },
          "& code": { fontSize: "0.875rem" },
          "& img": { maxWidth: "100%" },
        }}
      />
    </Container>
  );
}
