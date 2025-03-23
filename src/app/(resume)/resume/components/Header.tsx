"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NavData from "./data/NavData";

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("/resume/home");

  return (
    <Box
      component="header"
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
    >
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            {/* Navigation Links */}
            {NavData.map((item, index) => (
              <Box key={index}>
                <Link href={item.path}>{item.text}</Link>
              </Box>
            ))}
          </nav>
        </div>
      </div>
    </Box>
  );
};

export default Header;
