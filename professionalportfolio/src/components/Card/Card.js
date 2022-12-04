import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = ({title, github, deployed, image}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[200] }} aria-label="Alex Najera">
            AN
          </Avatar> 
        }
        title = {title}
        subheader="Alex Najera"
      />
      <CardMedia
        component="img"
        height="194"
        image={image} href  = {deployed} target = "_blank"
        alt="coding image"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Check out my work!
        </Typography>
      </CardContent>
    
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
       
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default ProjectCard;