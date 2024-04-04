import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import image from '../../assests/images/Modern design.png';
import image1 from '../../assests/images/Design (1).png';
import image2 from '../../assests/images/Ground-breaking.png';
import '../../assests/css/home.css';

import Button from 'react-bootstrap/esm/Button';
import Welcome from '../layout/Welcome';
import Package from '../layout/Package';
import CardCarousel from '../cards/CardCarousel';








function Home() {
	return (

	  <>
	  <div className="App">
		
		<Carousel fade>
		  <Carousel.Item>
			<img
			  className="d-block w-100"
			  src={image}
			  alt="First slide"
			/>
			<Carousel.Caption>
			 
			  <div className="button-container">
			  <Button variant="primary">Learn More</Button>
			</div>
			</Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
			<img
			  className="d-block w-100"
			  src={image1}
			  alt="Second slide"
			/>
			<Carousel.Caption>
			<div className="button-container">
			  <Button variant="primary">Learn More</Button>
			</div>
			</Carousel.Caption>
		  </Carousel.Item>
		  <Carousel.Item>
			<img
			  className="d-block w-100"
			  src={image2}
			  alt="Third slide"
			/>
			<Carousel.Caption>
			<div className="button-container">
			  <Button variant="primary">Learn More</Button>
			</div>
			</Carousel.Caption>
		  </Carousel.Item>
		</Carousel>
	  </div>
	 <Welcome/>
	  <Package/>
	  <CardCarousel/>
	 
	 
	  
	  
	  </>
	  
	  
	);
	
  }
  

export default Home;