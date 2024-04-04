import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas, Button, Form } from 'react-bootstrap';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Collapse from 'react-bootstrap/Collapse';
import { NavLink } from 'react-router-dom';
import '../../assests/css/Navbar.css';
import logo from "../../assests/images/logg_edited.jpg";

const CustomNavbar = () => {
  const [destinationDropdownOpen, setDestinationDropdownOpen] = useState(false);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingUp(currentScrollPos > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={`navbar ${scrollingUp ? 'sticky-scroll-up' : ''}`} sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/"><img src={logo} alt="" className='img-logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link">About</Nav.Link>
              <NavDropdown
                title={
                  <div>
                    Destination{' '}
                    {destinationDropdownOpen ? (
                      <FaAngleUp className="dropdown-arrow" />
                    ) : (
                      <FaAngleDown className="dropdown-arrow" />
                    )}
                  </div>
                }
                id="destination-dropdown"
                renderMenuOnMount={true}
                menuRole="menu"
                onToggle={() => setDestinationDropdownOpen(!destinationDropdownOpen)}
                className="custom-dropdown "
              >
                <Collapse in={destinationDropdownOpen}>
                  <div>
                    <NavDropdown.Item as={NavLink} to="/destination/asia" className="nav-link">Asia</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/destination/europe" className="nav-link">Europe</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/destination/north-america" className="nav-link">North America</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/destination/south-america" className="nav-link">South America</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/destination/africa" className="nav-link">Africa</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/destination/australia" className="nav-link">Australia</NavDropdown.Item>
                  </div>
                </Collapse>
              </NavDropdown>
              {/* Packages Dropdown */}
              <NavDropdown
                title={
                  <div>
                    Packages{' '}
                    {packagesDropdownOpen ? (
                      <FaAngleUp className="dropdown-arrow" />
                    ) : (
                      <FaAngleDown className="dropdown-arrow" />
                    )}
                  </div>
                }
                id="packages-dropdown"
                renderMenuOnMount={true}
                menuRole="menu"
                onToggle={() => setPackagesDropdownOpen(!packagesDropdownOpen)}
                className="custom-dropdown "
              >
                <Collapse in={packagesDropdownOpen}>
                  <div>
                    <NavDropdown.Item as={NavLink} to="/packages/adventure" className="nav-link">Adventure</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/packages/honeymoon" className="nav-link">Honeymoon</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/packages/family-tour" className="nav-link">Family Tour</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/packages/island" className="nav-link">Island</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/packages/luxury-escapes" className="nav-link">Luxury escapes</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/packages/wedding" className="nav-link">Wedding</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/packages/wildlife" className="nav-link">Wildlife</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/packages/group-travel" className="nav-link">Group Travel</NavDropdown.Item>
                  </div>
                </Collapse>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/popular-tours" className="nav-link">Popular Tours</Nav.Link>
              <Nav.Link as={NavLink} to="/customize" className="nav-link">Customize</Nav.Link>
              <Nav.Link as={NavLink} to="/Contact" className="nav-link">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/" onClick={() => setShowOffcanvas(false)}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={() => setShowOffcanvas(false)}>About</Nav.Link>
              {/* Add your other nav links here */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
