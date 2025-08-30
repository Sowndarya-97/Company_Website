import React from 'react'
import HomeHeader from '../Home/HomeHeader'
import AboutHeader from './AboutHeader'
import AboutSection1 from './AboutSection1'
import AboutSection2 from './AboutSection2'
import AboutSection3 from './AboutSection3'
import AboutSection4 from './AboutSection4'
import AboutSection5 from './AboutSection5'
import AboutSection6 from './AboutSection6'
import AllFooterPages from '../Home/AllFooterPages'
import AllCopyRightsPages from '../Home/AllCopyRightsPages'

const AllAboutPages = () => {
  return (
    <div>
        <HomeHeader/>
        <AboutSection1/>
        <AboutHeader/>
        <AboutSection2/>
        <AboutSection3/>
        <AboutSection4/>
        <AboutSection5/>
        <AboutSection6/>
        <AllFooterPages/>
        <AllCopyRightsPages/>
    </div>
  )
}

export default AllAboutPages