import { Theme, Components } from "@mui/material";

import type {} from "@mui/material/themeCssVarsAugmentation";

// -----------------------------------------------------------

const MuiTooltip: Components<Theme>["MuiTooltip"] = {
  styleOverrides: {
    tooltipArrow: ({ theme }) => ({
      borderRadius: theme.spacing(1.5),
      backgroundColor: theme.vars.palette.grey[900],
    }),
    arrow: ({ theme }) => ({
      borderRadius: theme.spacing(1),
      color: theme.vars.palette.grey[900],
    }),
  },
};

export { MuiTooltip };
