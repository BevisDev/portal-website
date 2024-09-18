import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  PaletteMode,
  styled,
} from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { getCustomTheme } from "./GetTheme";
import ToggleColorMode from "./ToggleColorMode";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderBottom: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "none",
  backgroundImage: "none",
  zIndex: theme.zIndex.drawer + 1,
  flex: "0 0 auto",
}));

interface SignInWrapperProps {
  children: React.ReactNode;
}

export default function AppTheme({ children }: SignInWrapperProps) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const customTheme = createTheme(getCustomTheme(mode));

  // Save the selected mode to localStorage
  const toggleColorMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  // get themeMode
  React.useEffect(() => {
    const saveMode = localStorage.getItem("themeMode") as PaletteMode | null;
    if (saveMode) {
      setMode(saveMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
        <StyledAppBar>
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              p: "8px 12px",
            }}
          >
            <Button
              variant="text"
              size="small"
              aria-label="Preview website"
              startIcon={<VisibilityIcon />}
              component="a"
              href="/dashboard"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              Preview website
            </Button>
            <IconButton
              size="small"
              aria-label="Preview website"
              component="a"
              href="/dashboard"
              sx={{ display: { xs: "auto", sm: "none" } }}
            >
              <VisibilityIcon />
            </IconButton>

            <ToggleColorMode
              data-screenshot="toggle-mode"
              mode={mode}
              toggleColorMode={toggleColorMode}
            />
          </Toolbar>
        </StyledAppBar>
        <Box sx={{ flex: "1 1", overflow: "auto" }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}
