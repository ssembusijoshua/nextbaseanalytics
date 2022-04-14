import React from 'react'
import img1 from '../../assets/img/service-details/bs1.jpg'
import {BsCheckCircle} from "react-icons/bs";

function ServiceGraph() {
    return (
        <>
            <section id="service-img-details" className="py50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="service-img-details">
                                <img alt="" src={img1} />
                            </div>
                            <p className='pt20 pb20'>Although we are happy to provide statistical consulting advice on specific stages of a clinical study,
                                involving MDS in all stages assures consistency and clarity.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 pb30 pt30" style={{ backgroundImage: `linear-gradient(to right, rgb(255, 255, 255), rgb(227, 229, 236)`}}>
                            <div className="service-img-text">
                                <h3>Biostatistics help for R&D or exploratory studies</h3>
                                <p>Whether you are a pharma or medical device start-up or SME, the analysis
                                     of early-stage testing and the biostatistical design of pre-clinical R&D
                                      studies for your therapeutic can help to provide insight and pre-clinical
                                       validation sufficient for entry into clinical trials.</p>
                                <ul>
                                    <li><i><BsCheckCircle/></i>Biostatistics & Clinical Data Analysis</li>
                                    <li><i><BsCheckCircle/></i>Biomedical Systems & Network Analysis</li>
                                    <li><i><BsCheckCircle/></i>Clinical Survey Designs and Analysis</li>
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
