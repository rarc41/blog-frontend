import React from 'react';

// import Button from '@mui/material/Button'
import { ThemeProvider, styled} from '@mui/material/styles';
// import PersonIcon from '@mui/icons-material/Person';
import {theme} from './Theme'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';



// const StyledButton = styled(Button)(({theme})=>({
//   color: 'white',
//   backgroundColor: theme.palette.success.main,
//   '&:hover':{
//     backgroundColor: theme.palette.warning.main
//   }
// }))


function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar/>
      <Header/>
      <Main></Main>
    </div>
    </ThemeProvider>
  );
}

export default App;
