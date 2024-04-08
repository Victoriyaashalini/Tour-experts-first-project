import React from 'react'
import "../../assests/css/contact.css";
import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Enquireform from '../forms/Enquireform';



function Contact() {
  return (
	<>
	<Container fluid className="full-height container-content">
	<div className="text-center">
	  <h1>CONTACT US</h1>
	</div>
	
  </Container>
  <div>
  <h2 className='traveler-connect'>Traveler Connect</h2>
  </div>
  <div className='cardss'>
	<div className='items'>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='title'>Customer support</Card.Title>
      
        <Card.Text>
          Contact us for on going trips with our customer support team
        </Card.Text>
        <Card.Link href="tel:+1234567890" className='card-link'>Call</Card.Link>
        <Card.Link href="mailto:victoriasneha04@gmail.com">Email</Card.Link>
      </Card.Body>
    </Card>
	</div>
	<div className='items'>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='title'>EMI Support</Card.Title>
      
        <Card.Text>
            EMI-related assistance or to discuss your repayment plan.
        </Card.Text>
        <Card.Link href="tel:+1234567890">Call</Card.Link>
        <Card.Link href="mailto:victoriasneha04@gmail.com">Email</Card.Link>
      </Card.Body>
    </Card>
	</div>
	<div className='items'>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='title'>Complaint/Query Support</Card.Title>
      
        <Card.Text>
        
		For any complaints or queries related to your travel experience
        </Card.Text>
        <Card.Link href="tel:+1234567890">Call</Card.Link>
        <Card.Link href="mailto:victoriasneha04@gmail.com">Email</Card.Link>
      </Card.Body>
    </Card>
	</div>
	</div>
  <div className='contact-container'>
	<div className='mainbranch'>
		<h2>Main Branch</h2>
    
		<address>
			1/253,Ajay building,East Street,Anna nagar,Trichy 
<p>call 6385468335	<br />
		tele: 0431-006723</p>	
		</address>

	</div>
  <div>
  <Enquireform/>
  </div>
  </div>
  
  </>
  
  )
  
}

export default Contact