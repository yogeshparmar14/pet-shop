// Login.js
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Login.css';
import { useNavigate } from "react-router-dom";
 
const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    // const data = {
    //     email,
    //     password,
    // };
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: email,
          password: password,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    if(result){
        localStorage.setItem('token',result?.token);
      navigate("/dashboard");}
  };

  return (
    <div className="container">
    <div className="login form">
      <header>Login</header>
      {/* <form action="#"> */}
        <input type="text" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/>
         <p className='error'>use "kminchelle" for login instead of email</p>
        <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <p  className='error' style={{top: "55%"}}>use "0lelplR" for login instead of password</p>
        <a href="">Forgot password?</a>
        <input type="button" className="button" value="Login" onClick={()=>{console.log("hello ji");handleSubmit()}}/>
      {/* </form> */}
      <div className="signup">
        <span className="signup">Don't have an account? 
        <Link to="/signup">Signup</Link>
        </span>
      </div>
    </div>

  </div>
  );
};

export default Login;
