import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Backtotop from './Backtotop';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import logo from '../../assets/img/header-logo-no-border.png';

class Footer extends Component {
    render() {
        // const Map = ReactMapboxGl({
        //     accessToken:
        //         'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'
        // });
        return (
            <Fragment>
                <Backtotop />
                <footer className="footer-two">
                    {/* <div className="footer-subscibe-area style-2 pt-50 pb-50">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-3">
                                    <div className="subscribe">
                                        <h3 className="mb-0 text-white">Subscribe</h3>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="subscribe-text">
                                        <form action="#" className="subscribe-form">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4">
                                                    <input type="text" placeholder="Your name" />
                                                </div>
                                                <div className="col-lg-5 col-md-5">
                                                    <input type="email" placeholder="Your email" />
                                                </div>
                                                <div className="col-lg-3 col-md-3">
                                                    <button type="submit" className="main-btn btn-filled">subscribe</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <Map
                        style="mapbox://styles/mapbox/light-v10"
                        className="contact-maps"
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[-77.04, 38.907]} zoom={11} />
                        </Layer>
                    </Map> */}
                    <div className="footer-widget-area pt-100 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 order-1">
                                    {/* Site Info Widget */}
                                    <div className="widget site-info-widget mb-50">
                                        <div className="footer-logo mb-50">
                                            <img src={logo} alt="" />
                                        </div>
                                        <p>
                                        Urban Fox Rentals offers effortlessly manageable living spaces, designed for modern convenience and ease. Perfect for the urban dweller.
            </p>
                                        {/* <div className="social-links mt-40">
                                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link to="#"><i className="fab fa-twitter" /></Link>
                                            <Link to="#"><i className="fab fa-behance" /></Link>
                                            <Link to="#"><i className="fab fa-linkedin" /></Link>
                                            <Link to="#"><i className="fab fa-youtube" /></Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-6 order-3 order-lg-2">
                                    {/* Nav Widget */}
                                    {/* <div className="widget nav-widget mb-50">
                                        <div>
                                            <h4 className="widget-title">Services.</h4>
                                            <ul>
                                                <li><Link to="#">Resturent &amp; Bar</Link></li>
                                                <li><Link to="#">Gaming Zone</Link></li>
                                                <li><Link to="#">Swimming Pool</Link></li>
                                                <li><Link to="#">Marrige Party</Link></li>
                                                <li><Link to="#">Restaurant</Link></li>
                                                <li><Link to="#">Party Planning</Link></li>
                                                <li><Link to="#">Conference Apartment</Link></li>
                                                <li><Link to="#">Tour Consultancy</Link></li>
                                                <li><Link to="#">Coctail Party Houses</Link></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-lg-3 col-sm-6 order-2 order-lg-3">
                                    {/* Contact Widget */}
                                    <div className="widget contact-widget mb-50">
                                        <h4 className="widget-title">Reach Out</h4>
                                        <div className="contact-lists">
                                            <div className="contact-box">
                                                <div className="icon">
                                                    <i className="flaticon-call" />
                                                </div>
                                                <div className="desc">
                                                    <h6 className="title">Phone Number</h6>
                                                    <a href="tel:+9294897158"><h6>929-489-7158</h6></a>
                </div>
                                            </div>
                                            <div className="contact-box">
                                                <div className="icon">
                                                    <i className="flaticon-message" />
                                                </div>
                                                <div className="desc">
                                                    <h6 className="title">Email Address</h6>
                                                    <a href="mailto:info@urbanfoxrentals.com"><h6>info@urbanfoxrentals.com</h6></a>
                                                </div>
                                            </div>
                                            <div className="contact-box">
                                                <div className="icon">
                                                    <i className="flaticon-location-pin" />
                                                </div>
                                                <div className="desc">
                                                    <h6 className="title">Office Address</h6>
                  Parkslope, Brooklyn
                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area pt-30 pb-30">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-5 order-2 order-md-1">
                                    {/* <p className="copyright-text copyright-two">Copyright By@<Link to="#">Example</Link> - 2020</p> */}
                                    <p className="copyright-text copyright-two">&copy; 2025 BigLittleAdventures. <br/>All rights reserved.</p>
                                </div>
                                {/* <div className="col-lg-6 col-md-7 order-1 order-md-2">
                                    <div className="footer-menu text-center text-md-right">
                                        <ul>
                                            <li><Link to="#">Terms of use</Link></li>
                                            <li><Link to="#">Privacy Environmental Policy</Link></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;