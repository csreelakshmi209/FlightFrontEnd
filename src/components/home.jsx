import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from './footer';
import goa from "../Images/goa.webp";
import mumbai from "../Images/mumbai.webp";
import jaipur from "../Images/jaipur.jpg";
import delhi from "../Images/delhi.jpg";
import bangalore from "../Images/bangalore.jpg";
import udaipur from "../Images/udaipur.webp";
import bg from "../Images/float/bg.jpg";
import flying from "../Images/float/flying.webp";
import lag from "../Images/float/lag.jpg";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home= () => {

  return (
    <div>
       
        <div className="container-fluid   bg-dark background-image" style={{backgroundImage: `url(${delhi})` }} >
           <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade opacity-50 "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner pt-5 padding 20px">
              <div class="carousel-item active mx auto" data-bs-interval="1000">
                <img src={lag} class="rounded w-90" height="500 " alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                 <img
                  src={bg}
                  class="rounded w-90"
                  height="500"
                  width="765"
                  alt="..."
                />
              </div>  
              <div class="carousel-item" data-bs-interval="1000">
                 <img
                  src={flying}
                  class="rounded w-90"
                  height="500"
                  width="765"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>      
        <h2>Explore India</h2>
        <strong>These popular destinations have a lot to offer</strong>
        <br/> <br/>
        <Grid container spacing={2} cols={6} rowHeight={164}>
        <Box sx={{ m: 2 }} /> 
    <Card sx={{ maxWidth: 200 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={goa}
        title="goa"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Goa
        </Typography>
        <Typography variant="body2" color="text.secondary">
        GTDC official website book tourist budget hotels in Goa 
        with range of discounts Holiday Packages,
         water sports activities & tours at affordable rates.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card >
    <Box sx={{ m: 1 }} /> 
    <Card sx={{ maxWidth: 200 }} className="col-md-6">
      <CardMedia
        sx={{ height: 140 }}
        image={bangalore}
        title="banaglore"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bangalore
        </Typography>
        <Typography variant="body2" color="text.secondary">
        GTDC official website book tourist budget hotels in Goa 
        with range of discounts Holiday Packages,
         water sports activities & tours at affordable rates.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      <Box sx={{ m: 1 }} /> 
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={delhi}
        title="delhi"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Delhi
        </Typography>
        <Typography variant="body2" color="text.secondary">
        GTDC official website book tourist budget hotels in Goa 
        with range of discounts Holiday Packages,
         water sports activities & tours at affordable rates.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Box sx={{ m: 1 }} /> 
    <Card sx={{ maxWidth: 190 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={jaipur}
        title="jaipur"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Jaipur
        </Typography>
        <Typography variant="body2" color="text.secondary">
        GTDC official website book tourist budget hotels in Goa 
        with range of discounts Holiday Packages,
         water sports activities & tours at affordable rates.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Box sx={{ m: 1 }} /> 
    <Card sx={{ maxWidth: 180 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={mumbai}
        title="mumbai"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mumbai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        GTDC official website book tourist budget hotels in Goa 
        with range of discounts Holiday Packages,
         water sports activities & tours at affordable rates.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Box sx={{ m: 1 }} /> 
    <Card sx={{ maxWidth: 170 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={udaipur}
        title="udaipur"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Udaipur
        </Typography>
        <Typography variant="body2" color="text.secondary">
        GTDC official website book tourist budget hotels in Goa 
        with range of discounts Holiday Packages,
         water sports activities & tours at affordable rates.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </Grid>
    <br/>
        <Footer/>
    </div>
  )
}

export default Home;

