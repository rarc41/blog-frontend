import React, {Fragment} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({logout}) => {
    const user = {

      };
  return (
    <Fragment>
      <AppBar position="static" sx={{ backgroundColor: "primary.dark" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          {Object.keys(user).length!==0 ? (
            <Typography variant="h4" sx={{ fontSize: "2.5rem" }}>
              Hola
              <Typography variant="span" sx={{ marginLeft: "2rem" }}>
                {user.name}
              </Typography>{" "}
            </Typography>
          ) : (
              <Fragment>
            <Button
            color="secondary"
            variant="contained"
            sx={{ fontSize: "1.5rem", marginLeft:'2rem' }}
            onClick={()=>logout()}
          >
            Log Out
          </Button>
          </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
