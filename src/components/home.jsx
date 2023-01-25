import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
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
import fly1 from "../Images/fly1.jpg";
import bg from "../Images/float/bg.jpg";
import doc from "../Images/doc.jpg";
import bg1 from "../Images/bg1.jpg";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import SearchForm from './searchForm';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useNavigate } from 'react-router-dom';

const Home= () => {
 
    const navigate = useNavigate();
  return (
    <div  style={{backgroundImage: `url(${bg1})` }}>
     
<div class="container">
  <div class="row mt-0">
    <div class="col-9 mt-0">
    <Carousel >
      <Carousel.Item interval={1000} className="">
        <img
          className="d-block w-100 "
          src={bg}
          alt="First slide"
          height="500"
          width="500"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={fly1}
          alt="Second slide"
          height="500"
          width="500"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={doc}
          alt="Third slide"
          height="500"
          width="500"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div class="col">
      <br/> <br/> <br/>
     <button onClick={()=>{ navigate('/searchForm');}}><h1>Check and Book your tickets</h1></button>
    </div>
  </div>

</div>




        {/* <h2>Explore India</h2>
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
    
    </Grid> */}
        <SearchForm/>
    <br/>
        <Footer/>
    </div>
  )
}

export default Home;

