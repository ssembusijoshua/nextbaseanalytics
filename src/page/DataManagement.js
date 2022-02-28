import React from 'react'
import SingleServiceDetails from '../component/ServiceDetails/Datamanagssd'
// import RelatedServices from '../component/ServiceDetails/RelatedServices'
import ServiceGraph from '../component/ServiceDetails/Datamanagsg'

const DataManagement = () => {
    return (
        <>
            <SingleServiceDetails/>
            {/* <RelatedServices/> */}
            <ServiceGraph/>
        </>
    )
}

export default DataManagement