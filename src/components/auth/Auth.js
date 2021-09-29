import React, { useState } from 'react';
import { Container, Button, Typography, Paper, Avatar, Grid } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import useStyle from './style';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { useHistory } from 'react-router-dom';

import {signin,signup} from '../../action/auth';

const Auth = () => {

  const initialState = { firstName: '', lastName: '', email: '', password: '' }
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false);

  const classes = useStyle();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp){
      dispatch(signup(formData,history))
    }else{
      dispatch(signin(formData,history))
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const switchMood = () => {
    setIsSignUp(!isSignUp)
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push('/');
    } catch (error) {
      console.log(error)
    }
  }

  const googleError = () => {
    console.log('google login successfuly')
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
      </Paper>
      <Typography component="h1" variant="h5">{isSignUp ? "Sign up" : "Sign in"}</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {isSignUp && (
            <>
              <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
              <Input name='lastName' label='Last Name' handleChange={handleChange} half />
            </>
          )}
          <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
          <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          {isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
        </Grid>
        <Button type='submit' fullWidth variant="contained" color="primary" className={classes.submit}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
        <GoogleLogin clientId='1055189064187-r4rd8gg34knmlqppsr3ak3jl11dh1u3f.apps.googleusercontent.com' render={(renderProps) => (
          <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant='contained'>
            Google Sign In
          </Button>
        )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy='single_host_origin'
        />
        <Grid item >
          <Button onClick={switchMood}>
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
          </Button>
        </Grid>
      </form>
    </Container>
  )
}

export default Auth
