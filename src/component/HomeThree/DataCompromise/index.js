import React from "react";
import img from '../../../assets/img/home4/coree.png'
import { GoCheck } from 'react-icons/go';

const DataCompromise = () => {
  return (
    <>
      <section id="data-those" className="py100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="data-those-img animation-img-one">
                <img src={img} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="data-those-texted">
                <div className="data-those-title">
                  <h2 className="color-white">
                    We don`t Compromise when it comes to your Data Centre Space
                  </h2>
                  {/* <p className="color-white pt10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    vitae error perferendis dicta ducimus similique aperiam
                    nesciunt asperiores.
                  </p> */}
                </div>
                <div className="data-those-inner-text">
                  <div className="data-those-inner-box">
                    <div className="icon-font-box">
                    <i><GoCheck/></i>
                    </div>
                    <h3>
                      <a href="#" className="color-white">
                      Demand for Big Data Analytics Continues Unabated
                      </a>
                    </h3>
                    <p className="color-white">
                    As data and analytics become more widely adopted than ever before, the potential for business growth is truly
                    exponential rather than just cumulative.
                    </p>
                  </div>
                  <div className="data-those-inner-box">
                    <div className="icon-font-box">
                      <i><GoCheck/></i>
                    </div>
                    <h3>
                      <a href="#" className="color-white">
                      Adhering to Big Data Security Best Practices
                      </a>
                    </h3>
                    <p className="color-white">
                    One of the most important features companies should look for in a big data security tool is insider threat detection.
                    These capabilities empower businesses to sniff out suspicious behavior that may indicate the presence of a data breach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataCompromise;
