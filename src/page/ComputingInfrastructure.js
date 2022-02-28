import React from 'react'
import SingleServiceDetails from '../component/ServiceDetails/Computingssd'
// import RelatedServices from '../component/ServiceDetails/RelatedServices'
import ServiceGraph from '../component/ServiceDetails/Computingsg'

const ComputingInfrastructure = () => {
    return (
        <>
            <SingleServiceDetails/>
            {/* <RelatedServices/> */}
            <ServiceGraph/>
        </>
    )
}

export default ComputingInfrastructure