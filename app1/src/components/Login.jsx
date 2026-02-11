import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Login = () => {
  return (
    <div>
      <input type="text" placeholder='username' />
      <br /><br />
      <input type="text" placeholder='password' />
      <br /><br />
      <button>Login</button>
      <br /><br /><br />
      <Typography variant="h1">Login</Typography>
      <TextField label="username" variant="outlined"/>
      <br /><br />
      <TextField label="email" variant="filled" />
      <br /><br />
      <TextField label="password" variant="standard" />
      <br /><br />
      <Button variant="text">LOGIN</Button>
      <br /><br />
      <Button variant="contained">Login</Button>
      <br /><br />
      <Button variant="outlined">Login</Button>
    </div>
  )
}

export default Login
