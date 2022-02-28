import React from 'react'
// import About Img
import img1 from '../../assets/img/history.png'
// import Icon
import {FiCheck} from 'react-icons/fi';

const History = () => {
    return (
        <>
            {/* About Top Area Start */}
            <section id="about-top" className="py50 bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="about-img">
                                <h2>Our Mission ...</h2>
                                <p>
                                To ensure Maximum Efficiency and improved Performance through Data Mining.
                                </p>
                                <h2>About NextBase Analytics</h2>
                                <p>
                                For the last 5 years, NextBase Analytics has built a culture of continuous innovation
                                in data mining and machine learning consulting to match today's dynamic business world
                                and capitalising on Big Data Analytics.
                                </p>
                                <p>
                                Our clients choose us for our ability to provide contextual AI-powered analytics solutions to solve
                                complex business problems and deliver digital transformation outcomes.
                                </p>
                                <h2>Our Mission ...</h2>
                                <p>
                                To ensure Maximum Efficiency and improved Performance through Data Mining.
                                </p>
                                <h2>About NextBase Analytics</h2>
                                <p>
                                For the last 5 years, NextBase Analytics has built a culture of continuous innovation
                                in data mining and machine learning consulting to match today's dynamic business world
                                and capitalising on Big Data Analytics.
                                </p>
                                {/* <ul>
                                    <li><i><FiCheck/></i>Data Engineering</li>
                                    <li>
                                        <i><FiCheck/></i>Machine Learning
                                    </li>
                                    <li><i><FiCheck/></i>Asset Based Consulting</li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className='row'>
                                <div className="about-top-img animation-img-two">
                                    <img alt="img" src={img1} />
                                </div>
                            </div> 
                        </div>
                    </div>
                 <div>
             </div>
                </div>
            </section>
            {/* About Top Area Start */}
        </>
    )
}

export default History
