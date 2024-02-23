import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Features extends Component {
    render() {
        return (
            <section className="core-feature-section bg-white pt-115 pb-115">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <span className="title-tag"> facilities </span>
                        <h2>Core Features</h2>
                    </div>
                    {/* Featre Loop */}
                    <div className="row features-loop">
                        <div className="col-lg-4 col-sm-6 order-1">
                            <div className="feature-box wow fadeInLeft" data-wow-delay=".3s">
                                <div className="icon">
                                    <i className="flaticon-rating" />
                                </div>
                                <h3>Top-Rated Area</h3>
                                <p>
                                Explore Park Slope: Where historic charm meets modern living in one of Brooklyn's most sought-after neighborhood.
          </p>
                                <span className="count">01</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-2">
                            <div className="feature-box wow fadeInDown" data-wow-delay=".4s">
                                <div className="icon">
                                    <i className="flaticon-clock" />
                                </div>
                                <h3>Quiet Hours</h3>
                                <p>
                                Enjoy serene quiet hours perfect for focus and productivity in a peaceful setting, ideal for those who cherish tranquility for work.
          </p>
                                <span className="count">02</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-3 order-sm-4 order-lg-3">
                            <div className="feature-box wow fadeInRight" data-wow-delay=".5s">
                                <div className="icon">
                                    <i className="flaticon-location-pin" />
                                </div>
                                <h3>Prime Location</h3>
                                <p>
                                Nestled near shops, subway, and laundry, our location offers unmatched convenience and proximity to key services and transportation.
          </p>
                                <span className="count">03</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-4 order-sm-3 order-lg-4">
                            <div className="feature-box wow fadeInLeft" data-wow-delay=".6s">
                                <div className="icon">
                                    <i className="flaticon-hotel" />
                                </div>
                                <h3>Fully Furnished</h3>
                                <p>
                                Ready with everything you need for a comfortable stay. From kitchenware to linens, we've got you covered.
          </p>
                                <span className="count">04</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-5">
                            <div className="feature-box wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon">
                                    <i className="flaticon-credit-card" />
                                </div>
                                <h3>Leasing Options</h3>
                                <p>
                                Flexible stays of 6-8 months with the flexibility of month-to-month arrangements, tailored to fit your stay.
          </p>
                                <span className="count">05</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-6">
                            <div className="feature-box wow fadeInRight" data-wow-delay=".8s">
                                <div className="icon">
                                    <i className="flaticon-discount" />
                                </div>
                                <h3><Link to="#">Special Offers</Link></h3>
                                <p>
                                Students Exclusive: $100 monthly discount for duration of stay and deposit waived with a qualifying guarantor.
          </p>
                                <span className="count">06</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;