import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'


const HomeHeader = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <div className="navbar">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/About">About Us</Link></li>
                  <li><Link to="/Careers">Careers</Link></li>
                  <li><Link to="/Contact">Contact Us</Link></li>
                <div className="nav-icons">
                <p><i class='bxr  bx-search'  ></i> </p>
                <p><i class='bxr  bx-envelope'  ></i> </p>
                <p><i class='bxr  bx-location'  ></i> </p>
                </div>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default HomeHeader