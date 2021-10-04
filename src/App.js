import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Button from '@mui/material/Button'
import {
  setToken,
  api,
  deleteToken,
  getToken,
  initAxiosInterceptors,
} from "./Helpers/auth-helpers";
import { ThemeProvider } from "@mui/material/styles";
// import PersonIcon from '@mui/icons-material/Person';
import { theme } from "./Theme";
import Landing from "./components/Landing";
import GlobalState from "./context/globalState";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Navbar from './components/common/Navbar';
import Main from "./components/Main";
import Loading from "./components/common/Loading";
import Posts from "./components/Posts"
// import Signup from './views/Signup';

// const StyledButton = styled(Button)(({theme})=>({
//   color: 'white',
//   backgroundColor: theme.palette.success.main,
//   '&:hover':{
//     backgroundColor: theme.palette.warning.main
//   }
// }))

initAxiosInterceptors();
function App() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const [section, setSection]=useState('posts');

  useEffect(() => {
    const loadUser = async () => {
      if (!getToken()) {
        setLoadingUser(false);
        // setUser(null)

        return;
      }

      try {
        const { data: user } = await Axios.get(`${api}/api/auth/me`);
        setUser(user);
        setLoadingUser(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    const { data } = await Axios.post(`${api}/api/auth/login`, {
      email,
      password,
    });

    setUser(data.user);
    setToken(data.access_token);
    if(user){
      setSection('posts')
    }
  };

  const signup = async (user) => {
    console.log(user);
    const { data } = await Axios.post(`${api}/api/auth/register`, user);

    setUser(data.user);
    setToken(data.access_token);
  };

  const logout = async () => {
    setUser(null);
    deleteToken();
  };

  if (loadingUser) {
    return (
      <Main>
        <Loading></Loading>
      </Main>
    );
  }

  return (
    <Fragment>
      {section==='landing' && (
                <ThemeProvider theme={theme}>
                <GlobalState>
                  <div className="App">
                    {/* <Navbar/> */}
                    <Landing />
                    <Login login={login}></Login>
                    <Signup signup={signup}></Signup>
                  </div>
                </GlobalState>
              </ThemeProvider>
      )}

      {section ==='posts' && (
        <Posts>

        </Posts>
      )}

      
    </Fragment>


  );
}

export default App;

const LoginRoutes = () => {};

const LogoutRoutes = ({ login }) => {
  <Switch>
    {/* <Route
      path="/posts/"
      render={(props) => <Posts {...props} login={login}></Posts>}
    ></Route> */}
    <Route
      // path="/login/"
      render={(props) => <Landing></Landing>}
      default
    ></Route>
  </Switch>;
};
