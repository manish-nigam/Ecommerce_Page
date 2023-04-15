import React from 'react';
import { Link , Outlet } from 'react-router-dom';
import "./Technologies.css"
const Technologies = () => {
  return (
    <div className='techContainer'>
        <div className='leftPanel'>
            <Link to = "html">HTML</Link>
            <Link to = "css">CSS</Link>
            <Link to = "js">Javascript</Link>
            <Link to = "react">React</Link>
        </div>
        <div className='rightPanel' >
            <Outlet/>
        </div>
         
    </div>
  );
}

export default Technologies;
