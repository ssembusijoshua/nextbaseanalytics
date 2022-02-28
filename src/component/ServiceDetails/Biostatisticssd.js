import React from 'react'
import img from '../../assets/img/project-details/biosd2.png'

const SingleServiceDeatils = () => {
    return (
        <>
            <section id="service-details" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h2 className="pt10">Biostatistical Analysis</h2>
                                    <p>Biostatistical Analysis Division provides statistical consulting services designed
                                         to take complex statistical analyses and translate their results into clear and
                                          meaningful conclusions for research and biotechnology institutions as well as drug 
                                          development companies.</p>
                                    <p>We provide statistical services to clients for a range of studies including toxicity, tumorgenicity, and immunogenicity.
                                        We can assist with all stages of the clinical study including start-up, data analysis, and summary reports
                                         during our statistical methods. More specifically, we offer the following services for each study phase.</p>
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
                                    <h3 className="pt10">Statistical Analysis Plan</h3>
                                    <p>MDS will prepare a complete Statistical Analysis Plan
                                         that includes a detailed description of all statistical analyses to be carried out on the data
                                         collected during the clinical investigation. Mock-ups of tables, listings, and figures will also be part of
                                         the Statistical Analysis Plan.</p>   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Statistical Programming</h3>
                                        <p>All work will be done using industry-standard software, either SAS or R. The code used to conduct all statistical analyses
                                         will be thoroughly-annotated and subjected to validation through independent review by a statistician different from the
                                         one who generated the original programs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h3 className="pt10">Statistical Report</h3>
                                    <p >A statistical report will be produced in conjunction with the preparation of a full clinical report. The statistical report will provide
                                        a description of the findings of the statistical analyses for the clinical investigation and will confirm that the analyses were conducted
                                        per the statistical analysis plan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SingleServiceDeatils
  