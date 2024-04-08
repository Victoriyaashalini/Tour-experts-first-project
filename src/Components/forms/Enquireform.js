import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../assests/css/Enquireform.css'; 

const Enquireform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    packageType: '',
    dateOfTravel: '', // Initially empty
    numberOfPeople: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className="form-container">
      <div>
        <Form.Control type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <Form.Control type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <Form.Control type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <Form.Control type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        <Form.Control as="select" name="packageType" placeholder="Package Type" value={formData.packageType} onChange={handleChange}>
          <option>Select Package Type</option>
          <option>Package A</option>
          <option>Package B</option>
          <option>Package C</option>
        </Form.Control>
        <Form.Control type="date" name="dateOfTravel" placeholder="Date of Travel" value={formData.dateOfTravel} onChange={handleChange} />
        <Form.Control type="number" name="numberOfPeople" placeholder="Number of People" value={formData.numberOfPeople} onChange={handleChange} />
      </div>
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Enquireform;
