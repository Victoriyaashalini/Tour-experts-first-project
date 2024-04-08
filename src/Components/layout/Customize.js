import React from 'react'
import image from "../../assests/images/Ground-breaking 1.png"
import "../../assests/css/customize.css"
import { Container, Image } from 'react-bootstrap';
import Customizeoption from '../cards/Customizeoption';

const Customize = () => {
  return (
    <>
    <Container fluid>
      <Image 
        src={image}
        fluid 
        alt="Responsive Image" 
      />
      <h2 className='text-center heading-customization'>Customization Choices</h2>
      <Customizeoption/>
     
    </Container>
   
    </>
  );
};
export default Customize;