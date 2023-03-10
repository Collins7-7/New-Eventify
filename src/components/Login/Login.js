import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import {useState} from "react";
import "./Login.css";

function Login({setStoredToken}){

 const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://eventify-app.onrender.com/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          navigate("/");
        } else {
          alert("Invalid credentials");
        }
      });

    setUsername("");

    setPassword("");
  };

    return(
        <div className="login__page">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="username" id="name" name="name" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" className='loginButton'>Log In</button>
            <p className='login_signup'>
            Don't have an account? 
            <Link to="/signup" >
              Sign up
            </Link>
            </p>
        </form>
    </div>
    )
}

export default Login;