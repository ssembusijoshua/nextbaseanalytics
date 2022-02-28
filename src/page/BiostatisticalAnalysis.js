import React from 'react'
import SingleServiceDetails from '../component/ServiceDetails/Biostatisticssd'
// import RelatedServices from '../component/ServiceDetails/RelatedServices'
import ServiceGraph from '../component/ServiceDetails/Biostatisticsg'

const BiostatisticalAnalysis = () => {
    return (
        <>
            <SingleServiceDetails/>
            {/* <RelatedServices/> */}
            <ServiceGraph/>
        </>
    )
}

export default BiostatisticalAnalysis