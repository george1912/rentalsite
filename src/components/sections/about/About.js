import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
// import 'magnific-popup';

// import videobg from '../../../assets/img/text-block/04.jpg';
// import aboutimg from '../../../assets/img/text-block/05.jpg';
import myImage from '../../../assets/img/team/urban-fox-logo-transparent-bg.png'; // replace with the actual path to your image

const featurespost = [
    { icon: 'flaticon-coffee', title: 'breakfast', animation: '.3s' },
    { icon: 'flaticon-air-freight', title: 'Airport Pickup', animation: '.4s' },
    { icon: 'flaticon-marker', title: 'city guide', animation: '.5s' },
    { icon: 'flaticon-barbecue', title: 'bbq party', animation: '.6s' },
    { icon: 'flaticon-hotel', title: 'luxury room', animation: '.7s' },
];
class About extends Component {
    componentDidMount() {
        // function popup() {
        //     $('.popup-video').magnificPopup({
        //         type: 'iframe',
        //     });
        // }
        // popup();
    }
    render() {
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container">
                    {/* <div className="video-wrap video-wrap-two video-about mb-60" style={{ backgroundImage: "url(" + videobg + ")" }}>
                        <Link to="http://www.youtube.com/embed/watch?v=EEJFMdfraVY" className="popup-video"><i className="fas fa-play" /></Link>
                    </div> */}
                    <div className="section-title about-title text-center">
                        <span className="title-tag">What We're <span>About</span></span>
                        <h2>Hello. My name is G.</h2>
                        <br />
                        <br />
                        <h3>From a dynamic career in marketing, I transitioned into the healthcare sector, driven by a desire to make a tangible impact on people’s lives. This profound shift inspired me to create Urban Fox Rentals—a place not just to stay, but to live and grow.
                        <br />
                        <br />

                        Nestled in Park Slope, Brooklyn, our spaces mirror my personal evolution. They are sanctuaries for the soul, meticulously crafted for those in the midst of life’s transitions. Whether you’re pursuing educational goals, professional endeavors, or simply a serene spot to recharge, our apartments offer solace from the city’s pace without the stress of moving.
                        <br />
                        <br />


                        Urban Fox Rentals is more than a housing option; it's a manifestation of my belief in the power of a nurturing environment. Here, you’ll find more than a place to rest—it's where you can cultivate your future, foster well-being, and thrive.
                        <br />
                        <br />

                        <img src={myImage} alt="Urban Fox Logo "/> {/* Add this line */}
                        </h3>


                    </div>
                    {/* <ul className="about-features">
                        {featurespost.map((item, i) => (
                            <li key={i} className="wow fadeInUp" data-wow-delay={item.animation}>
                                <Link to="#">
                                    <i className={item.icon} />
                                    <i className={"hover-icon " + item.icon + ""} />
                                    <span className="title">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul> */}
                    {/* <div className="about-text-box">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src={aboutimg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <span>Restaurant</span>
                                    <h3>Get Restaurant Facilities &amp; Many Other More</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem por
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip.
            </p>
                                    <Link to="/contact" className="main-btn btn-filled">take a tour</Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        );
    }
}

export default About;