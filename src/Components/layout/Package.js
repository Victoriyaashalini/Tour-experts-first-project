import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../assests/css/package.css'; 
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom'; 

const cardData = [
	{
	  title: 'INDIA',
	 
	  image: require('../../assests/images/packages/manyu-varma-aDXV4GbqHcQ-unsplash (1).jpg'),
	  textColor: 'yellow',
	  link: '/indiatour'
	},
	{
	  title: 'INTERNATIONAL',
	
	  image: require('../../assests/images/packages/international.jpg'),
	  textColor: 'yellow',
	  link:'/international'
	},
	{
	  title: 'HONEYMOON',
	  
	  image: require('../../assests/images/packages/honey.jpg'),
	  textColor: 'yellow'
	},
	{
	  title: 'FAMILY TOUR',
	 
	  image: require('../../assests/images/packages/family.png'),
	  textColor: 'yellow'
	},
	{
	  title: 'ADVENTURE',
	  
	  image: require('../../assests/images/packages/adventure.png'),
	  textColor: 'yellow'
	},
	{
	  title: 'ISLAND',
	
	  image: require('../../assests/images/packages/is.jpg'),
	  textColor: 'yellow'
	},
	{
	  title: 'WILDLIFE AND NATURE',
	  
	  image: require('../../assests/images/packages/wild.jpg'),
	  textColor: 'yellow'
	},
	{
	  title: 'GROUP TRAVEL',
   
	  image: require('../../assests/images/packages/kelsey-chance-CutTQTt2HyI-unsplash.jpg'),
	  textColor: 'yellow'
	},
	{
	  title: 'WEDDING',
	  
	  image: require('../../assests/images/packages/marriage.png'),
	  textColor: 'black'
	},
	{
	  title: 'LUXURY ESCAPES',
	  
	  image: require('../../assests/images/packages/luxurys.png'),
	  textColor: 'gold'
	}
  ];
  

 
const Package = () => {
	return (
	  <Container className='package-container'>
		<h3 className='package-heading'>Travel By Theme</h3>
		<Row xs={2} sm={3} md={4}  lg={5} xl={5} className="g-4">
		  {cardData.map((card, index) => (
			<Col key={index}>
			  <div className="card-wrapper">
				<Card className="custom-card" style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', color: card.textColor }}>
				  <Card.Body>
					<Card.Title className="card-title">{card.title}</Card.Title>
					{/* Optionally display card content */}
					{/* <Card.Text>{card.content}</Card.Text> */}
					<Link to={card.link}>
					  <Button className="card-button" variant="outline-warning">Explore</Button>
					</Link>
				  </Card.Body>
				</Card>
			  </div>
			</Col>
		  ))}
		</Row>
	  </Container>
	);
  };

export default Package