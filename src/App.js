import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AdminApp from './components/Admin/AdminApp';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Event from './components/Event';
import Contact from './components/Contact';
import Eventdetails from './components/Eventdetails';
import Footer from './components/Footer';
import LandingPage from './components/Landingpage/LandingPage';


function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");

  useEffect(() => {
    fetch("/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRole(data.user.role);
        setLoggedInUserId(data.user.id);
      });
  }, [storedToken]);

  return (
    <div>
    {storedToken ? (
      <Router>
        {role === "admin"? <AdminApp setStoredToken={setStoredToken}/> : 
        <div>
        <Navbar setStoredToken={setStoredToken}/>
        <Routes>
        <Route path= '/' element={<Home/>} exact/>
        <Route path= '/about' element={<About setStoredToken={setStoredToken}/>} exact />
        <Route path= '/events' element={<Event setStoredToken={setStoredToken}/>} exact />
        <Route path= 'events/:id' element={<Eventdetails setStoredToken={setStoredToken}/>} />
        <Route path= 'events/:id/book_event' element={<h2>Booking form {/*setStoredToken={setStoredToken}*/} </h2>} />
        <Route path= '/contact' element={<Contact setStoredToken={setStoredToken}/>} exact />
        </Routes>
        <Footer />
        </div>}
        
      </Router>
    ) : (
      <div>
      <Router>
      <Routes>
        <Route path ="/" element={<LandingPage setStoredToken={setStoredToken}/>}/>
        <Route path="/login" element={<Login setStoredToken={setStoredToken}/>} exact/>
        <Route path="/signup" element={<Signup setStoredToken={setStoredToken}/>} exact/>
      </Routes>
      </Router>
      </div>
    )}
  </div>
  );
}

export default App;
