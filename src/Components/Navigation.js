import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg = "primary" variant = "dark">
    <Container>
    <Link to="/">
      <Navbar.Brand className="logo">
        Uconnect
      </Navbar.Brand>
    </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul>
          <Nav className="">
            <Link to="/home">Home</Link>
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/create">Create Post</Link>
          </Nav>
        </ul>
      </Navbar.Collapse>
    </Container>
  </Navbar >
  )
}

export default Navigation