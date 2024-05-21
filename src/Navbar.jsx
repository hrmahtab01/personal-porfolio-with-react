import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'

function CustomNavbar() {
  return (
    <Navbar id='Navbar' expand="lg" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand className='navicon' href="#">Sam<span>Creative</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link className='home' href="#action1">Home</Nav.Link>
          <Nav.Link className='home' href="#action2">About</Nav.Link>
          <Nav.Link className='home' href="#action1">Project</Nav.Link>
          <Nav.Link className='home' href="#action2">Blog</Nav.Link>                
        </Nav>
        <Form className="d-flex">
          <Button className='navbtn' variant="outline-success">Contact Me</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default CustomNavbar;

