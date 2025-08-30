import React from 'react'
import quote_images from '../../assets/quotes.jpg'
const ContactSection2 = () => {
  return (
    <div className='contact_section2'>
        <div className="contact-flex">
        <img src={quote_images} alt="" />
        <h1>Contact Us</h1>
        <div className="contact-boxes">
            <div className="contact-box1">
                <h3>CONTACT ADDRESS</h3>
                <p>No 469-C, 2nd Floor, Dhanaraaj Building, Kalki nagar,
            Avinashi Road (near Anjaneyar Temple),
            Peelamedu, Coimbatore – 641004
            Tamil Nadu, India</p>
            </div>
            <div className="contact-box2">
                <h3>LET'S TALK</h3>
                <div className="para1">
                    <span>Business Enquiry:<br/></span> +91 99941 75754,<br/> +91 98944 75754
                </div>
                <div className="para2">
                    <span>Customer Support: <br/></span> +91 96777 75754,<br/> +91 99946 75754
                </div>
                <div className="para3">
                    <span>Job Enquiry:<br/></span> +91 98433 75754
                </div>
            </div>
            <div className="contact-box3">
                <h3>EMAIL US</h3>
                <p>sales@creativesolutions.in
                <br/>shuddhi.rs@creativesolutions.in</p>
            </div>
            <div className="contact-box4">
                <h3>WORKING HOURS</h3>
                <p>Mon to Sat – 9 AM to 11 PM
                        <br/>
                    Sunday – 10 AM to 6 PM</p>
            </div>
        </div>
        </div>
        

    </div>
  )
}

export default ContactSection2