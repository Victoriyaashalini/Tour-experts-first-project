import React from 'react'
import Card from 'react-bootstrap/Card';
import imagee from "../../assests/images/manyu-varma-aDXV4GbqHcQ-unsplash (1).jpg";
import "../../assests/css/indiatour.css";
import Indiapackages from './Indiapackages';

function Indiatour() {
  return (
	<>
	<Card className="bg-dark text-white">
	<Card.Img src={imagee} alt="Card image" className='india-image' fluid />
	<Card.ImgOverlay>
	 
	  <Card.Text className='india-text'>
	  <p> <span className='india-head'>INDIA</span><br />
	   a country steeped in rich culture, historic wonders <br />  breathtaking natural landscapes <br /> awaits your exploration.</p>
	  </Card.Text>
	 
	</Card.ImgOverlay>
  </Card>
  <Indiapackages/>
  </>
  )
}

export default Indiatour