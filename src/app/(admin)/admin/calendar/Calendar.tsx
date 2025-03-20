"use client";

import { daysOfWeek } from "@/utils/datetime-utils";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosRounded";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const daysInMonth = endOfMonth.date();

  // convert to Monday is first day
  const startDay = startOfMonth.day() === 0 ? 7 : startOfMonth.day();
  const totalCells = daysInMonth + (startDay - 1);
  const daysArray = Array.from({ length: totalCells }, (_, index) => {
    const dayNum = index - (startDay - 1) + 1;
    return dayNum > 0 && dayNum <= daysInMonth ? dayNum : null;
  });

  // previous month
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  // next month
  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Button
          onClick={handlePrevMonth}
          startIcon={<ArrowBackIcon />}
        ></Button>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
          }}
        >
          {currentDate.format("MMMM YYYY")}
        </Typography>
        <Button
          onClick={handleNextMonth}
          endIcon={<ArrowForwardIcon />}
        ></Button>
      </Box>

      {/* Days of the week */}
      <Grid container columns={7} sx={{ mt: 1, backgroundColor: "#f5f5f5" }}>
        {daysOfWeek.map((day) => (
          <Grid
            key={day}
            size={{ xs: 1, sm: 1, md: 1 }}
            sx={{
              padding: 1,
              fontWeight: "bold",
              textAlign: "center",
              borderBottom: "2px solid #000",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Calendar days */}
      <Grid container columns={7} spacing={4}>
        {daysArray.map((day, index) => (
          <Grid
            size={{ xs: 1, sm: 1, md: 1 }}
            key={index}
            sx={{
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                borderRadius: 4,
                backgroundColor:
                  day === dayjs().date() ? "#f27228" : "transparent",
              }}
            >
              {day}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Calendar;
