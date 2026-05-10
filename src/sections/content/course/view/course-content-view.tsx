import Image from "next/image";

import Box from "@mui/material/Box";

import { CourseMetadata } from "@/lib/courses";

import { MarkdownRenderer } from "@/components/markdown-renderer";

// -----------------------------------------------------------

export function CourseContentView({ metadata }: { metadata: CourseMetadata }) {
  const bannerSrc = metadata.banner || "/docs/socials/preview.png";

  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          mb: 3,
          aspectRatio: "1200 / 460",
        }}
      >
        <Image src={bannerSrc} alt={`${metadata.title} banner`} fill priority />
      </Box>

      <MarkdownRenderer content={metadata.content} />
    </>
  );
}
