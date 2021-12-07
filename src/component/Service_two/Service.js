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
<p>Developing customized software/algorithms for analysis and interpretation of biological data. Areas of expertise; Single cell genomics, Metagenomics, Transcriptomics, Proteomics, Molecular Epidemiology, Phylogenetics, Phylodynamics and Phylogeography.",
button:"Read More ...</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/Bioinformatics">More</Link>
        </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon2}/>
<h3>Big Data Analytics</h3>
<p>Conventional statistical analysis, Machine learning, Deep learning. In various fields; Biomedical, Aviation, Finance, Education, Climate and Agriculture. We use modern technologies to visualize your data in the simplest informative way in a near real-time fashion.",
button:"Read More ...</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/BigDataAnalytics">More</Link>
        </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon3}/>
<h3>Computing Infrastructure</h3>
<p>Server installation and management. We help you plan for your personal/institutional computational needs, acquire the optimal equipment for your needs, install and maintain the resource.",
button:"Read More ...</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/ComputingInfrastructure">More</Link>
        </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon4}/>
<h3>Biostatistical Analysis</h3>
<p>Design, Development and Deployment.",
button:"Read More ...</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/BiostatisticalAnalysis">More</Link>
        </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon5}/>
<h3>Data Management</h3>
<p>Lorem ipsum dolor sit amet, sed nom consectetur adipiscing elit, sed do eiusmod tempor incididunt.,
button:"Read More ...</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/DataManagement">More</Link>
        </div>
        </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 col-12 ">
        <div className="service-box animation-translate box-shadow border-radius">
        <div className="service-box-inner text-center">
<img
src={Icon6}/>
<h3>Short Training</h3>
<p>Lorem ipsum dolor sit amet, sed nom consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
button:"Read More ...</p>
{/* 
        <img alt="" src={props.data.img}  />
        <h3><Link to="/service_details">{props.data.heading}</Link></h3>
        <p>{props.data.paragraph}</p> */}
        <Link to="/ShortTraining">More</Link>
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
