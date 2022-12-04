
import React from 'react';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';


import TextareaAutosize from '@mui/material/TextareaAutosize'

const contact = () => {
    return(
        <>
      <Grid item justify-content = "center" xs ={12} md={12}>
       <h1>Contact Me</h1>
       <FormControl>
       <InputLabel htmlFor="name">Name</InputLabel>
       <Input id="name" aria-describedby="my-helper-text" />
       
     </FormControl><br></br><br></br>
        
       <FormControl>
       <InputLabel htmlFor="email">Email address</InputLabel>
       <Input id="email" aria-describedby="my-helper-text" />
     </FormControl>
        <br></br><br></br>
     
      <InputLabel htmlFor = "message">Message:</InputLabel><br></br><br></br>
     <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
         placeholder="How can I help you?"
         style={{ width: 300 }}
        />
        

</Grid>
       
      </>
    )
    
}
export default contact;