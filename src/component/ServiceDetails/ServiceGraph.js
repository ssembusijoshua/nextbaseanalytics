import React from 'react'
import img1 from '../../assets/img/service-details/biosd4.jpg'
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
                            <p className='pt20'> NextData AFRICA has state-of-the-art research facilities and a conducive environment
                             for high quality and collaborative research.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 pb30 pt30" style={{ backgroundImage: `linear-gradient(to right, rgb(255, 255, 255), rgb(227, 229, 236)`}}>
                            <div className="service-img-text">
                                <h3>Bioinformatics Research Areas</h3>
                                <p>High-quality research. A unique combination of science, technology and business</p>
                                <ul>
                                    <li><i><BsCheckCircle/></i>Genomics</li>
                                    <li><i><BsCheckCircle/></i>Synthetic Biology</li>
                                    <li><i><BsCheckCircle/></i>Disease Biology</li>
                                    <li><i><BsCheckCircle/></i>Systems Biology / Bioinformatics</li>
                                    <li><i><BsCheckCircle/></i>Policy Research</li>
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
