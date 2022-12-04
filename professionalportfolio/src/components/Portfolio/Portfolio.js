import React from 'react';

import Card from '../Card';
import Grid from '@mui/material/Grid';


const Portfolio = () => {
    let projects = [
        { title: 'Lively-Planner',
        github: 'https://github.com/alexyn26/Lively-Planner.git',
        deployed: 'https://alexyn26.github.io/Lively-Planner/',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'RecipeIO',
        github: 'https://github.com/Lawhornmatt/RecipeIO.git',
        deployed: 'https://recipeio-project2.herokuapp.com/login',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'Nomadr',
        github: 'https://github.com/JaQwae/nomadr.git',
        deployed: 'https://dashboard.heroku.com',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'Password Generator',
        github: 'https://github.com',
        deployed: 'https://dashboard.heroku.com',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'Code Refactor',
        github: 'https://github.com/alexyn26/Najera-Module1-Challenge1.git',
        deployed: 'https://alexyn26.github.io/Najera-Module1-Challenge1/',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'Professional Portfolio',
        github: 'https://github.com/alexyn26/Najera-Challenge2-ProfessionalPortfolio.git',
        deployed: 'https://alexyn26.github.io/Najera-Challenge2-ProfessionalPortfolio/',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
    ];
    
    return(
        <>
<Grid container justifyContent = "center">
        <h1>My Work</h1>
        </Grid>
        <Grid container   spacing = {2} padding = {2} justifyContent = "center">
        {projects.map(project => 
            
            <Card title = {project.title} github = {project.github} heroku = {project.heroku} image = {project.image}>

            </Card>
            )}
        
        </Grid>
       </>
    ) 
}
    


export default Portfolio;