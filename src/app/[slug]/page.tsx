import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import {
  Container,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
  Divider,
  Avatar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import "highlight.js/styles/github.css";
import "github-markdown-css/github-markdown.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      {/* ── Metadata card ── */}
      <Box
        sx={{
          position: "relative",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          p: 3,
          mb: 5,
          overflow: "hidden",
          // Same left accent bar from PostCard
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            bgcolor: "primary.main",
            borderRadius: "0 2px 2px 0",
          },
        }}
      >
        {/* Date */}
        {post.date && (
          <Typography
            variant="caption"
            sx={{
              color: "text.disabled",
              letterSpacing: "0.04em",
              fontVariantNumeric: "tabular-nums",
              display: "block",
              mb: 1.5,
            }}
          >
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        )}

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          {post.title}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap", mb: 3 }}>
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="filled"
              sx={{
                bgcolor: "action.hover",
                color: "text.secondary",
                fontSize: "0.7rem",
                height: 22,
                fontWeight: 500,
                "& .MuiChip-label": { px: 1 },
              }}
            />
          ))}
        </Box>

        {/* Full-bleed divider — breaks out of padding */}
        <Divider sx={{ mx: -3, mb: 2.5 }} />

        {/* Author + socials */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Avatar + name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar
              sx={{
                width: 28,
                height: 28,
                fontSize: "0.7rem",
                fontWeight: 700,
                bgcolor: "primary.main",
              }}
            >
              {post.author.charAt(0).toUpperCase()}
            </Avatar>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "text.disabled", display: "block", lineHeight: 1 }}
              >
                Written by
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, lineHeight: 1.4 }}
              >
                {post.author}
              </Typography>
            </Box>
          </Box>

          {/* Social icons */}
          <Box sx={{ display: "flex", gap: 0.25 }}>
            {post.social?.github && (
              <Tooltip title="GitHub" arrow>
                <IconButton
                  size="small"
                  component="a"
                  href={post.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.15s ease, transform 0.15s ease",
                    "&:hover": {
                      color: "text.primary",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            )}

            {post.social?.linkedin && (
              <Tooltip title="LinkedIn" arrow>
                <IconButton
                  size="small"
                  component="a"
                  href={post.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.15s ease, transform 0.15s ease",
                    "&:hover": {
                      color: "#0A66C2",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            )}

            {post.social?.x && (
              <Tooltip title="X (Twitter)" arrow>
                <IconButton
                  size="small"
                  component="a"
                  href={post.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X profile"
                  sx={{
                    color: "text.secondary",
                    transition: "color 0.15s ease, transform 0.15s ease",
                    "&:hover": {
                      color: "text.primary",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  <XIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Box>
      </Box>

      {/* ── Markdown content — untouched ── */}
      <Box
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.content }}
        sx={{
          "& pre": { borderRadius: 1, overflow: "auto" },
          "& code": { fontSize: "0.875rem" },
          "& img": { maxWidth: "100%" },
        }}
      />
    </Container>
  );
}
