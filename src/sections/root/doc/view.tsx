"use client";

import { useRef, useMemo, useState, useEffect } from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ButtonBase } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import type { Post } from "@/lib/posts";

import { PostCard } from "@/components/post-card";

import {
  SearchHint,
  SearchInput,
  SearchIconBox,
  SearchWrapper,
} from "./styled";

// -----------------------------------------------------------

type PostPreview = Omit<Post, "content" | "social">;

interface DocRootViewProps {
  posts: PostPreview[];
}

// -----------------------------------------------------------

export function DocRootView({ posts }: DocRootViewProps) {
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
      const inTags = post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm),
      );

      return inTitle || inDescription || inTags;
    });
  }, [posts, query]);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
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

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <SearchWrapper>
            <SearchInput
              inputRef={inputRef}
              placeholder="what is reactjs..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              inputProps={{ "aria-label": "search docs" }}
            />
            <SearchHint>/</SearchHint>
            <SearchIconBox>
              <SearchIcon fontSize="small" />
            </SearchIconBox>
          </SearchWrapper>

          <ButtonBase
            component={Link}
            href="/courses"
            sx={{
              fontSize: "0.9rem",
              borderRadius: 8,
              px: 3,
              py: 1.5,
              bgcolor: "common.black",
              color: "common.white",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Typography component="span" sx={{ fontSize: "inherit" }}>
              Courses
            </Typography>
            <ArrowOutwardIcon sx={{ fontSize: "18px" }} />
          </ButtonBase>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {filteredPosts.map((post) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.slug}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
