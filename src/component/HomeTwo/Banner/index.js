import React, { useState } from "react";
// Modal
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
// Icon
import { AiOutlinePlayCircle } from "react-icons/ai";

// Import Banner img
import img_banner from '../../../assets/img/about/datta.png'


const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section id="banner-four">
        <div className="bg-shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="home-one-banner-content">
                <h1>Big<a style={{ color: '#216F31' }}>Data</a> &</h1>
                <h1>Analytics<a style={{ color: '#216F31' }}>...</a></h1>
                <h2>Innovative Solutions</h2>
                <p>
                  <a style={{ color: '#216F31', fontWeight: 'bolder' }} >NextData</a> <a style={{ fontWeight: 'bolder' }} >AFRICA</a> offers a wide range of 
                  services that support customers achieve the product and
                  
                  commercial output.
                  Our services can be provided 
                  <a style={{ color: '#216F31', fontWeight: 'bold' }}> off-shore</a> or at the <a style={{ color: '#216F31', fontWeight: 'bold' }}>customer location.</a>
                </p>
                <ModalVideo
                  channel="youtube"
                  api={false}
                  autoplay
                  isOpen={isOpen}
                  videoId="L61p2uyiMSo"
                  onClose={() => setOpen(false)}
                />
                <div className="banner-one-btn pt30">
                  <a
                    href="#!"
                    className="banner-video video-link"
                    onClick={() => setOpen(true)}
                  >
                    <AiOutlinePlayCircle /> Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="banner-img ">
                <img src={img_banner} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
