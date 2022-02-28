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
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about-img">
                                <h2>Our Mission ...</h2>
                                <p>
                                To ensure Maximum Efficiency and improved Performance through Data Mining.
                                </p>
                                <h2>About NextData AFRICA</h2>
                                <p>
                                For the last 5 years, NextData AFRICA has built a culture of continuous innovation
                                in <a style={{fontWeight: 'bold'}}>data mining</a> and <a style={{fontWeight: 'bold'}}>machine learning consulting</a> to match today's dynamic business world
                                and capitalising on Big Data Analytics.
                                </p>
                                <p>
                                Our clients choose us for our ability to provide contextual <a style={{fontWeight: 'bold'}}>AI-powered analytics solutions</a> to solve
                                complex business problems and deliver digital transformation outcomes.
                                </p>
                                <ul>
                                    <li><i><FiCheck/></i>Data Engineering</li>
                                    <li><i><FiCheck/></i>Machine Learning</li>
                                    <li><i><FiCheck/></i>Asset Based Consulting</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about-top-img animation-img-two">
                                <img className="pt40"alt="img" src={img1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Top Area Start */}
        </>
    )
}

export default History
