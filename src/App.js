import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
const App = () => {

  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <Navbar />
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>

  )
}

export default App;