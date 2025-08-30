import React from 'react'
import Capture_image1 from '../../assets/Capture1.JPG'
import Capture_image2 from '../../assets/Capture2.JPG'
import Capture_image3 from '../../assets/Capture3.JPG'

const HomeSection2 = () => {
  return (
    <div className='section2'>
        <h1>Find the tools to make<br/><span>your dreams come true!</span></h1>
        <div className="section-flex">
            <div className="box">
                <img src={Capture_image1} alt="" />
                <div className="name">Web Design & Development</div>
                <div className="para">The concept behind any website is, showing your services are latest & offering that with present transforming your business from physical to digital....</div>
                <div className="more">Learn More</div>
            </div>

            <div className="box">
                <img src={Capture_image2} alt="" />
                <div className="name">ECommerce</div>
                <div className="para">E-Commerce Store By transforming your business . Over 44% of the Indian population is using online shopping...</div>
                <div className="more">Learn More</div>
            </div>

            <div className="box">
                <img src={Capture_image3} alt="" />
                <div className="name">Search Engine Optimization</div>
                <div className="para">The main reason for poor profit in any business is simply lagging in Google ranking. We provide you with some consistent .....</div>
                <div className="more">Learn More</div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection2