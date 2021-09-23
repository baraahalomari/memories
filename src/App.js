import React, {useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import memoreis from './images/memories.png';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import useStyle from './style';
import { getPosts } from './action/posts'

const App = () => {

  const [currentId, setCurrentId] = useState(null)
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])



  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memoreis} alt="memo" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;