import React from 'react'
import SingleServiceDetails from '../component/ServiceDetails/SingleServiceDeatils'
// import RelatedServices from '../component/ServiceDetails/RelatedServices'
import ServiceGraph from '../component/ServiceDetails/ServiceGraph'

const Bioinformatics = () => {
    return (
        <>
            <SingleServiceDetails/>
            {/* <RelatedServices/> */}
            <ServiceGraph/>
        </>
    )
}

export default Bioinformatics