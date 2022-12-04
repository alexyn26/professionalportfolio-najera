import React from 'react';
import selfie from '../../assets/selfie.PNG';
import Avatar from '@mui/material/Avatar';

const About = () => {
    return(
        <>
        <Avatar alt ='my picture' src = {selfie} sx ={{width: .1, height:.1 }}></Avatar>
        <h1>About Me</h1>
        Hi, nice to meet you! My name is Alexandra Najera, but please, call me Alex.
        I have recieved both my Bachelors of Science and and Masters in Education fromThe University of Texas at Arlington.
        While I love teaching, I have always loved coding and hope to merge the two disciplines in some form.
        I'm excited to see where this course takes me and how my career grows.
        </>
        

    )
    
    
}
export default About;