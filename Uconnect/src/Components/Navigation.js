import React,{useContext} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Navigation = () => {
  const {state,dispatch} = useContext(UserContext)
  const history = useNavigate()
  const renderList = () =>{
    if (state){
            return [<li key={'Home'}><Link to="/home">Home</Link></li>,            
            <li key={'Profile'}><Link to="/profile">Profile</Link></li>,
            <li key={'createPost'}><Link to="/create">Create Post</Link></li>,
            <li key={'logOut'}><button className="btn waves-effect waves-light #64b5f6 blue lighten-2" 
            onClick={()=>{
              localStorage.clear()
              dispatch({type:'CLEAR'})
              history('/signin')
            }}>Log Out</button></li>]
    }
    else{
          return [<li key={'signIn'}><Link to="/signin">Signin</Link></li>,
         <li key={'signUp'}><Link to="/signup">Signup</Link></li>]
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg = "primary" variant = "dark">
    <Container>
    <Link to={state?'/':'/signin'}>
      <Navbar.Brand className="logo">
        Uconnect
      </Navbar.Brand>
    </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul>
          <Nav className="">
            {renderList()}
          </Nav>
        </ul>
      </Navbar.Collapse>
    </Container>
  </Navbar >
  )
}

export default Navigation