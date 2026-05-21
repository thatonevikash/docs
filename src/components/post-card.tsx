"use client";

import Link from "next/link";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import type { Post } from "@/lib/posts";

// -----------------------------------------------------------

interface PostCardProps {
  post: Omit<Post, "content" | "social">;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        borderColor: "divider",
        transition: "all 0.2s ease",
        position: "relative",
        overflow: "hidden",
        // Animated left accent bar
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 5,
          bgcolor: "common.black",
          transform: "scaleY(0)",
          transformOrigin: "bottom",
          transition: "transform 0.25s ease",
          borderRadius: "0 2px 2px 0",
        },
        "&:hover": {
          transform: "translateY(-4px)",
          "&::before": {
            transform: "scaleY(1)",
          },
          "& .arrow-icon": {
            opacity: 1,
            transform: "translate(0, 0)",
          },
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={`/${post.slug}`}
        sx={{
          flexGrow: 1,
          alignItems: "flex-start",
          display: "flex",
          // Remove default MUI ripple overlay on hover
          "& .MuiCardActionArea-focusHighlight": { opacity: 0 },
        }}
      >
        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            p: 3,
            "&:last-child": { pb: 0 },
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* Top row — date + arrow icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {post.date && (
              <Typography
                variant="caption"
                sx={{
                  color: "text.disabled",
                  letterSpacing: "0.04em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Typography>
            )}

            <ArrowOutwardIcon
              className="arrow-icon"
              sx={{
                fontSize: 16,
                color: "common.black",
                opacity: 0,
                transform: "translate(-4px, 4px)",
                transition: "all 0.2s ease",
                ml: "auto",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              typography: "h5",
            }}
          >
            {post.title}
          </Typography>

          {/* Description */}
          {post.description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.description}
            </Typography>
          )}

          {/* Tags */}

          {post.tags.length > 0 && (
            <Box sx={{ mt: 1.25, display: "flex", flexWrap: "wrap", gap: 1 }}>
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="filled"
                  sx={{
                    bgcolor: "grey.300",
                    color: "grey.800",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    border: "none",
                    "& .MuiChip-label": { px: 1 },
                  }}
                />
              ))}
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
