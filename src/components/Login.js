import React, { useContext, useState } from "react";


import Dialog from "@mui/material/Dialog";
import globalContext from "../context/globalContext";
import AppBarModal from "./common/AppBar}Modal";
import {
  DialogContent,
  TextField,
  Box,
  FormControl,
  DialogActions,
  Button,
} from "@mui/material";


const Login = ({ login }) => {
  const context = useContext(globalContext);
  const { modalLogin, showLoginForm } = context;

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => {
    showLoginForm(false);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        login(values.email, values.password);
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <Dialog
      open={modalLogin}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth="md"
      PaperProps={{
        sx: {
          maxHeight: 800,
        },
      }}
    >
      <AppBarModal
        title={"Login"}
        showModal={handleClose}
        titleAction=""
        accion=""
      ></AppBarModal>
      <DialogContent>
        <Box sx={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
          {/* <Grid item> */}
          <FormControl
            sx={{ m: 1, width: "100%", display: "flex", height: "100%" }}
            variant="outlined"
          >
            <Box sx={{ display: "flex" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                inputProps={{ style: { fontSize: "1.5rem" } }}
                InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                sx={{ margin: "2rem" }}
                type="email"
                name="email"
                value={values.email}
                onChange={(e) => handleChange(e)}
              ></TextField>
            </Box>
            <Box sx={{ display: "flex" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Pass"
                variant="outlined"
                inputProps={{ style: { fontSize: "1.5rem" } }}
                InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                sx={{ margin: "2rem" }}
                name="password"
                value={values.password}
                onChange={(e) => handleChange(e)}
                type="password"
              ></TextField>
            </Box>
          </FormControl>
          {/* </Grid> */}
        </Box>
      </DialogContent>
      <DialogActions sx={{margin: "2rem"}}>
        <Button sx={{fontSize: "2.5rem" }} type="submit" variant='contained' color="primary" onClick={(e) => handleSubmit(e)}>Login </Button>
        <Button sx={{fontSize: "2.5rem" }} onClick={handleClose}>Cancel </Button>

      </DialogActions>
    </Dialog>
  );
};

export default Login;
