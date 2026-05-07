"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  maxWidth: 460,
  width: "100%",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.2s ease",
  boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
  "&:hover": {
    borderColor: theme.palette.action.active,
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
  },
  "&:focus-within": {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}22`,
  },
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1.15, 1.9),
  fontSize: "0.92rem",
  "& input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 0.9,
  },
}));

const SearchHint = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.35, 0.7),
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.secondary,
  fontSize: "0.72rem",
  lineHeight: 1,
  fontWeight: 600,
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/") {
        return;
      }

      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (isTypingTarget) {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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
            inputRef={inputRef}
            placeholder="Search docs by title, tags, or description"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            inputProps={{ "aria-label": "search docs" }}
          />
          <SearchHint>/</SearchHint>
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
