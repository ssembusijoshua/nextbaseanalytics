import React from 'react'
import Banner from '../component/HomeTwo/Banner'
import BannerBottom from '../component/HomeTwo/BannerBottom'
import HomeTwo from '../component/HomeTwo/Serviceheader'
// import About from '../component/HomeThree/About'
// import OurService from '../component/Home/OurService/OurServices'
import HowItWorks from '../component/HomeThree/HowItWork'
// import DataCompromise from '../component/HomeThree/DataCompromise'
// import Faqs from '../component/HomeTwo/OurFaqs'
// import OurClient from '../component/HomeThree/Clients'
// import Pricing from '../component/Home/Pricing/Pricing'
/*import Blogs from '../component/Common/Blog'*/
const HomeThree = () => {
    return (
        <>
           <Banner/>
           {/* <About/> */}
           <HomeTwo/>
           <BannerBottom/>
           {/* <OurService tilt={"tilt"}/> */}
           <HowItWorks/>
           {/* <DataCompromise/> */}
           {/* <Faqs className="bg-color"/> */}
           {/* <OurClient/> */}
           {/* <Pricing className="bg-color" /> */}
           {/* <Blogs tilt={"tilt"}/> */}
        </>
    )
}

export default HomeThree
