import { Box } from "@mui/material";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bevis Resume | Full Stack Developer",
  description: "Professional resume of Bevis - Full Stack Developer specializing in modern web technologies",
};

const ResumePage = () => {
  return (
    <Box className="min-h-screen">
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </Box>
  );
};

export default ResumePage;
