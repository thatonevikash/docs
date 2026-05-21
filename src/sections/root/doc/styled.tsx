import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// -----------------------------------------------------------

export const SearchWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5),
  display: "flex",
  gap: theme.spacing(0.5),
  alignItems: "center",
  borderRadius: 999,
  border: `2px solid ${theme.palette.divider}`,
  minWidth: 200,
  maxWidth: 240,
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
  fontSize: "0.8rem",
  "& input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 0.8,
  },
}));

// -----------------------------------------------------------

export const SearchHint = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.44, 0.8),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.grey[200],
  fontSize: "0.72rem",
  lineHeight: 1,
  fontWeight: 600,
}));

// -----------------------------------------------------------

export const SearchIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  // borderLeft: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.secondary,
}));
