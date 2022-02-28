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
                            <p className='pt20'> NextBase has state-of-the-art research facilities and a conducive environment
                             for high quality and collaborative research.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 pt30 pb30" style={{ backgroundImage: `linear-gradient(to right, rgb(255, 255, 255), rgb(227, 229, 236)`}}>
                            <div className="service-img-text">
                                <h3>Our Short Courses</h3>
                                <p>We denounce with righteos indignation and dislikes men who are so beguiled
                                    demoralized cof
                                    pleasure of the moment.</p>
                                <ul>
                                    <li><i><BsCheckCircle/></i>Hadoop and other Big data platforms</li>
                                    <li><i><BsCheckCircle/></i>Licensed OCR tool</li>
                                    <li><i><BsCheckCircle/></i>Luigi workflow manager</li>
                                    <li><i><BsCheckCircle/></i>Distributed setup on Cloud for speed</li>
                                    <li><i><BsCheckCircle/></i>Django framework</li>
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
