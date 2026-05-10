"use client";

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

// -----------------------------------------------------------

const theme = createTheme({
  palette: { mode: "light" },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
  },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
