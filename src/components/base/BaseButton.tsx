import { Button } from "@mui/material";
import { styled } from "@mui/system";

interface ButtonProps {
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  type?: "submit" | "button" | "reset";
  icon?: React.ReactNode;
  label?: string;
  disabled?: boolean;
  sx?: object;
  onClick?: () => void;
}

const ButtonStyled = styled(Button)`
  .MuiButton-icon {
    margin: 0 auto;
  }
`;

export default function BaseButton({
  color,
  type = "button",
  icon,
  label,
  onClick,
  sx,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonStyled
      color={color}
      type={type}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={{ ...sx }}
      startIcon={icon}
    >
      {label}
    </ButtonStyled>
  );
}
