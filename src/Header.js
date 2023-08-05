import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';
const Header = () => {
    // const navigate = useNavigate();
  return (
    <div style={{ boxShadow: "0px 0px 40px 4px rgba(0, 0, 0, 0.15)"}}>
      <header className="main-header">
    <nav>
        <ul>
            <li> <Link to="/dashboard">Home</Link></li>
            <li><Link to="/add-pets">Add Customer</Link></li>
            <li><Link to="/service">Services</Link></li>
            {/* <li><a href="#">Contact</a></li> */}
        </ul>
    </nav>
</header>
    </div>
  )
}

export default Header
