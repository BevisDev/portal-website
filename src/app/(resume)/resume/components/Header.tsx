"use client";

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Box component="header" className="py-6 border-b border-gray-800">
      <Container maxWidth="lg">
        <Box className="flex justify-between items-center">
          <Typography variant="h4" component="h1" className="font-bold">
            Bevis Resume
          </Typography>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-blue-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
