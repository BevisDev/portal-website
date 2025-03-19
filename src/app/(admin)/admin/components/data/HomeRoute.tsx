import {
  Dashboard,
  PeopleAltRounded,
  ShoppingCart,
  SportsEsportsRounded,
  CasinoRounded,
  ReceiptLongRounded,
} from "@mui/icons-material";
import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";

interface HomeRouteProps {
  path?: string; // if has chilrent, parent don't need path
  visible: boolean;
  label: string;
  icon?: React.JSX.Element;
  children?: HomeRouteProps[];
}

const HomeRoute: HomeRouteProps[] = [
  {
    path: "/",
    visible: true,
    label: "Dashboard",
    icon: <Dashboard />,
  },
  {
    label: "Game Play",
    visible: true,
    icon: <SportsEsportsRounded />,
    children: [
      {
        path: "/baucua",
        visible: true,
        label: "Bầu Cua",
        icon: <CasinoRounded />,
      },
    ],
  },
  {
    label: "Team",
    visible: true,
    icon: <PeopleAltRounded />,
    children: [
      {
        path: "/sales",
        visible: true,
        label: "Sales",
        icon: <PeopleAltRounded />,
      },
      {
        path: "/traffic",
        visible: true,
        label: "Traffic",
        icon: <PeopleAltRounded />,
      },
    ],
  },
  {
    path: "/resume",
    visible: true,
    label: "Resume",
    icon: <ReceiptLongRounded />,
  },
  {
    path: "/admin/page-management",
    visible: true,
    label: "Page Management",
    icon: <ShoppingCart />,
  },
];

const getLabel = (
  menuItem: HomeRouteProps[],
  pathname: string
): string | null => {
  for (const item of menuItem) {
    if (item.path === pathname) {
      return item.label;
    }

    if (item.children) {
      const chilrenLabel = getLabel(item.children, pathname);
      if (chilrenLabel) {
        return chilrenLabel;
      }
    }
  }

  return null;
};

const TypographyLabel: React.FC<{ pathname: string }> = ({ pathname }) => {
  const label = getLabel(HomeRoute, pathname);
  return (
    <Typography
      variant="h2"
      style={{
        color: "#000",
        marginBottom: "2rem",
        fontSize: "28px",
      }}
    >
      {label}
    </Typography>
  );
};

export { HomeRoute, getLabel };
export default TypographyLabel;
