"use client";

import Link from "next/link";
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import { CourseMetadata } from "@/lib/courses";

// -----------------------------------------------------------

export function CourseRootView({
  courses,
}: {
  courses: Omit<CourseMetadata, "banner" | "content">[];
}) {
  return (
    <Box sx={{ minHeight: "100dvh", bgcolor: "grey.200" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: "space-between",
            alignItems: { xs: "stretch", md: "flex-start" },
          }}
        >
          <>
            <Typography sx={{ typography: "h4" }}>
              /docs
              <Box component="span" sx={{ color: "text.secondary" }}>
                /courses
              </Box>
            </Typography>
          </>
        </Box>

        <Grid container spacing={3}>
          {courses.map((course) => (
            <Card
              key={course.slug}
              component={Grid}
              size={{ xs: 6, md: 4 }}
              sx={{ borderRadius: 6, overflow: "hidden" }}
            >
              <CardActionArea
                sx={{ p: 0 }}
                component={Link}
                href={`/courses/${course.slug}`}
                disabled={course.upcoming}
              >
                <Box
                  sx={[
                    {
                      p: 2.5,
                      minHeight: 160,
                      color: "common.white",
                      background: (theme) =>
                        `linear-gradient(135deg, ${course.rootColor || "#1f2937"} 5%, ${theme.vars.palette.grey[900]} 175%)`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    },
                    course.upcoming
                      ? {
                          background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.grey[400]} 5%, ${theme.vars.palette.grey[700]} 175%)`,
                          "& .course-logo": {
                            filter: "grayscale(100%)",
                          },
                        }
                      : {},
                  ]}
                >
                  {course.logo ? (
                    <Image
                      src={course.logo}
                      className="course-logo"
                      alt={`${course.title} logo`}
                      width={56}
                      height={56}
                    />
                  ) : (
                    <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                      📘
                    </Typography>
                  )}
                  <Box>
                    <Typography variant="h5">{course.title}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 0.8, color: "grey.300" }}
                    >
                      {course.description}
                    </Typography>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
