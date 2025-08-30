import React from 'react'
import company_images from '../../assets/Companies.JPG'

const HomeSection5 = () => {
  return (
    <div className='section5'>
        <h1>Few of our <span>Amazing Clients</span></h1>
        <p>We help businesses of all sizes get seen, attract visitors, and succeed.</p>
        <img src={company_images} alt="" />
    </div>
  )
}

export default HomeSection5