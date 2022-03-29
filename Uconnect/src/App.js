import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';
import Home from './Components/pages/Home';
import Login from './Components/pages/SignIn';
import Signup from './Components/pages/Signup';
import Profile from './Components/pages/Profile';
import CreatePost from './Components/pages/CreatePost';
import { reducer } from './Components/reducers/userReducer';
import UserProfile from './Components/pages/UserProfile';

export const UserContext = createContext()

const Routing = ()=>{
  const history=useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:'USER',payload:user})
      //history('/')
    }
    else{
      history('/signin')
    }
  },[])
  return(
    
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/profile' element={<Profile />} /> 
          <Route path='/create' element={<CreatePost />} />
          <Route path='/profile/:userid' element={<UserProfile />} />  
        </Routes>

  )
}

function App() {
  const [state,dispatch] = useReducer(reducer) //initialState
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <div>
        <Navigation />
        <Routing />
      </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
