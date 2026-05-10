"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { CourseChapter } from "@/lib/courses";

// -----------------------------------------------------------

export function CourseLayout({
  children,
  chapters,
  courseSlug,
}: {
  children: React.ReactNode;
  chapters: CourseChapter[];
  courseSlug: string;
}) {
  const pathname = usePathname();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
          gap: 3,
        }}
      >
        <Paper elevation={0} sx={{ p: 2, bgcolor: "transparent" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
            Chapters
          </Typography>

          <List disablePadding>
            {chapters.map((chapter) => (
              <ListItem
                key={chapter.slug}
                disablePadding
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <ListItemButton
                  component={Link}
                  href={`/courses/${courseSlug}/${chapter.slug}`}
                  selected={
                    pathname === `/courses/${courseSlug}/${chapter.slug}`
                  }
                  sx={{
                    borderRadius: 1,
                    "&.Mui-selected": { bgcolor: "action.focused" },
                    "&.Mui-selected:hover": { bgcolor: "action.focused" },
                  }}
                >
                  <ListItemText
                    primary={chapter.title}
                    slotProps={{
                      primary: { sx: { fontWeight: 500 } },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>

        <Box
          sx={{
            p: 2.5,
            borderRadius: 2,
            border: "1px dashed",
            borderColor: "divider",
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
}
