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
           <li><Link to="/home">Home</Link></li> 
            <li><Link to="/signin">Signin</Link></li>
          <li><Link to="/signup">Signup</Link></li>  
         <li> <Link to="/profile">Profile</Link></li>  
          <li><Link to="/create">Create Post</Link></li> 
          {/* <li>
            <button className="btn #c62828 red darken-3"
            onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})

            }}
            >
              Logout
            </button>
         </li>   */}

            
          </Nav>
        </ul>
      </Navbar.Collapse>
    </Container>
  </Navbar >
  )
}

export default Navigation