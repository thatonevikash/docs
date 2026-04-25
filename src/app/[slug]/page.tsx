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

          // ── Alerts ──────────────────────────────────────────
          "& .alert": {
            borderRadius: 1.5,
            border: "1px solid",
            p: 2,
            my: 2.5,
            "& .alert-header": {
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              // mb: 1,
            },
            "& .alert-icon": { fontSize: "1rem", lineHeight: 1 },
            "& .alert-label": {
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            },
            "& p": { mb: 0, fontSize: "0.9rem", lineHeight: 1.7 },
          },

          "& .alert-note": {
            bgcolor: "rgba(9, 105, 218, 0.06)",
            borderColor: "rgba(9, 105, 218, 0.35)",
            "& .alert-label": { color: "#0969da" },
          },
          "& .alert-tip": {
            bgcolor: "rgba(26, 127, 55, 0.06)",
            borderColor: "rgba(26, 127, 55, 0.35)",
            "& .alert-label": { color: "#1a7f37" },
          },
          "& .alert-important": {
            bgcolor: "rgba(130, 80, 223, 0.06)",
            borderColor: "rgba(130, 80, 223, 0.35)",
            "& .alert-label": { color: "#8250df" },
          },
          "& .alert-warning": {
            bgcolor: "rgba(154, 103, 0, 0.06)",
            borderColor: "rgba(154, 103, 0, 0.35)",
            "& .alert-label": { color: "#9a6700" },
          },
          "& .alert-caution": {
            bgcolor: "rgba(207, 34, 46, 0.06)",
            borderColor: "rgba(207, 34, 46, 0.35)",
            "& .alert-label": { color: "#cf222e" },
          },
        }}
      />
    </Container>
  );
}
