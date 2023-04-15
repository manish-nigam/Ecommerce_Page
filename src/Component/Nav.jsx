import React, { useContext } from 'react';
import './Nav.css'
import { Link, useNavigate  } from 'react-router-dom';
import { AuthContext } from './Context';
const Nav = () => {
  const navigate = useNavigate()
  const {setIsloggedIn}  = useContext(AuthContext);


  function handle(){
    setIsloggedIn(false);
    navigate("/");
  }
  return (
    <div className='nav'>
      <div id='title'>
        <h2>React Navbar</h2>
      </div>
      <div id='menu'>
        
         <Link to = "/" >Home</Link>
         <Link to = "/tech" >Technologies</Link>
         <Link to = "/products" >Products</Link>
         <Link to = "/contact" >ContactUs</Link>
        <button onClick={handle
        }>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
