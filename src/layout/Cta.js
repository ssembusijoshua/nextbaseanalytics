import React from 'react'

const Cta = () => {
    return (
        <>
            <section id="cta-area" className="py100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="cta-search-area">
                                <div className="input-group">
                                    <input type="text" className="form-control"
                                           placeholder="Tyep Your Email Address.."/>
                                    <div className="input-group-append">
                                        <button className="btn btn-cta" type="button">
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="news-letter-text pl40 pr80 responsive-mt-30">
                                <h3 className="white-color">Newsletter</h3>
                                <h2 className="white-color">Subscribe to Our Newsletter</h2>
                                <p className="white-color">
                                    Stay up to date on NextData AFRICA publications and events
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta
