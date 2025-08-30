import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'


const HomeHeader1 = () => {
  return (
    <div className='header'>
            <div className="logo">
                <img src={logo} alt="logo" />
                <div className="navbar">
                    <ul>
                      <Link to="/"><li>Home</li></Link>
                      <Link to="/About"><li>About Us</li></Link>
                      <Link to="/Careers"><li>Careers</li></Link>
                      <Link to="/Contact"><li>Contact Us</li></Link>
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

export default HomeHeader1