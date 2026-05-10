import Box from "@mui/material/Box";

// -----------------------------------------------------------

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <Box
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: content }}
      sx={{
        "& pre": { borderRadius: 1, overflow: "auto" },
        "& code": { fontSize: "0.875rem" },
        "& img": { maxWidth: "100%" },
        "& table": {
          width: "100%",
          borderCollapse: "collapse",
          my: 2,
        },
        "& th, & td": {
          border: "none",
          py: 0.75,
          px: 1,
        },
        "& th": {
          fontWeight: 600,
        },

        // ── Alerts ──────────────────────────────────────────
        "& .alert": {
          borderRadius: 1.5,
          border: "1px solid",
          p: 2,
          my: 2.5,
          "& .alert-header": {
            display: "flex",
            alignItems: "center",
            gap: 0.75,
            mb: 1,
          },
          "& .alert-icon": { fontSize: "1rem", lineHeight: 1 },
          "& .alert-label": {
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
          },
          "& p": { mb: 0, fontSize: "0.9rem", lineHeight: 1.7 },
        },

        "& .alert-note": {
          bgcolor: "rgba(9, 105, 218, 0.06)",
          borderColor: "rgba(9, 105, 218, 0.35)",
          "& .alert-label": { color: "#0969da" },
          "& .alert-icon-svg": { color: "#0969da" },
        },
        "& .alert-tip": {
          bgcolor: "rgba(26, 127, 55, 0.06)",
          borderColor: "rgba(26, 127, 55, 0.35)",
          "& .alert-label": { color: "#1a7f37" },
          "& .alert-icon-svg": { color: "#1a7f37" },
        },
        "& .alert-important": {
          bgcolor: "rgba(130, 80, 223, 0.06)",
          borderColor: "rgba(130, 80, 223, 0.35)",
          "& .alert-label": { color: "#8250df" },
          "& .alert-icon-svg": { color: "#8250df" },
        },
        "& .alert-warning": {
          bgcolor: "rgba(154, 103, 0, 0.06)",
          borderColor: "rgba(154, 103, 0, 0.35)",
          "& .alert-label": { color: "#9a6700" },
          "& .alert-icon-svg": { color: "#9a6700" },
        },
        "& .alert-caution": {
          bgcolor: "rgba(207, 34, 46, 0.06)",
          borderColor: "rgba(207, 34, 46, 0.35)",
          "& .alert-label": { color: "#cf222e" },
          "& .alert-icon-svg": { color: "#cf222e" },
        },
      }}
    />
  );
}
