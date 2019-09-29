import React, { useEffect, useContext, useState  } from 'react';

import logo from '../images/logo.svg';
import {  FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import roomContext from '../context/room/roomContext';




const  Navbar = () => {

  const [isOpen, setIsOpen ] = useState(false);
  
  // const roomContext1 = useContext(roomContext);
  // console.log(roomContext1);
  // const { getRoomsData, rooms } = roomContext1;

  // useEffect(  () => {
  //   getRoomsData();
  //   console.log(roomContext1);
  // }, [])



  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort"/>
          </Link>
          <button 
            type="button" 
            className="nav-btn"
            onClick={ setIsOpen(!isOpen) }
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={ isOpen ? "nav-links show-nav" : "nav-links" }>
          <Link to="/">
            Home
          </Link>
          <Link to="/rooms">
            Rooms
          </Link>
        </ul>
      </div>
    </nav>
  )
  
}

export default  Navbar;
