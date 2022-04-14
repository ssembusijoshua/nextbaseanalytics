import React from 'react'
import img from '../../assets/img/project-details/shot1.png'

const SingleServiceDeatils = () => {
    return (
        <>
            <section id="service-details" className="py50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h2 className="pt10">Short Term Training</h2>
                                    <p>Short term training programs allow the candidates to attain and enhance their
                                    skills-set in order to become job-ready.</p>
                                    <p>The primary goal of the certificate programs, short term training, workshops, classes,
                                    diploma, etc. conducted is to brush up the basic as well as advanced skills that are pre-requisite
                                    for joining any organization.</p>
                                    <p>The agenda of the short term courses is to provide accurate and precise training for those who
                                    aspire to gain the necessary knowledge in a comparatively short period of time.</p>
                                    <p>The short term training programs act as a boon for those who seek to become a part of a well-established
                                    organization on the basis of the knowledge acquired.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-details-img">
                                <img alt="" src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleServiceDeatils
