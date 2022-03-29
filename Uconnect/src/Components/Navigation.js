import React,{useContext,useRef,useEffect,useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import M from 'materialize-css'
const Navigation = () => {
  const searchModal = useRef(null)
  const [search,setSearch] = useState('') 
  const [userDetails,setUserDetails] = useState([])
  const {state,dispatch} = useContext(UserContext)
  const history = useNavigate()
  useEffect(()=>{
    M.Modal.init(searchModal.current)
  },[])
  const renderList = () =>{
    if (state){
            return [
            <li key="1"><i data-target="modal1"  className="large material-icons modal-trigger" style={{color:"white"}}>search</i></li>  ,
            <li key={'Home'}><Link to="/">Home</Link></li>,             
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


const fetchUsers = (query)=>{
  setSearch(query)
  fetch('/search-users',{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    bosy:JSON.stringify({
      query
    })
  }).then(res=>res.json())
  .then(results=>{
    setUserDetails(results.user)
    
  })

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

   

  <div id="modal1" className="modal" ref={searchModal} style={{color:"black"}}>
    <div className="modal-content">
    <input type="text" 
      className="form-control"
      placeholder="Search users" value={search} 
      onChange={(e)=>fetchUsers(e.target.value)}/>
        <ul className="collection">
          {userDetails.map(item=>{
            return   <li className="collection-item">{item.email}</li>
          })}
            
            
              
            
            
      </ul>
    </div>
    <div className="modal-footer">
      <button  className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>close</button>
    </div>
  </div>
          
  </Navbar >
  )

}

export default Navigation