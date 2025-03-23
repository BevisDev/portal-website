import { Box } from "@mui/material";
import { Metadata } from "next";
import { CodeData } from "./components/data/CodeData";

export const metadata: Metadata = {
  title: "Welcome to my resume | Made by Bevis",
  description: "Welcome to Bevis Resume",
};

const ResumePage = () => {
  return (
    <Box>
      <pre>
        <code className="text-white">{CodeData}</code>
      </pre>
    </Box>
  );
};

export default ResumePage;
