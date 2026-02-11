import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Reg = () => {
  return (
    <div>
     <Typography variant="h1">Registration</Typography>
     <TextField label="Name" variant="outlined"/>
     <br /><br />
     <TextField label="Place" variant="outlined"/>
     <br /><br />
     <TextField label="Age" variant="outlined"/>
     <br /><br />
     <TextField label="Gender" variant="outlined"/>
     <br /><br />
     <TextField label="Username" variant="outlined"/>
     <br /><br />
     <TextField label="Password" variant="outlined"/>
     <br /><br />
     <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Reg
