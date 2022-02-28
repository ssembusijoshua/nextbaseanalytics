import React from 'react'
import img from '../../assets/img/project-details/2.png'

const SingleServiceDeatils = () => {
    return (
        <>
            <section id="service-details" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h2 className="pt10">Data Management</h2>
                                    <p>Data management refers to the professional practice of constructing and maintaining a framework for ingesting, storing, mining,
                                         and archiving the data integral to a modern business. Data management is the spine that connects all segments of the information lifecycle.</p>
                                    <p>Data management works symbiotically with process management, ensuring that the actions teams take are informed by the cleanest, most current data available — which in today’s
                                         world means tracking changes and trends in real-time.</p>
                                    <p>Big data has implications for businesses in almost every industry. As it continues to become more and more important for real-time decision making — keeping organizations competitive
                                         and customers engaged — managing all that data becomes more and more important as well.</p>
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
           
                <div className='container mb50'>
                    <div className='row pb30 pt30' style={{ backgroundImage: `linear-gradient(to right, rgb(227, 229, 236),rgb(255, 255, 255)`}}>
                        {/* <div className="col-lg-3 mt20">
                                <div className="service-details-img">
                                    <img alt="" src={img} />
                                </div>
                        </div> */}
                        <div className="col-lg-4">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Make a plan</h3>
                                    <p> Data Management Plan (DMP) present the organization’s overarching strategy
                                        for data management to investors, auditors, and other involved parties — which
                                        is an important insight into a company’s preparedness for the rigors of the modern market.</p>   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Store your data</h3>
                                        <p>A solid data storage approach is central to good data management. It begins by determining if your storage
                                        needs best suit a data warehouse or a data lake (or both), and whether the company’s data
                                        belongs on-premises or in the cloud.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                        <h3 className="pt10">Share your data</h3>
                                        <p >After all the plans are laid for storing, securing, and documenting your data, it’s time to find a place and means
                                            of sharing the data. Once called a repository, this role is increasingly filled by software and infrastructure as
                                            service models that are fine-tuned for big data management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SingleServiceDeatils
