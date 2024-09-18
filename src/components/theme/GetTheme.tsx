import type {} from "@mui/material/themeCssVarsAugmentation";
import { ThemeOptions, PaletteMode } from "@mui/material/styles";
import { getDesignTokens } from "./ThemePrimitives";
import { inputsCustomizations } from "./custom/inputs";
import { dataDisplayCustomizations } from "./custom/dataDisplay";
import { feedbackCustomizations } from "./custom/feedback";
import { navigationCustomizations } from "./custom/navigation";
import { surfacesCustomizations } from "./custom/surfaces";

export function getCustomTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations,
    },
  };
}
