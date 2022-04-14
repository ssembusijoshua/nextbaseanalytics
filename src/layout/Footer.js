import React from 'react'
import shap from '../assets/img/svg/footer.svg'
import { Link } from 'react-router-dom'
import logo from '../assets/img/maryjs.png'
import { ImLocation } from 'react-icons/im';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';
 
const FooterItems=[
    {
        title:"LINKS",
        links: [
          { linkTitle: "Home", link: "/" },
          { linkTitle: "About Us", link: "/about" },
          { linkTitle: "What we do", link: "/service" },
          { linkTitle: "Portifolio", link: "/projects" },
          { linkTitle: "Our Rates", link: "/home_two" },
        ],
    },
    {
        title:"SERVICES",
        links: [
          { linkTitle: "Big Data", link: "/about" },
          { linkTitle: "Biostatistics", link: "/services" },
          { linkTitle: "Data management", link: "/contact" },
          { linkTitle: "Bioinformatics", link: "/contact" },
        ],
    }
]

const Footer=()=> {
 return (
  <>
    <footer id="footer" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="footer-about-area">
                        <Link to="/"><img alt="" src={logo}  /></Link>
                        <p className="pt30">
                            NextData AFRICA offers a range of services that support customers achieve the product and commercial product.
                        </p>
                        {/* <p>
                           Our services can be provided off-shore or at the customer premises.
                        </p> */}
                    </div>
                </div>
                {FooterItems.map((item, key)=>(
                     <div className="col-lg-2 col-md-6 col-sm-6 col-6" key={key}>
                           <div className="footer-list-widget pl20 single-item-mt-3 responsive-mt-60">
                               <div className="footer-heading">
                                   <h5>{item.title}</h5>
                               </div>
                               <div className="footer-list pt40">
                                   <ul>
                                       {item.links.map((flinks, key)=>(
                                           <li key={key}><Link to={flinks.link}>{flinks.linkTitle}</Link></li>
                                       ))}
                                   </ul>
                               </div>
                           </div>
                        </div>
                ))}
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="footer-list-widget pl20 responsive-mt-60">
                        <div className="footer-heading">
                            <h5>Contact</h5>
                        </div>
                        <div className="footer-contact-area footer-list pt40">
                           <ul>
                               <li>
                                   <i><ImLocation/></i> 20A, Namibia Estate, Off Nakiwogo Road,  Entebbe, Uganda.
                               </li>
                               <li>
                                   <i><FiPhoneOutgoing/></i><Link to="/">+012 -3 456 789</Link>
                               </li>
                               <li>
                                   <i><SiMinutemailer/></i><Link to="/">Info@nextbase.com</Link>
                               </li>
                           </ul>
                       </div>  
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-img">
            <img alt="" src={shap}  />
        </div>
    </footer>
  </>
 )
}

export default Footer
