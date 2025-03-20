import { Box } from "@mui/material";
import Calendar from "./Calendar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar | Made by BevisDev",
  description: "Welcome to Calendar Page",
};

const CalendarPage = () => {
  return (
    <Box>
      <Calendar />
    </Box>
  );
};

export default CalendarPage;
