import React, { useState } from 'react';
import { BrowserRouter, Switch, Route ,Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import PostDetails from './components/details/PostDetails';
const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <Navbar />
        <Switch >
          <Route path="/" exact component={()=> <Redirect to="/post" />} />
          <Route path="/post" exact component={Home} />
          <Route path="/post/search" component={Home} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/auth" component={ ()=> (!user) ? <Auth /> : <Redirect to="/post" /> } />
        </Switch>
      </Container>
    </BrowserRouter>

  )
}

export default App;