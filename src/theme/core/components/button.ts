import { Theme, Components } from "@mui/material";

import type {} from "@mui/material/themeCssVarsAugmentation";

// -----------------------------------------------------------

const MuiButton: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "unset",
      borderRadius: theme.spacing(1.5),
      color: theme.vars.palette.common.black,
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: theme.spacing(1.5),
            color: theme.vars.palette.common.white,
            backgroundColor: theme.vars.palette.grey[900],
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: theme.spacing(1.5),
            color: theme.vars.palette.common.black,
            borderColor: theme.vars.palette.common.black,
          },
        },
      ],
    }),
  },
};

export { MuiButton };
