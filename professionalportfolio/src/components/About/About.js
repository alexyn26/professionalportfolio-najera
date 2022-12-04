import React from 'react';
import selfie from '../../assets/selfie2.jpeg';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { alignProperty } from '@mui/material/styles/cssUtils';

const About = () => {
    return(
        <>
        <Grid container justifyContent = "center" padding ={2} spacing = {2}>
            
            <Grid item justify-content = "center" xs = {12} md = {5}>
        <Avatar alt ='my picture' src = {selfie} sx ={{width: .5, height:.7 }}></Avatar>
        </Grid>
        <Grid item xs={12} md={3}>
        <h1>About Me</h1>
        Hi, nice to meet you! My name is Alexandra Najera, but please, call me Alex.
        I have recieved both my Bachelors of Science and and Masters in Education from The University of Texas at Arlington.
        While I love teaching, I have always loved coding and hope to merge the two disciplines in some form.
        I'm excited to see where this course takes me and how my career grows.
        </Grid>
        </Grid>
        </>

    )
    
    
}
export default About;