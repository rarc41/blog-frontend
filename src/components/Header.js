import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import '../styles/Header.css'

const Header = () => {


  return (
    <Box className="hero">
      <Box className="square-rotated"></Box>
      <Box className="square-rotated--medium"></Box>
      <Box className="square-rotated--small border-radius-squares"></Box>
      <Box className='container-hero'>
        <Typography variant="h1" >KONECTA <Typography variant='span' sx={{fontWeight: 'bold', color:'primary.dark'}}>BlogPost</Typography></Typography>
        <Typography variant="h2" sx={{fontStyle: 'italic'}}>Choose Your History</Typography>
      </Box>

    </Box>
  );
};

export default Header;
