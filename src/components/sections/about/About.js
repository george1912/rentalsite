import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
// import 'magnific-popup';

// import videobg from '../../../assets/img/text-block/04.jpg';
import aboutimg from '../../../assets/img/text-block/05.jpg';

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
                        <span className="title-tag">Who We <span>Are</span></span>
                        <h2>Hello. My name is G.</h2>
                        <br />
                        <br />
                        <h3>After years spent in "Marketing", I found myself yearning for something more tangible, something that touched lives directly. This restlessness led me down an unexpected path: nursing. The transition was profound, moving from a world of code and screens to one of human connection and care. It's in this journey that I discovered the value of creating spaces where people could feel safe, supported, and at home.
                        <br />
                        <br />

                        In the heart of Park Slope, Brooklyn, I've poured this newfound understanding into creating a living space that reflects my journey and values. This isn't just an apartment; it's a testament to the belief that everyone deserves a place to call home, not just a house to live in. It's a sanctuary designed for those transitioning, whether they're embarking on new educational pursuits, professional projects, or simply seeking a haven in the city.
                        <br />
                        <br />


                        I've seen how important it is to have a retreat in the hustle of city life—a place that doesn't just serve as a roof over your head, but as a foundation from which you can grow, learn, and explore. This space in Park Slope is my attempt to blend those worlds, offering a fully furnished apartment that's ready to welcome you without the hassle of moving burdens. It's a place where you can focus on what matters most to you, whether that's your studies, your work, or simply your own well-being.
                        <br />
                        <br />

                        This apartment in Park Slope is more than just a project; it's a reflection of my journey, beliefs, and the kind of world I want to help build—one where everyone has the opportunity to find their place and thrive.
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