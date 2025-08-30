import React from 'react'
import HomeHeader from '../Home/HomeHeader'
import CareersSection1 from './CareersSection1'
import CareersSection2 from './CareersSection2'
import CareersSection3 from './CareersSection3'
import CareersSection4 from './CareersSection4'
import CareersSection5 from './CareersSection5'
import CareersSection6 from './CareersSection6'
import CareersSection7 from './CareersSection7'
import CareersSection8 from './CareersSection8'
import AllFooterPages from '../Home/AllFooterPages'
import AllCopyRightsPages from '../Home/AllCopyRightsPages'

const AllCareerPages = () => {
  return (
    <div>
      <HomeHeader/>
      <CareersSection1/>
      <CareersSection2/>
      <CareersSection3/>
      <CareersSection4/>
      <CareersSection5/>
      <CareersSection6/>
      <CareersSection7/>
      <CareersSection8/>
      <AllFooterPages/>
      <AllCopyRightsPages/>
    </div>
  )
}

export default AllCareerPages