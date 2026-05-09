import { notFound } from "next/navigation";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { getCourseBySlug } from "@/lib/courses";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

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
    </Container>
  );
}
