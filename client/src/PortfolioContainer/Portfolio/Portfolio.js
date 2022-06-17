import React from "react";
import image from '../../assets/Portfolio/Trasheroes.jpg'
import image2 from '../../assets/Portfolio/UD.jpg'
import "./Portfolio.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



// const cards = [1, 2, 3];


export default function Portfolio(props){
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

return (

    <div className="container fade-in" id={props.id ||""}>
    <ScreenHeading
      title={"Portfolio"}
      subHeading={"Full Stack Projects"}
    />
    <main>
    {/* Hero unit */}
    <Container sx={{ py: 8 }} maxWidth="md" >
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/random"
          alt="React Portfolio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            React Portfolio Page
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
       Technologies Used: React JS, Bootstrap, Material UI
       </Typography>
       <Typography variant="body2" color="text.secondary">
       A Personal Portfolio website to showcase all my details and projects at one place. </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://young-savannah-95030.herokuapp.com">Project</Button>
          <Button size="small" href="https://github.com/danghaonhien/hotrestaurant">Github</Button>
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/random"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://young-savannah-95030.herokuapp.com">Project</Button>
          <Button size="small" href="https://github.com/danghaonhien/hotrestaurant">Github</Button>
        </CardActions>
      </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/random"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Blizzard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://young-savannah-95030.herokuapp.com">Project</Button>
          <Button size="small" href="https://github.com/danghaonhien/hotrestaurant">Github</Button>
        </CardActions>
      </Card>
        </Grid>
  
        </Grid>
        
        </Container>
      </main>
      
<br/>
  <ScreenHeading
  subHeading={"UX/UI Projects"}
/>
<main>
{/* Hero unit */}
<Container sx={{ py: 8 }} maxWidth="md">
<Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 450 }}>
    <CardMedia
      component="img"
      height="200"
      image={image}
      alt="Trasheroes"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       Trasheroes
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
      Technologies: Figma, Illustrator, Photoshop, After Effect.
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Creating a Trasheroes community to help solve plastic waste pollution
      
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href="Trasheroes_CaseStudy.pdf">Download</Button>
    </CardActions>
  </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 450 }}>
    <CardMedia
      component="img"
      height="200"
      image={image2}
      alt="United Dumplings"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        United Dumplings
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
      Technologies: Figma, Illustrator, Photoshop, After Effect.
      </Typography>
      <Typography variant="body2" color="text.secondary">
     A Brand Guide Design for United Dumplings
      </Typography>
    </CardContent>
    <CardActions>
    <Button size="small" href="UnitedDumplings_CaseStudy.pdf">Download</Button>
    </CardActions>
  </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 450 }}>
    <CardMedia
      component="img"
      height="200"
      image="https://source.unsplash.com/random"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       United Dumplings
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href="UnitedDumplings_CaseStudy.pdf">Download</Button>
    </CardActions>
  </Card>
    </Grid>

  </Grid>
 
  </Container>
</main>
    </div>
)
}