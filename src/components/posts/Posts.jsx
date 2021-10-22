import React from 'react';
import Post from './post/Post';
import useStyle from './style';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';


const Posts = ({setCurrentId}) => {
  const {posts} = useSelector((state) => state.posts);
  const classes = useStyle();

  
  return (
    <>
      {
        !posts ? <CircularProgress/> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3} >
            {posts.map((post)=>(
              <Grid key={Post._id} item xs={12} sm={6} md={6}>
                <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>

        )
      }
    </>
  )
}

export default Posts
