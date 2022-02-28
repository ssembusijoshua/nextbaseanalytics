import React from 'react'
import SingleServiceDetails from '../component/ServiceDetails/SingleServiceDeatils'
import RelatedServices from '../component/ServiceDetails/RelatedServices'
import ServiceGraph from '../component/ServiceDetails/ServiceGraph'

const ServiceDetails = () => {
    return (
        <>
            <SingleServiceDetails/>
            <RelatedServices/>
            <ServiceGraph/>
        </>
    )
}

export default ServiceDetails
