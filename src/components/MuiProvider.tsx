"use client";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: { mode: "light" },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    code: {
      fontFamily: "var(--font-geist-mono), monospace",
    },
  },
});

export function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
