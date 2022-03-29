import "./App.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/SignIn";
import Signup from "./Components/pages/Signup";
import Profile from "./Components/pages/Profile";
import CreatePost from "./Components/pages/CreatePost";
import Reset from "./Components/pages/Reset";
import Newpassword from "./Components/pages/Newpassword";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreatePost />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route path="/reset/:token" element={<Newpassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
