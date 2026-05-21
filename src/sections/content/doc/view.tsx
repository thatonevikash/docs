import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import XIcon from "@mui/icons-material/X";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Post } from "@/lib/posts";

import { MarkdownRenderer } from "@/components/markdown-renderer";

// -----------------------------------------------------------

export function DocContentView({ post }: { post: Post }) {
  return (
    <Box sx={{ minHeight: "100dvh", bgcolor: "grey.200" }}>
      <Container maxWidth="sm" sx={{ py: 3 }}>
        {/* ── Metadata card ── */}
        <MetadataCard post={post} />

        {/* ── Markdown content — untouched ── */}
        <MarkdownRenderer content={post.content} />
      </Container>
    </Box>
  );
}

// -----------------------------------------------------------

function MetadataCard({ post }: { post: Post }) {
  return (
    <Card
      sx={{
        p: 3,
        mb: 5,

        position: "relative",
        overflow: "hidden",
        // Same left accent bar from PostCard
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 8,
          bgcolor: "common.black",
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
      <Typography variant="h4" sx={{ mb: 2 }}>
        {post.title}
      </Typography>

      {/* Tags */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
        {post.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            variant="filled"
            sx={{
              bgcolor: "grey.300",
              color: "grey.800",
              fontSize: "0.8rem",
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
              fontSize: "0.8rem",
              fontWeight: 700,
              bgcolor: "common.black",
            }}
          >
            {post.author.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: "text.disabled",
                display: "block",
                lineHeight: 1,
              }}
            >
              Published by
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
                    color: "text.primary",
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
    </Card>
  );
}
