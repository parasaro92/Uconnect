import './App.css';
import Navigation from './Components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Signup from './Components/pages/Signup';
import Profile from './Components/pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/profile' element={<Profile />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;