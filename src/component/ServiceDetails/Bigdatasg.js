import React from 'react'
import img1 from '../../assets/img/service-details/bigsd2.jpg'
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
                        
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 pb30 pt30" style={{ backgroundImage: `linear-gradient(to right, rgb(255, 255, 255), rgb(227, 229, 236)`}}>
                            <div className="service-img-text">
                                <h3>Big Data Consultation</h3>
                                <p>Leverage our big data consulting services to assess and optimize your current big data solution,
                                     define a product strategy, and identify best-fit technologies that will help you convert your data
                                      into revenue opportunities.</p>
                                <ul>
                                    <li><i><BsCheckCircle/></i>Digital Consulting</li>
                                    <li><i><BsCheckCircle/></i>Solution Discovery</li>
                                    <li><i><BsCheckCircle/></i>Experience Design</li>
                                    <li><i><BsCheckCircle/></i>Technology Advisory</li>
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
