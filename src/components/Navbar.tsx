import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "./FlexBetweenComponent";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Link from "next/link";

export default function Navbar() {
  const { palette } = useTheme();
  const [selectedPage, setSelectedPage] = useState("dashboard");
  return (
    <FlexBetween
      style={{
        marginBottom: "0.25rem",
        padding: "0.5rem 0rem",
        color: palette.grey[300],
      }}
    >
      {/* Left side */}
      <FlexBetween gap={"0.75rem"}>
        <AcUnitIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" sx={{ fontSize: "16px" }}>
          Financer
        </Typography>
      </FlexBetween>

      {/* Right side */}
      <FlexBetween gap={"2rem"}>
        <Box
          sx={{
            "&:hover": {
              color: palette.grey[100],
              transition: "color .2s ease-in",
            },
          }}
        >
          <Link
            href="/"
            onClick={() => setSelectedPage("dashboard")}
            style={{
              color:
                selectedPage === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box
          sx={{
            "&:hover": {
              color: palette.grey[100],
              transition: "color .2s ease-in",
            },
          }}
        >
          <Link
            href="/predictions"
            onClick={() => setSelectedPage("predictions")}
            style={{
              color:
                selectedPage === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
}
