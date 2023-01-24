
import React from 'react';
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./signup.css"


const Signup = ({setStoredToken}) => {

  const navigate = useNavigate();
 const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://eventify-app.onrender.com/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          password_confirmation
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        console.log(data);
        setStoredToken(data.jwt);
        navigate("/");
      });

    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation('');
  };



    return ( 
      <div className="signup_page">
      <span className="signup__Title">Signup</span>
      <form className="signup__Form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="username" id="name" name="name" />
          <label>Email</label>
          <input value={email} className="signup__Input" type="text" placeholder="Enter email..."
           onChange={(e)=>setEmail(e.target.value)} id="email" name="email"
          />
          <label>Password</label>
          <input value={password} className="signup__Input" type="password" placeholder="Enter password..."
           onChange={(e)=>setPassword(e.target.value)} id="password" name="password"
          />
          <label>Password Confirmation</label>
          <input value={password_confirmation} className="signup__Input" type="password" placeholder="Confirm password..."
           onChange={(e)=>setPasswordConfirmation(e.target.value)} id="password_confirmation"  name="password_confirmation" 
          />
          <button className="signup__Butt" type="submit">Signup</button>
          <p>
          Already have an account?
          <Link to="/login" className="linktag">
            Login
          </Link>
          </p>
      </form>
  </div>
       )
    };
 
export default Signup;

