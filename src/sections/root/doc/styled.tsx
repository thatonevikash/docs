import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// -----------------------------------------------------------

export const SearchWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: 999,
  border: `1px solid ${theme.palette.divider}`,
  minWidth: 280,
  maxWidth: 200,
  width: "100%",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  transition: "all 0.2s ease",
  boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
  "&:hover": {
    borderColor: theme.palette.action.active,
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
  },
  "&:focus-within": {
    borderColor: theme.palette.common.black,
    boxShadow: `0 0 0 3px ${theme.palette.common.black}22`,
  },
}));

// -----------------------------------------------------------

export const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1.15, 1.9),
  fontSize: "0.92rem",
  "& input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 0.9,
  },
}));

// -----------------------------------------------------------

export const SearchHint = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.35, 0.7),
  borderRadius: 8,
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.secondary,
  fontSize: "0.72rem",
  lineHeight: 1,
  fontWeight: 600,
}));

// -----------------------------------------------------------

export const SearchIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 42,
  height: 42,
  borderLeft: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.secondary,
}));
