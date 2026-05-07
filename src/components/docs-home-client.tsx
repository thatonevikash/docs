"use client";

import { useMemo, useState } from "react";
import { Box, Grid, InputBase, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { PostCard } from "@/components/post-card";
import type { Post } from "@/lib/posts";

type PostPreview = Omit<Post, "content" | "social">;

interface DocsHomeClientProps {
  posts: PostPreview[];
}

const SearchWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: 999,
  border: `1px solid ${theme.palette.divider}`,
  minWidth: 280,
  maxWidth: 420,
  width: "100%",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1.1, 1.8),
  fontSize: "0.92rem",
}));

const SearchIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 42,
  height: 42,
  borderLeft: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.secondary,
}));

export function DocsHomeClient({ posts }: DocsHomeClientProps) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return posts;
    }

    return posts.filter((post) => {
      const inTitle = post.title?.toLowerCase().includes(searchTerm);
      const inDescription = post.description
        ?.toLowerCase()
        .includes(searchTerm);
      const inTags = post.tags.some((tag) => tag.toLowerCase().includes(searchTerm));

      return inTitle || inDescription || inTags;
    });
  }, [posts, query]);

  return (
    <>
      <Box
        sx={{
          mb: 5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "flex-start" },
        }}
      >
        <Box>
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

        <SearchWrapper>
          <SearchInput
            placeholder="Search docs by title, tags, or description"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            inputProps={{ "aria-label": "search docs" }}
          />
          <SearchIconBox>
            <SearchIcon fontSize="small" />
          </SearchIconBox>
        </SearchWrapper>
      </Box>

      <Grid container spacing={3}>
        {filteredPosts.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.slug}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
