import React from "react";

import { Typography, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
// import {theme} from './Theme'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // color: 'white',
  position: "relative",

  backgroundColor: theme.palette.primary.dark,
}));

const createAction = (titleAction, action) => {
  const resp = action ? (
    <Button style={{ color: "white" }} onClick={action.bind(this, false)}>
      {" "}
      {titleAction}{" "}
    </Button>
  ) : (
    ""
  );
  return resp;
};

const AppBarModal = ({ title, showModal, titleAction = "Close", action }) => {
  return (
    <StyledAppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={showModal.bind(this, false)}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ marginLeft: "2rem", flex: 1, color: "white" }}
        >
          {title}
        </Typography>
        {createAction(titleAction, action)}
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBarModal;
