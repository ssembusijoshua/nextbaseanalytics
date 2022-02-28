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
                                    <h2 className="pt10">Computing Infrastructure</h2>
                                    <p>Computing Infrastructure provides management and support for end-user computers, servers,
                                         storage systems, operating systems, databases, middleware and ERP systems.</p>
                                    <p>Next Base Computing Infrastructure team has a vast collective set of skills and expertise in areas
                                         such as data center management, Storage Area Networks, desktop and server imaging, database administration
                                          and general troubleshooting skills, that can be leveraged by other groups at the University for advice and consultation..</p>
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
                        <h2 className="pt10">Genome Annotation</h2>
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
                        <div className="col-lg-3 mt20">
                                <div className="service-details-img">
                                    <img alt="" src={img} />
                                </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">End-User Computing</h3>
                                    <p>The End-User Computing group consists of two teams that provide personal
                                         computer management, support and assistance to faculty and staff,
                                         in addition to academic computer labs and classrooms management.</p>   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Database & ERP administration</h3>
                                        <p>The Database and ERP Administration group manages and supports the main database infrastructure for core
                                             applications used by staff, faculty and students, based on Oracle Database software.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Server and Storage Services</h3>
                                    <p >The Server and Storage Services group is responsible for the CCS managed data centers, servers and storage systems
                                         that provide infrastructure resources to applications and services used by staff, faculty and students.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
         </>
    )
}

export default SingleServiceDeatils
