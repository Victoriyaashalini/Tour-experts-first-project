import React, { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import CustompackageForm from '../forms/CustompackageForm';
import "../../assests/css/customize.css"

function Customizeoption() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <Container>
        <Card className='custom'>
          <Card.Header as="h5" className='card-head'>Customizing Existing Packages</Card.Header>
          <Card.Body>
            <Card.Text className='card-text'>
              We understand that sometimes the perfect package is just a few tweaks away from fitting your ideal getaway. That's why we offer the option to customize our existing packages to better suit your preferences. Whether you want to add extra excursions, upgrade your accommodations, or adjust the itinerary to include your must-see destinations, our team is here to make it happen. Simply let us know your desires, and we'll work closely with you to tailor the package to your exact specifications. With our expertise and flexibility, you can enjoy all the benefits of our meticulously planned packages while still ensuring that your trip is uniquely yours.
            </Card.Text>
            <Button variant="outline-warning" className='cus-button'>Explore Now</Button>
          </Card.Body>
        </Card>
        <Card className='custom custom1'>
          <Card.Header as="h5" className='card-head'>Creating a Custom Package</Card.Header>
          <Card.Body>
            <Card.Text className='card-text'>
              Our custom package creation service empowers you to design your dream vacation from scratch. Whether it's a romantic escape, an adventurous expedition, or a cultural immersion, our travel experts are here to bring your vision to life. Share your ideas, preferences, and must-have experiences with us, and we'll craft a personalized itinerary that exceeds your expectations. From accommodations to unique activities, every detail will be meticulously planned. With Tour Experts, let your imagination run wild, and let us create the perfect package for you."
            </Card.Text>
            <Button variant="outline-warning" className='cus-button' onClick={handleShowForm}>Plan your holiday</Button>
          </Card.Body>
        </Card>
      </Container>
      {showForm && <CustompackageForm />}
    </>
  );
}

export default Customizeoption;
