import { Dashboard, PeopleAltRounded, ShoppingCart } from "@mui/icons-material";
import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import Image from "next/image";

interface MenuProps {
  path?: string; // if has chilrent, parent don't need path
  visible: boolean;
  label: string;
  icon?: ReactElement;
  children?: MenuProps[];
}

const Menu: MenuProps[] = [
  {
    path: "/test",
    visible: true,
    label: "",
    icon: (
      <Image
        alt="logo"
        src={"/images/logo/dark-logo.svg"}
        width={200}
        height={100}
      />
    ),
  },
  {
    path: "/",
    visible: true,
    label: "Dashboard",
    icon: <Dashboard />,
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
    path: "/orders",
    visible: true,
    label: "Orders",
    icon: <ShoppingCart />,
  },
  {
    path: "/page-management",
    visible: true,
    label: "Page Management",
    icon: <ShoppingCart />,
  },
];

const getLabel = (menuItem: MenuProps[], pathname: string): string | null => {
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
  const label = getLabel(Menu, pathname);
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

export { Menu, getLabel };
export default TypographyLabel;
