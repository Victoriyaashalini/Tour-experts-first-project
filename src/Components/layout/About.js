import React from 'react'
import { Container,Image  } from 'react-bootstrap';
import aboutimage from "../../assests/images/about.png";
import "../../assests/css/about.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mission from "../../assests/images/packages/mission.jpg";
import vision from "../../assests/images/travel-composition-with-hand-holding-pencil.jpg";
import Whychoose from '../cards/Whychoose';

function About() {
  return (
	<Container fluid>
   
    <Image 
        src={aboutimage}
        fluid 
        alt="Responsive Image" 
       
        
        />
    
    <div className=" container welcome-about ">

      <h2 className='text-center history'>Our History</h2>
      <p className='page-about-text'>
      Established in 2016, Tour Experts swiftly emerged as a leader in the travel industry, driven by our commitment to excellence and innovation.Proudly holding ISO 9001:2008 certification, Tour Experts is committed to setting clear objectives, prioritizing effectively, and optimizing resources. </p>
    </div>
    <div className="mission-container text-center">
    <Row >
        <Col md={6}>
          <div className="mission">
          <h2>Our Mission</h2> <br />
          <p className='mision-text'>
          At Tour Experts, our mission is to redefine travel experiences, one journey at a time. We are committed to curating unforgettable adventures that inspire, enrich, and leave a lasting impact on our travelers. With a focus on authenticity, sustainability, and innovation, we aim to create meaningful connections between people and places, fostering a deeper understanding and appreciation of the world around us. Our dedication to excellence ensures that every aspect of your journey, from planning to execution, is meticulously crafted to exceed expectations.
          </p>
          </div>
        </Col>
        <Col md={6}>
          <Image src={mission}  thumbnail  className='mision-image' />
        </Col>
        <Col md={6}>
          <Image src={vision} fluid alt="Responsive Image" className='vision-image' thumbnail  />
        </Col>
        <Col md={6}>
          <div className="vision-text container">
            <h2>Our Vision</h2>
            <p className='vision-text'>
            We understand that satisfaction is key to building lasting relationships with our clients.At Tour Experts, we pride ourselves on delivering unparalleled customer service that goes above and beyond expectations. Our dedicated team is committed to providing personalized assistance and expert guidance at every step of your journey. From the moment you inquire about a trip to the day you return home, we are here to ensure that your experience is seamless, memorable, and tailored to your unique preferences.
            </p>
          </div>
        </Col>
      </Row>
      </div>
      
  </Container>
  )
}

export default About