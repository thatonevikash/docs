import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { CourseMetadata } from "@/lib/courses";

export function CourseRootView({
  courses,
}: {
  courses: Omit<CourseMetadata, "banner">[];
}) {
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
            /docs
            <Box component="span" sx={{ color: "text.secondary" }}>
              /courses
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Built for Developers 😼 - Web Development Stuff and much more!
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Card
            component={Grid}
            size={{ xs: 6, md: 4 }}
            key={course.title}
            sx={{ p: 2, borderRadius: 3 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              {course.title}
            </Typography>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
