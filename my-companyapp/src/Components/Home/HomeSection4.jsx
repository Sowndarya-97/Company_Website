import React from 'react'
import cover_image from '../../assets/image1.png'

const HomeSection4 = () => {
  return (
    <div className='section4'>
        <div className="section-flex1">
            <div className="content">
        <h1>Why We're the Perfect<br/> <span>Choice for You?</span></h1>
        <p className='para2'>Our digital marketing services are superior at helping your company improve and grow its online presence and build your business. Through our SEO (Search Engine Optimization) services, we can help your website rank higher in order to receive organic traffic and customers. Through Social Media Marketing (SMM), we can help create impactful social media strategies to raise awareness and increase engagement across all of the major platforms.</p>
        <a href="#">View More</a>
        </div>
        <div className="section-flex1">
            <img src={cover_image} alt="" />
        </div>
        </div>
    </div>
  )
}

export default HomeSection4