import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../styles/Landing.css";
import Button from "@mui/material/Button";

import globalContext from "../context/globalContext";

const Landing = () => {
  const context = useContext(globalContext);
  const { showLoginForm, showSignupForm } = context;
  return (
    <Box className="hero">
      <Box className="square-rotated"></Box>
      <Box className="square-rotated--medium"></Box>
      <Box className="square-rotated--small border-radius-squares"></Box>
      <Box className="container-hero">
        <Typography variant="h1" className="title-hero">
          KONECTA{" "}
          <Typography
            variant="span"
            sx={{ fontWeight: "bold", color: "primary.dark" }}
          >
            BlogPost
          </Typography>
        </Typography>
        <Typography variant="h2" className="subtitle">
          ¡Awesome Histories...
        </Typography>
        <Typography variant="h3" className="subtitle2">
          in one Place!!
        </Typography>
      </Box>
      <Box className="container-buttons buttons">
        <Button
          color="primary"
          variant="contained"
          sx={{ fontSize: "2.5rem" }}
          onClick={() => showLoginForm(true)}
        >
          Login
        </Button>
        <Button
          color="secondary"
          variant="contained"
          sx={{ fontSize: "2.5rem" }}
          onClick={() => showSignupForm(true)}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Landing;
