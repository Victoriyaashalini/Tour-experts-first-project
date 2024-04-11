import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Offcanvas, Container, Form, Button } from 'react-bootstrap';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/images/logg_edited.jpg'; // Make sure to import your logo file

const OffcanvasNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [destinationDropdownOpen, setDestinationDropdownOpen] = useState(false);
  const [packagesDropdownOpen, setPackagesDropdownOpen] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="navbar" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/"><img src={logo} alt="" className='img-logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
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
                className="custom-dropdown"
              >
                {/* Destination Dropdown items */}
              </NavDropdown>
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
                className="custom-dropdown"
              >
                {/* Packages Dropdown items */}
              </NavDropdown>
              <Nav.Link as={NavLink} to="/popular-tours" className="nav-link">Popular Tours</Nav.Link>
              <Nav.Link as={NavLink} to="/customize" className="nav-link">Customize</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas */}
      <Navbar.Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {/* Offcanvas NavLinks */}
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
          </Container>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
};

export default OffcanvasNavbar;
