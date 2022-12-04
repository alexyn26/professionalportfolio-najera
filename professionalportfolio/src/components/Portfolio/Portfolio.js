import React from 'react';

import Card from '../Card';

const Portfolio = () => {
    let projects = [
        { title: 'example',
        github: 'https://github.com',
        deployed: 'https://dashboard.heroku.com',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'example',
        github: 'https://github.com',
        deployed: 'https://dashboard.heroku.com',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'example',
        github: 'https://github.com',
        deployed: 'https://dashboard.heroku.com',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'example',
        github: 'https://github.com',
        deployed: 'https://dashboard.heroku.com',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'example',
        github: 'https://github.com',
        deployed: 'https://dashboard.heroku.com',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
        { title: 'example',
        github: 'https://github.com',
        deployed: 'https://dashboard.heroku.com',
        image: 'https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q=',
        },
    ];
    
    return(
        <>

        <h1>My Work</h1>
        
        {projects.map(project => 
            
            <Card title = {project.title} github = {project.github} heroku = {project.heroku} image = {project.image}>

            </Card>
            )}
        
        
       </>
    ) 
}
    


export default Portfolio;