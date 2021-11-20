import React from 'react'
import Banner from '../component/HomeFour/Banner'
import Analysis_Work from '../component/HomeFour/AnalysisWork'
import Our_Features from '../component/HomeFour/OurFeature'
import WorkingProcess from '../component/Home/OurWorkingProcess/WorkingProcess'
import Pricing from '../component/Home/Pricing/Pricing'
import Clients from '../component/HomeFour/Clients'
import Faqs from '../component/HomeFour/Faqs'
import DownloadApp from '../component/HomeFour/Download'
import Blog from '../component/Home/Blog/Blog'
const HomeFour = () => {
    return (
        <>
          <Banner/>
          <Analysis_Work/>
          <Our_Features/>
          <WorkingProcess className="bg-color"/>
          <Pricing/>
          <Clients/>
          <Faqs/>
          <DownloadApp className="bg-color" />
          <Blog />
        </>
    )
}

export default HomeFour
