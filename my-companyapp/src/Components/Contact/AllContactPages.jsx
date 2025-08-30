import React from 'react'
import HomeHeader from '../Home/HomeHeader'
import ContactSection1 from './ContactSection1'
import ContactSection2 from './ContactSection2'
import ContactSection3 from './ContactSection3'
import ContactSection4 from './ContactSection4'
import ContactSection5 from './ContactSection5'
import AllFooterPages from '../Home/AllFooterPages'
import AllCopyRightsPages from '../Home/AllCopyRightsPages'

const AllContactPages = () => {
  return (
    <div>
      <HomeHeader/>
      <ContactSection1/>
      <ContactSection2/>
      <ContactSection3/>
      <ContactSection4/>
      <ContactSection5/>
      <AllFooterPages/>
      <AllCopyRightsPages/>
    </div>
  )
}

export default AllContactPages