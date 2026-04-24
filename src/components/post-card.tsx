"use client";

import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Chip,
  Box,
  Avatar,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import type { Post } from "@/lib/posts";

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
        borderRadius: 2,
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
          width: 3,
          bgcolor: "primary.main",
          transform: "scaleY(0)",
          transformOrigin: "bottom",
          transition: "transform 0.25s ease",
          borderRadius: "0 2px 2px 0",
        },
        "&:hover": {
          borderColor: "primary.light",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transform: "translateY(-2px)",
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
            gap: 1.5,
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
                color: "primary.main",
                opacity: 0,
                transform: "translate(-4px, 4px)",
                transition: "all 0.2s ease",
                ml: "auto",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "1rem",
              lineHeight: 1.4,
              color: "text.primary",
              letterSpacing: "-0.01em",
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
                lineHeight: 1.6,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.description}
            </Typography>
          )}

          {/* Spacer pushes tags + author to bottom */}
          {/* <Box sx={{ flexGrow: 1 }} /> */}

          {/* Tags */}
          {post.tags.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
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
                    border: "none",
                    "& .MuiChip-label": { px: 1 },
                  }}
                />
              ))}
            </Box>
          )}

          <Box sx={{ flexGrow: 1 }} />

          {/* Author row */}
          {post.author && (
            <>
              <Box
                sx={{
                  height: "1px",
                  bgcolor: "divider",
                  mx: -3,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{
                    width: 22,
                    height: 22,
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    bgcolor: "primary.main",
                  }}
                >
                  {post.author.charAt(0).toUpperCase()}
                </Avatar>
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", fontWeight: 500 }}
                >
                  {post.author}
                </Typography>
              </Box>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
