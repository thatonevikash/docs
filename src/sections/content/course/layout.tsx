import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

import { CourseChapter } from "@/lib/courses";

export function CourseLayout({
  children,
  chapters,
}: {
  children: React.ReactNode;
  chapters: CourseChapter[];
}) {
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
                sx={{
                  px: 0,
                  py: 1,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <ListItemText
                  primary={chapter.title}
                  slotProps={{
                    primary: { sx: { fontWeight: 500 } },
                  }}
                />
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
