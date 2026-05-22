"use client";

import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

// -----------------------------------------------------------

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <Box
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: content }}
      sx={(theme) => ({
        "& img": { maxWidth: "100%" },
        "& code": { fontSize: "0.875rem" },

        // ── Pre Block ──────────────────────────────────────────
        "& pre": {
          borderRadius: 3,
          overflow: "auto",
          bgcolor: theme.palette.background.defaultChannel,
          border: `1px solid ${alpha(theme.palette.grey[700], 0.12)}`,

          "& code.hljs": {
            // color: "text.primary",
          },
        },

        // ── Table ──────────────────────────────────────────
        "& table": {
          my: 2,
          width: "100%",
          borderCollapse: "collapse",
        },
        "& th, & td": {
          px: 1,
          py: 0.75,
          border: "none",
        },
        "& th": {
          fontWeight: 600,
        },

        // ── Alerts ──────────────────────────────────────────
        "& .alert": {
          p: 2,
          my: 2.5,
          borderRadius: 4,
          border: "1px solid",
          "& .alert-header": {
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 0.75,
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
          bgcolor: alpha(theme.palette.info.main, 0.12),
          borderColor: alpha(theme.palette.info.main, 0.36),
          "& .alert-label": { color: theme.palette.info.main },
          "& .alert-icon-svg": { color: theme.palette.info.main },
        },
        "& .alert-tip": {
          bgcolor: alpha(theme.palette.success.main, 0.12),
          borderColor: alpha(theme.palette.success.main, 0.36),
          "& .alert-label": { color: theme.palette.success.main },
          "& .alert-icon-svg": { color: theme.palette.success.main },
        },
        "& .alert-important": {
          bgcolor: alpha(theme.palette.purple.main, 0.12),
          borderColor: alpha(theme.palette.purple.main, 0.36),
          "& .alert-label": { color: theme.palette.purple.main },
          "& .alert-icon-svg": { color: theme.palette.purple.main },
        },
        "& .alert-warning": {
          bgcolor: alpha(theme.palette.warning.main, 0.12),
          borderColor: alpha(theme.palette.warning.main, 0.36),
          "& .alert-label": { color: theme.palette.warning.main },
          "& .alert-icon-svg": { color: theme.palette.warning.main },
        },
        "& .alert-caution": {
          bgcolor: alpha(theme.palette.error.main, 0.12),
          borderColor: alpha(theme.palette.error.main, 0.36),
          "& .alert-label": { color: theme.palette.error.main },
          "& .alert-icon-svg": { color: theme.palette.error.main },
        },
      })}
    />
  );
}
