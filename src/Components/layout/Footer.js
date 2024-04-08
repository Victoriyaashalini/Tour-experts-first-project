import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assests/images/logg_edited.jpg";
import "../../assests/css/footer.css";

function Footer() {
  return (
    <footer className="fixed-bottom bg-dark text-light py-4 footer">
      <Container className="text-center">
        <Row className="gx-5 justify-content-center footer-container">
          <Col sm={6} md={3}>
            <div className="logo">
              <img src={logo} alt="" className='img-logo' />
            </div>
            <br />
            <p className='footer-text'>Welcome to Tour Experts, We offer an extensive range of meticulously curated packages designed to provide you with a premier experience, ensuring both comfort and satisfaction throughout your journey.</p>
            <p className='email'>Email us: tourexperts@gmail.com</p>
          </Col>
          <Col sm={6} md={3}>
            <div className="address-container">
              <h4>Main Branch Address</h4>
              <div className="add">
                <address>
                  1/253, Ajaybuilding, East Street, Anna nagar, Trichy
                  <p>Call 6385468335<br />
                  Tele 0431-006723</p>
                </address>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="links-container">
              <h4> Navigate Links</h4>
              <div className="links">
                <ul className="list-unstyled">
                  <li><Link to="/about" className="text-light">Home</Link></li>
                  <li><Link to="/contact" className="text-light">About</Link></li>
                  <li><Link to="/services" className="text-light">Packages</Link></li>
                  <li><Link to="/about" className="text-light">Popular Tours</Link></li>
                  <li><Link to="/contact" className="text-light">Customize</Link></li>
                  <li><Link to="/services" className="text-light">Contact us</Link></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="icon-container">
              <h5>Social Media & Newsletter</h5>
              <div className='icons'>
                <a href="#" className="text-light me-3 social-icon-container facebook-icon-container"><FaFacebook className="social-icon" /></a>
                <a href="#" className="text-light me-3 social-icon-container instagram-icon-container"><FaInstagram className="social-icon" /></a>
                <a href="#" className="text-light me-3 social-icon-container whatsapp-icon-container"><FaWhatsapp className="social-icon" /></a>
                <a href="#" className="text-light me-3 social-icon-container youtube-icon-container"><FaYoutube className="social-icon" /></a>
              </div>
              <Form className="mt-3">
                <Form.Group controlId="newsletterEmail">
                  <Form.Label>Subscribe to our newsletter</Form.Label>
                  <Row>
                    <Col xs={8}>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Col>
                    <Col xs={4}>
                      <Button variant="light" type="submit">Subscribe</Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="copyright-text">© {new Date().getFullYear()} Tour Experts. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
