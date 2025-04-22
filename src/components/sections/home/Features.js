import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Features extends Component {
    render() {
        return (
            <section className="core-feature-section bg-white pt-115 pb-115">
                <div className="container">
                    <div className="section-title text-center mb-50">
                        <span className="title-tag"> Considered Details </span>
                        <h2>What Sets Us Apart</h2>
                    </div>
                    {/* Featre Loop */}
                    <div className="row features-loop">
                        <div className="col-lg-4 col-sm-6 order-1">
                            <div className="feature-box wow fadeInLeft" data-wow-delay=".3s">
                                <div className="icon">
                                    <i className="flaticon-rating" />
                                </div>
                                <h3>Neighborhood Pick</h3>
                                <p>
                                With historic homes, green space, and a neighborhood rhythm all its own, Park Slope brings its own quiet charm and community feel.
          </p>
                                {/* <span className="count">01</span> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-2">
                            <div className="feature-box wow fadeInDown" data-wow-delay=".4s">
                                <div className="icon">
                                    <i className="flaticon-clock" />
                                </div>
                                <h3>Focus Mode</h3>
                                <p>
                                A calm, capable space made for deep work. Supported by built-in quiet, smart layout, and features designed  — built for when your brain's on overdrive.
          </p>
                                {/* <span className="count">02</span> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-3 order-sm-4 order-lg-3">
                            <div className="feature-box wow fadeInRight" data-wow-delay=".5s">
                                <div className="icon">
                                    <i className="flaticon-location-pin" />
                                </div>
                                <h3>Everyday Access</h3>
                                <p>
                                Just off 4th Avenue-9th Street ßStation, this address puts you near Prospect Park, with groceries, errands, and hospitals all within easy reach.
          </p>
                                {/* <span className="count">03</span> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-4 order-sm-3 order-lg-4">
                            <div className="feature-box wow fadeInLeft" data-wow-delay=".6s">
                                <div className="icon">
                                    <i className="flaticon-hotel" />
                                </div>
                                <h3>Move-In Ready</h3>
                                <p>
                                Other rentals stop at a couch and a bed. We outfit for life. From cookware to desk lamps, it's ready when you're ready.
          </p>
                                {/* <span className="count">04</span> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-5">
                            <div className="feature-box wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon">
                                    <i className="flaticon-checklist" />
                                </div>
                                <h3>Leasing Options</h3>
                                <p>
                                No rigid leases—just flexible, month-to-month options that fit your life, whether you're staying a few months or settling in longer.
                                
          </p>
                                {/* <span className="count">05</span> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 order-6">
                            <div className="feature-box wow fadeInRight" data-wow-delay=".8s">
                                <div className="icon">
                                    <i className="flaticon-discount" />
                                </div>
                                <h3><Link to="#">Resident Care</Link></h3>
                                <p>
                                Support includes cleaning referrals, fast response times, and continuous care designed around real resident needs.
          </p>
                                {/* <span className="count">06</span> */}
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;