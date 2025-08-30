import React from 'react'

const ContactSection3 = () => {
  return (
    <div className='contact_section3'>
        <h4>Enquiry Form</h4>
        <form className='form'>
            <label htmlFor="name">Name</label>
            <input type="text" required />


            <label htmlFor="email">Email Address</label>
            <input type="email" required />


            <label htmlFor="phone">Phone</label>
            <input type="number" required />


            <label htmlFor="city">City</label>
            <input type="text" required />


            <label htmlFor="des">Description</label>
            <textarea rows={4}></textarea>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default ContactSection3