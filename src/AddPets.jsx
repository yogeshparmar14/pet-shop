import React, { useState } from 'react'
import Header from './Header'
import { Link} from 'react-router-dom';
const AddPets = () => {
  const [customerName,setCustomerName]=useState("")
  const [customerEmail,setCustomerEmail]=useState("")
  const [petName,setPetName]=useState("")
  const handleSubmit = async() => {
    const data = {
      customerName,
      customerEmail,
      petName,
  };
    const response = await fetch('http://localhost:8000/user/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  const result = await response.json();
  };
  return (
    <div>
      <Header/>
      <div className="container">

    <div className="login form">
      <header>Add Customer</header>
      {/* <form action="#"> */}
        <input type="text" placeholder="Enter customer name" onChange={(e)=>{setCustomerName(e.target.value)}}/>
        <input type="text" placeholder="Enter customer Email" onChange={(e)=>{setCustomerEmail(e.target.value)}}/>
        <input type="text" placeholder="Enter pet name" onChange={(e)=>{setPetName(e.target.value)}}/>
        <input type="button" className="button" value="Submit" onClick={()=>{handleSubmit()}}/>
      {/* </form> */}
      <div className="signup">
        
      </div>
    </div>
    
  </div>
    </div>
  )
}

export default AddPets
