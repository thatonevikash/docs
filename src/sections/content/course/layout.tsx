"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import { CourseChapter } from "@/lib/courses";

// -----------------------------------------------------------

interface CourseLayoutProps {
  courseSlug: string;
  children: React.ReactNode;
  chapters: CourseChapter[];
}

export function CourseLayout({
  children,
  chapters,
  courseSlug,
}: CourseLayoutProps) {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        bgcolor: "grey.200",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
        gap: 2,
      }}
    >
      <Box
        sx={(theme) => ({
          p: 2,
          bgcolor: "grey.50",
          boxShadow: theme.shadows[1],
        })}
      >
        <List disablePadding>
          {chapters.map((chapter) => (
            <ListItem disablePadding key={chapter.slug}>
              <ListItemButton
                component={Link}
                href={`/courses/${courseSlug}/${chapter.slug}`}
                selected={pathname === `/courses/${courseSlug}/${chapter.slug}`}
                sx={[
                  {
                    borderRadius: 2,
                    "&.Mui-selected": { bgcolor: "action.focused" },
                    "&.Mui-selected:hover": { bgcolor: "action.focused" },

                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  },
                ]}
              >
                <>
                  <PlayArrowRoundedIcon />
                </>
                <ListItemText
                  primary={chapter.title}
                  slotProps={{
                    primary: { sx: { fontWeight: 500, typography: "h6" } },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Box sx={{ px: 4 }}>{children}</Box>
      </Container>
    </Box>
  );
}
