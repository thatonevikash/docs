import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";

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
            key={course.slug}
            sx={{ borderRadius: 3, overflow: "hidden" }}
          >
            <CardActionArea
              component={Link}
              href={`/courses/${course.slug}`}
              underline="none"
              sx={{ p: 0 }}
            >
              <Box
                sx={{
                  minHeight: 160,
                  p: 2.5,
                  color: "common.white",
                  background: `linear-gradient(135deg, ${course.rootColor || "#1f2937"} 0%, #0f172a 100%)`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {course.logo ? (
                  <Image
                    src={course.logo}
                    alt={`${course.title} logo`}
                    width={32}
                    height={32}
                  />
                ) : (
                  <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                    📘
                  </Typography>
                )}
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5 }}>
                    {course.description}
                  </Typography>
                </Box>
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
