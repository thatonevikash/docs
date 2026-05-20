import { createTheme } from "@mui/material";

import { palette } from "./core/palette";
import { typography } from "./core/typography";
import { components } from "./core/components";

// -----------------------------------------------------------

const defaultFont = "var(--font-geist-sans), Arial, sans-serif";

export const theme = createTheme({
  cssVariables: true,

  palette: { mode: "light", ...palette },

  typography: {
    fontFamily: defaultFont,
    ...typography,
  },

  spacing: "8px",

  components,
});
