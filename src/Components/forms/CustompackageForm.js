import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import "../../assests/css/custompackageform.css"
function CustompackageForm() {
  return (
    <Form className="custom-form">
      <Row>
        {/* Personal Details */}
        <Col md={6}>
          <h3>Personal Details</h3>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" placeholder="" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Special request</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="" />
          </Form.Group>
        </Col>

        {/* Travel Details */}
        <Col md={6}>
          <h3>Travel Details</h3>
          <Form.Group className="mb-3" controlId="formBasicDestination">
            <Form.Label>Destination city</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDestination">
            <Form.Label>Destination country</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDestination">
            <Form.Label>Departure city</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDestination">
            <Form.Label>No of adults</Form.Label>
            <Form.Control type="number" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDestination">
            <Form.Label>No of childrem</Form.Label>
            <Form.Control type="number" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Travel from</Form.Label>
            <Form.Control type="date" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Travel to</Form.Label>
            <Form.Control type="date"  />
          </Form.Group>
         
          
          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label>Accomodation</Form.Label>
            <Form.Control as="select">
            <option>Select</option>
              <option>Hotel</option>
              <option>Resort</option>
              <option>Villa</option>
              <option>Hostel</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label>Vacation type</Form.Label>
            <Form.Control as="select">
            <option>Select</option>
              <option>Honeymoon</option>
              <option>Family tour</option>
              <option>Friends trip</option>
              <option>Corporate</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CustompackageForm;
