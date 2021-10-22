import React, { useState } from 'react';
import { AppBar, Container, Grid, Grow, Paper, TextField, Button } from '@material-ui/core';
import Posts from '../posts/Posts';
import Form from '../form/Form';
import { fetchPostBySearchQuery } from '../../action/posts';
import { useDispatch } from 'react-redux';
import Paginate from '../Pagination';
import useStyle from './styles';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {

  const query = useQuery();
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const page = query.get('page') || 1;

  const dispatch = useDispatch();
  const classes = useStyle();
  const history = useHistory();



  const searchPost = () => {
    if (search.trim() || tags) {
      console.log(search)
      dispatch(fetchPostBySearchQuery({ search, tags: tags.join(',') }));
      history.push(`/post/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost()
    }

  }

  const addHandler = (tag) => {
    setTags([...tags, tag])
  }

  const deleteHandler = (deletedTag) => {
    setTags(tags.filter((tag) => tag !== deletedTag))
  }


  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} ms={9} >
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} ms={3} >
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField name="search" variant="outlined" label={search} fullWidth value={search} placeholder="Search" onKeyPress={handleKeyPress} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput style={{ margin: "10px 0" }} value={tags} onAdd={addHandler} onDelete={deleteHandler} label="Search Tags" variant="outlined" />
              <Button className={classes.searchButton} onClick={searchPost} color="primary" variant="contained" >Search</Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6} className={classes.pagination}>
              <Paginate page={page} />
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Grow>
  )
}

export default Home;
