import React from 'react'
import img1 from '../../assets/img/service-details/1.jpg'
import {BsCheckCircle} from "react-icons/bs";

function ServiceGraph() {
    return (
        <>
            <section id="service-img-details" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="service-img-details">
                                <img alt="" src={img1} />
                            </div>
                            <p className='pt20'>The unique needs of any organization practicing data management may require a blend of some or all of these approaches.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 pb30 pt30" style={{ backgroundImage: `linear-gradient(to right, rgb(255, 255, 255), rgb(227, 229, 236)`}}>
                            <div className="service-img-text">
                                <h3> Data Management Cont'd</h3>
                                <p> NextBase Data management experts generally focus on specialties within the field.
                                   These specialties can fall under one or more of the following areas:</p>
                                <ul>
                                    <li><i><BsCheckCircle/></i>Master data management</li>
                                    <li><i><BsCheckCircle/></i>Data stewardship</li>
                                    <li><i><BsCheckCircle/></i>Data quality management</li>
                                    <li><i><BsCheckCircle/></i>Data security</li>
                                    <li><i><BsCheckCircle/></i>Data governance</li>
                                    <li><i><BsCheckCircle/></i>Data warehousing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceGraph
