import React, { useEffect, useState } from "react";
import Main from "./Main";
import Post from "./Post";
import { api } from "../Helpers/auth-helpers";

import Axios from "axios";

import {
  DialogContent,
  TextField,
  Box,
  FormControl,
  DialogActions,
  Button,
  Paper,
  Grid,
  Card,
  CardHeader,
} from "@mui/material";

import Navbar from "./common/Navbar";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data }  = await Axios.get(`${api}/api/posts/all`);
        setPosts(data.data);
        setLoading(false);
        // setLoadingUser(false);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);


  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ height: "10%", width: "100%", display: "flex" }}>
        <Navbar></Navbar>
      </Box>

      <Box sx={{ height: "100%", width: "100%", display: "flex" }}>
        <Box
          sx={{ height: "100%", width: "100%", display: "flex" }}
          className="List-Posts"
        >
          <Grid container spacing={2}>
            {!loading ? posts.map(post=>(
                <Post post={post} key={post.id}></Post>
            )) : ""}
          </Grid>
        </Box>

      </Box>
    </Box>
  );
};

export default Posts;
