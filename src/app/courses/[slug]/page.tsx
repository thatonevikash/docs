import { notFound } from "next/navigation";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

import { getAllCourses, getCourseBySlug, getCourseChapters } from "@/lib/courses";

export async function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  const chapters = getCourseChapters(slug);

  if (!course) notFound();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          color: "common.white",
          background: `linear-gradient(135deg, ${course.rootColor || "#1f2937"} 0%, #0f172a 100%)`,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          {course.title}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, opacity: 0.9 }}>
          {course.description}
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
          gap: 3,
        }}
      >
        <Paper elevation={0} sx={{ p: 2, bgcolor: "transparent" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
            Chapters
          </Typography>

          <List disablePadding>
            {chapters.map((chapter) => (
              <ListItem
                key={chapter.slug}
                sx={{ px: 0, py: 1, borderBottom: "1px solid", borderColor: "divider" }}
              >
                <ListItemText
                  primary={chapter.title}
                  secondary={chapter.fileName}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Box sx={{ p: 2.5, borderRadius: 2, border: "1px dashed", borderColor: "divider" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Chapter content area
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Content rendering will be implemented in the next step.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
