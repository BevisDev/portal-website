"use client";

import { daysOfWeek } from "commons/utils/datetime-utils";
import { Box, Button, Paper, Typography } from "@mui/material";
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
    <Paper
      elevation={4}
      sx={{
        textAlign: "center",
        p: 3,
        maxWidth: 800,
        margin: "40px auto",
        borderRadius: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Button
          onClick={handlePrevMonth}
          startIcon={<ArrowBackIcon />}
          sx={{
            color: "#555",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        ></Button>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            color: "#333",
          }}
        >
          {currentDate.format("MMMM YYYY")}
        </Typography>
        <Button
          onClick={handleNextMonth}
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: "#555",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        ></Button>
      </Box>

      {/* Days of the week */}
      <Grid container columns={7} sx={{ mb: 2 }}>
        {daysOfWeek.map((day) => (
          <Grid
            key={day}
            size={{ xs: 1, sm: 1, md: 1 }}
            sx={{
              padding: 1,
              fontWeight: "bold",
              textAlign: "center",
              color: "#666",
            }}
          >
            <Typography variant="subtitle2">{day}</Typography>
          </Grid>
        ))}
      </Grid>

      {/* Calendar days */}
      <Grid container columns={7} spacing={1}>
        {daysArray.map((day, index) => (
          <Grid
            size={{ xs: 1, sm: 1, md: 1 }}
            key={index}
            sx={{
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: "80%",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor:
                  day === dayjs().date() && currentDate.isSame(dayjs(), "month")
                    ? "#5585e5"
                    : "transparent",
                color:
                  day === dayjs().date() && currentDate.isSame(dayjs(), "month")
                    ? "#fff"
                    : "#333",
                fontWeight: day === dayjs().date() ? "bold" : "normal",
                cursor: day ? "pointer" : "default",
                "&:hover": {
                  backgroundColor: day ? "#e0e0e0" : "transparent",
                },
              }}
            >
              {day}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Calendar;
