"use client";

import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import Link from "next/link";
import type { Post } from "@/lib/posts";

interface PostCardProps {
  post: Omit<Post, "content">;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <CardActionArea
        component={Link}
        href={`/${post.slug}`}
        sx={{ flexGrow: 1, alignItems: "flex-start", display: "flex" }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }} gutterBottom>
            {post.title}
          </Typography>

          {post.description && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              {post.description}
            </Typography>
          )}

          {post.date && (
            <Typography
              variant="caption"
              color="text.disabled"
              sx={{ mb: 1.5, display: "block" }}
            >
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </Typography>
          )}

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {post.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
