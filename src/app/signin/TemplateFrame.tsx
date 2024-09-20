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
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import GetSignInTheme from "../../components/theme/GetSignInTheme";
import ToggleColorMode from "@/components/theme/ToggleColorMode";

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

interface TemplateFrameProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
  children: React.ReactNode;
}

export default function TemplateFrame({
  mode,
  toggleColorMode,
  children,
}: TemplateFrameProps) {
  const signInTheme = createTheme(GetSignInTheme(mode));

  return (
    <ThemeProvider theme={signInTheme}>
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
              aria-label="Back to templates"
              startIcon={<ArrowBackRoundedIcon />}
              component="a"
              href="/material-ui/getting-started/templates/"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              Back to templates
            </Button>
            <IconButton
              size="small"
              aria-label="Back to templates"
              component="a"
              href="/material-ui/getting-started/templates/"
              sx={{ display: { xs: "auto", sm: "none" } }}
            >
              <ArrowBackRoundedIcon />
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
