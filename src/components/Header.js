import React from 'react';
import logo1 from '../components/images/logo.png';
import logo2 from '../components/images/logo.png';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Home from './Home';

function Header() {
  return (
    <div className='header'>
     <div className='d-flex justify-content-around bg-light'>
        <div>
          <img src={logo1} alt='logo'></img>
        </div>
        <div className='d-flex align-items-center '>
          <h2>SS International School</h2>
        </div>   
        <div>
          <img src={logo2} alt='logo'></img>
        </div>
      </div>
      <Nav />
      <Home/>
    </div>
  );
}

export default Header;
