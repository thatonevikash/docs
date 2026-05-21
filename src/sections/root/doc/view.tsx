"use client";

import {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
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
  const { ref: inputRef } = useKeyPress();

  const { query, onUpdateQuery, filteredPosts } = useSearchFilter(posts);

  return (
    <Box sx={{ minHeight: "100dvh", bgcolor: "grey.200" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
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
            <Typography sx={{ typography: "h4" }}>
              thatonevikash
              <Box component="span" sx={{ color: "text.secondary" }}>
                /docs
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Built for Developers 😼 - Web Development stuff and much more!
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SearchWrapper>
              <SearchIconBox>
                <SearchIcon sx={{ fontSize: "18px" }} />
              </SearchIconBox>
              <SearchInput
                inputRef={inputRef}
                placeholder="what is reactjs..."
                value={query}
                onChange={onUpdateQuery}
                inputProps={{ "aria-label": "search docs" }}
              />
              <SearchHint>press &apos;/&apos;</SearchHint>
            </SearchWrapper>

            <Button
              component={Link}
              href="/courses"
              variant="contained"
              sx={{ borderRadius: 6, py: 1.2 }}
              endIcon={<ArrowOutwardIcon sx={{ fontSize: "18px" }} />}
            >
              Courses
            </Button>
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
    </Box>
  );
}

// -----------------------------------------------------------

function useKeyPress() {
  const ref = useRef<HTMLInputElement | null>(null);

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
      ref.current?.focus();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return { ref };
}

// -----------------------------------------------------------

function useSearchFilter(posts: PostPreview[]) {
  const [query, setQuery] = useState("");

  const filteredPosts: PostPreview[] = useMemo(() => {
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

  const onUpdateQuery = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  return { query, onUpdateQuery, filteredPosts };
}
