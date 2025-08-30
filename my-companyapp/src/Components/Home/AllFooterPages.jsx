import React from 'react'
import logo from '../../assets/logo.png'
import brochures from '../../assets/Brochures.png'
import google from '../../assets/Google.png'

const AllFooterPages = () => {
  return (
    <div className='footer'>
        <div className="footer-flex">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <div className="social-icons2">
        <p className='facebook'><ion-icon name="logo-facebook"></ion-icon></p>
        <p className='twitter'><ion-icon name="logo-twitter"></ion-icon></p>
        <p className='instagram'><ion-icon name="logo-instagram"></ion-icon></p>
         <p className='pinterest'><ion-icon name="logo-pinterest"></ion-icon></p>
         <p className='youtube'><ion-icon name="logo-youtube"></ion-icon></p>
        </div>
            </div>
            <div className="content1">
                <h5>SERVICES</h5>
                <ul>
                    <li>Web Development</li>
                    <li>Web Design</li>
                    <li>Search Engine Optimization</li>
                    <li>Content Marketing</li>
                    <li>Influencer Marketing</li>
                    <li>Cloud Telephone</li>

                </ul>
                <div className="content2">
                    <h5>MARKETING TOOLS</h5>
                    <ul>
                        <li> Low Cost Bulk SMS Coimbatore</li>
                        <li>Voice Call</li>
                        <li>Email Marketing</li>
                        <li>Whatsapp API</li>
                        <li>Missed Call Services</li>
                    </ul>
                </div>
            </div>
            <div className="content3">
                <h5>CONTACT INFO</h5>
                <p className='para1'>No 469-C, 2nd Floor,<br/> Dhanaraaj Building, Kalki<br/> nagar, Avinashi Road (near<br/> Anjaneyar Temple),<br/> Peelamedu, Coimbatore -<br/> 641004</p>
                <p className='para2'>Email: sales@creativepoint.in<br/>
                    Phone: +91 99941 75754<br/>
                    Phone: +91 96777 75754<br/>
                    HR: +91 98433 75754</p>

            </div>

            <div className="content4">
                <h5>PAYMENT</h5>
                <p>Online Payment</p>

                <div className="content5">
                    <h4>BRANDING</h4>
                    <ul>
                        <li>Brand Consulting</li>
                        <li>Brand Design</li>
                        <li>Brand Development</li>
                    </ul>
                </div>
                <div className="content6">
                    <img src={brochures} alt="" />
                </div>

                <div className="content7">
                    <img src={google} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllFooterPages