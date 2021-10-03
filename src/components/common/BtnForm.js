import React from "react";
import Button from "@mui/material/Button";


const BtnForm = ({ callback, texto = "Nuevo" }) => {
  return (
    <Button
      color="primary"
      style={{ color: "#c79e32" }}
      onClick={callback.bind(this)}
    >
      {" "}
      {texto}{" "}
    </Button>
  );
};

export default BtnForm;
