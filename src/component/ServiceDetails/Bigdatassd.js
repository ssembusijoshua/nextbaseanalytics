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
                                    <h2 className="pt10">BigData Analytics</h2>
                                    <p>Big data analytics is the often complex process of examining big data to uncover
                                         information such as hidden patterns, correlations, market trends and customer 
                                         preferences that can help organizations make informed business decisions.</p>
                                    <p>On a broad scale, data analytics technologies and techniques give organizations 
                                        a way to analyze data sets and gather new information. Business intelligence (BI)
                                         queries answer basic questions about business operations and performance.</p>
                                          <p>NextBase experts offer a full range of big data services, from consulting
                                               and strategy definition to infrastructure maintenance and support, enabling our
                                                clients to get vital insights from previously untapped data assets.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-details-img">
                                <img alt="" src={img} />
                            </div>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <div className='col'>
                        <h2 className="pt10">Big Data Consulting</h2>
                                <ul>
                                    <li>Genome annotation with RNA-Seq data</li>
                                    <li>Automated annotation of prokaryotic and eukaryotic genomes</li>
                                    <li>Identification of non-coding RNAs (long non-coding RNAs, microRNAs and other ncRNAs)</li>
                                    <li>Identification of repetitive elements</li>
                                    <li>Setting up stand-alone (IGV) and online (JBrowse) genome browsers</li>
                                    <li>Building online databases with genomic and transcriptomic data</li>
                                </ul>
                        </div>
                    </div> */}
                </div>
            </section>
           
                <div className='container mb50'>
                    <div className='row pb30 pt30' style={{ backgroundImage: `linear-gradient(to right, rgb(227, 229, 236),rgb(255, 255, 255)`}}>
                        <div className="col-lg-3">
                        <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Data infrastructure</h3>
                                    <p>Create data warehouse and data lake solutions, as well as streamline ETL development, execution
                                         and management tasks by building data pipelines that transform raw data into curated datasets
                                          which can be easily retrieved for further processing.</p>   
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-3">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Data security</h3>
                                    <p>Protect your data from intentional and accidental destruction, modification, or disclosure by adhering
                                         to security standards, developing a tiered access system, and ensuring efficient backup and
                                         recovery processes.</p>   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">BI & data analytics</h3>
                                        <p>Make better and faster decisions by accelerating your time to insights using breakthrough
                                             business intelligence tools and leveraging a data science approach that comprises statistical
                                              and machine learning techniques.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Data visualization</h3>
                                    <p>Gain 360-degree visibility into your data with interactive reports and intuitive dashboards that make
                                         analytics understandable and manageable for everyone at every level of your organization.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SingleServiceDeatils
