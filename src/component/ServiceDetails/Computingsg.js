import React from 'react'
import img1 from '../../assets/img/service-details/1.jpg'
import {BsCheckCircle} from "react-icons/bs";

function ServiceGraph() {
    return (
        <>
            <section id="service-img-details" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="service-img-details">
                                <img alt="" src={img1} />
                            </div>
                            <p className='pt20'>Cloud Computing is gaining so much popularity an demand in the market.
                            It is getting implemented in many organizations very fast.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 pb30 pt30" style={{ backgroundImage: `linear-gradient(to right, rgb(255, 255, 255), rgb(227, 229, 236)`}}>
                            <div className="service-img-text">
                                <h3>Cloud Computing Research </h3>
                                <p>These Cloud Computing research topics help you to eliminate many
                                issues and provide a better environment. We can assoicate these issues with:</p>
                                <ul>
                                    <li><i><BsCheckCircle/></i>Virtualizations infrastructure</li>
                                    <li><i><BsCheckCircle/></i>Software platform</li>
                                    <li><i><BsCheckCircle/></i>Identity management</li>
                                    <li><i><BsCheckCircle/></i>Access control</li>
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
