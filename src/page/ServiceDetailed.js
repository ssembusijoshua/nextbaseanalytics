import React from 'react'
import CommonBanner from '../component/Common/Banner'
import Servicedetailed from '../component/DetailService/Servicedetailed'

const ServiceDetailed = () => {
    return (
        <>
            <CommonBanner heading="Service Details" menu1="Home" menu2="Service Details"/>
            <Servicedetailed/>
        </>
    )
}

export default ServiceDetailed
