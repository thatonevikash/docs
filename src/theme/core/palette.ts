import COLORS from "./colors.json";

// -----------------------------------------------------------

const GREY = COLORS.grey;

const INFO = COLORS.info;
const ERROR = COLORS.error;
const SUCCESS = COLORS.success;
const WARNING = COLORS.warning;

const PURPLE = COLORS.purple;

// -----------------------------------------------------------

export const palette = {
  grey: GREY,
  info: INFO,
  error: ERROR,
  purple: PURPLE,
  success: SUCCESS,
  warning: WARNING,
};

// -----------------------------------------------------------

declare module "@mui/material/styles" {
  interface Palette {
    purple: Palette["primary"];
  }
  interface PaletteOptions {
    purple?: PaletteOptions["primary"];
  }
}
