import React from 'react'
import {MdPermPhoneMsg} from "react-icons/md";
import {ImLocation2} from "react-icons/im";
import {BiMailSend} from "react-icons/bi";

const ContactInfo = () => {
    return (
        <>
            <div className="contact-content">
                <h3>Contact Us</h3>
                <ul className="contact-info">
                    <li>
                        <div className="media">
                            <div className="icon-area"><i><MdPermPhoneMsg/></i></div>
                            <div className="media-body contact-info-here">
                                <h5><a href="tel:+0-123-456-789">+0-123-456-789</a></h5>
                                <h5><a href="tel:+0-123-097-250">+0-123-456-789</a></h5>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="media">
                            <div className="icon-area"><i><ImLocation2/></i></div>
                            <div className="media-body contact-info-here">
                                <h5> 20A, Namibia Estate, Off Nakiwogo Road,  Entebbe, Uganda.</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="media">
                            <div className="icon-area"><i><BiMailSend/></i></div>
                            <div className="media-body contact-info-here">
                                <h5><a href="mailto:info@mail.com">info@mail.com</a></h5>
                                <h5><a href="mailto:demo@mail.com">demo@mail.com</a></h5>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ContactInfo
