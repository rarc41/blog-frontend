import React, { useState } from "react";

// import Button from '@mui/material/Button'
import { ThemeProvider, styled } from "@mui/material/styles";
// import PersonIcon from '@mui/icons-material/Person';
import { theme } from "./Theme";
import Landing from "./components/Landing";
import GlobalState from "./context/globalState";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Navbar from './components/common/Navbar';
// import Main from './components/Main';
// import Signup from './views/Signup';

// const StyledButton = styled(Button)(({theme})=>({
//   color: 'white',
//   backgroundColor: theme.palette.success.main,
//   '&:hover':{
//     backgroundColor: theme.palette.warning.main
//   }
// }))

function App() {
  const [showLogin, setShowlogin] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <div className="App">
          {/* <Navbar/> */}
          <Landing />
          <Login></Login>
          <Signup></Signup>
        </div>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
