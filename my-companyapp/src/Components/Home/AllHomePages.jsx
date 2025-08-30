import React from 'react'

import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'
import HomeSection3C from './HomeSection3C'
import HomeSection4 from './HomeSection4'
import HomeSection5 from './HomeSection5'
import AllFooterPages from './AllFooterPages'
import HomeHeader from './HomeHeader'
import AllCopyRightsPages from './AllCopyRightsPages'




const AllHomePages = () => {
  return (
    <div>
        <HomeHeader/>
        
        <HomeSection1/>
        <HomeSection2/>
        <HomeSection3C/>
        <HomeSection4/>
        <HomeSection5/>
        <AllFooterPages/>
        <AllCopyRightsPages/>
    </div>
  )
}

export default AllHomePages