import React from 'react'
import Capture_image4 from '../../assets/Capture4.JPG'
import Capture_image5 from '../../assets/Capture5.JPG'
import Capture_image6 from '../../assets/Capture6.JPG'

const HomeSection3C = () => {
  return (
    <div className='section3'>
        <div className="section-flex">
            <div className="box">
                <img src={Capture_image4} alt="" />
                <div className="name">Website Redesigning</div>
                <div className="para">The concept behind any website is, showing your services are latest & offering that with present....</div>
                <div className="more">Learn More</div>
            </div>

            <div className="box">
                <img src={Capture_image5} alt="" />
                <div className="name">Content Writing</div>
                <div className="para">The art of touching every reader is hidden in the letters. To attract the attention of viewers of your website....</div>
                <div className="more">Learn More</div>
            </div>

            <div className="box">
                <img src={Capture_image6} alt="" />
                <div className="name">Local Marketing</div>
                <div className="para">By providing “A-Graded” service to your domestic consumers, the product reaches your regional....</div>
                <div className="more">Learn More</div>
            </div>

            
        </div>
    </div>
  )
}

export default HomeSection3C