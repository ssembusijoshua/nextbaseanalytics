import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../Home/SectionHeading/SectionHeading' 
import Icon1 from '../../1.png'
import Icon2 from '../../2.png'
import Icon3 from '../../3.png'
import Icon4 from '../../4.png'
import Icon5 from '../../5.png'
import Icon6 from '../../6.png'


function Chart() {
    return (
        <>
        <section id="service" className="bg-color">
        <div className="container">
            <SectionHeading title="Our Services" heading={"We Offer A Wide Range Of Data Services And Data Analytics Solutions"}/>
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon1}/>
<h3>Bioinformatics</h3>
<p>Developing customized software/algorithms for analysis and interpretation of biological data. Areas of expertise; Single cell genomics, Metagenomics, Transcriptomics, Proteomics, Molecular Epidemiology, Phylogenetics, Phylodynamics and Phylogeography.</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/Bioinformatics">Read-More</Link>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon2}/>
<h3>Big Data Analytics</h3>
<p>Conventional statistical analysis, Machine learning, Deep learning. In various fields; Biomedical, Aviation, Finance, Education, Climate and Agriculture. We use modern technologies to visualize your data in the simplest informative way in a near real-time fashion."</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/BigDataAnalytics">Read-More</Link>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon3}/>
<h3>Computing Infrastructure</h3>
<p>Server installation and management. Plan for your institutional computational needs, acquire optimal equipment and implement structural procedures based on data-driven best practices for each technology element."</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/ComputingInfrastructure">Read-More</Link>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon4}/>
<h3>Biostatistical Analysis</h3>
<p>Biostatistical consulting services designed to take complex statistical analyses and translate their results into clear and meaningful conclusions for research and biotechnology institutions. We provide statistical services to clients for a range of studies including  metagenomicity and immunogenicity."</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/BiostatisticalAnalysis">Read-More</Link>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon5}/>
<h3>Data Management</h3>
<p>NextData AFRICA offers a dedicated team of data management consultants, solution architects, and data engineers to help you establish data governance policies and implement relevant tech solutions. We implement a comprehensive data management program using the best elements.</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/DataManagement">Read-More</Link>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon6}/>
<h3>Training</h3>
<p>The job role of a Data Analyst is one of the most in-demand for enterprises globally. Businesses want to make sense of the data that is being collected on a regular basis.The Data Science certifications are an excellent way for professionals to demonstrate their expertise and  skills to manage data."</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/ShortTraining">Read-More</Link>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default Chart
