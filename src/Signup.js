// SignUp.js
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Signup.css';
import './Login.css'
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async() => {
    const data = {
      email,
      password,
    userType:"USER",
    termCondition:true

  };
    const response = await fetch('http://localhost:8000/user/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  const result = await response.json();
  if(result.status===200){
   
    navigate("/login");
  }
  };


  return (
    <div className="container">
    <div className="login form">
      <header>Signup</header>
      <form action="#">
        <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="password" placeholder="Confirm your password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        <a href="#">Forgot password?</a>
        <input type="button" className="button" value="Signup" onClick={()=>{handleSubmit()}}/>
      </form>
      <div className="signup">
        <span className="signup">Don't have an account? 
        <Link to="/">Login</Link>
        </span>
      </div>
    </div>
  </div>
  );
};

export default Signup;
