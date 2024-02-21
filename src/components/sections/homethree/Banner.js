import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../../assets/img/banner/bg-banner-home3-1-compressed.jpg';
import img2 from '../../../assets/img/banner/bg-banner-home3-2-compressed.jpg';

const bannerpost = [
    { img: img1, tag: 'The ultimate luxury experience', title: 'The Perfect Home For You', urltext1: 'take a tour', urltext2: 'Learn More' },
    { img: img2, tag: 'The ultimate luxury experience', title: 'The Perfect Home For You', urltext1: 'take a tour', urltext2: 'Learn More' },
];

class Banner extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
        }
        return (
            <Slider className="banner-area banner-style-three" id="bannerSlider" {...settings}>
                {bannerpost.map((item, i) => (
                    <div key={i} className="single-banner d-flex align-items-center justify-content-center" >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="banner-content">
                                        <span className="promo-tag" data-animation="fadeInDown" data-delay=".6s">
                                            {item.tag}
                                        </span>
                                        <h1 className="title" data-animation="fadeInLeft" data-delay=".9s">
                                            {item.title}
                                        </h1>
                                        <ul>
                                            <li data-animation="fadeInUp" data-delay="1.1s">
                                                <Link className="main-btn btn-filled" to="/contact">{item.urltext1}</Link>
                                            </li>
                                            <li data-animation="fadeInUp" data-delay="1.3s">
                                                <Link className="main-btn btn-border" to="/about">{item.urltext2}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* banner bg */}
                        <div className="banner-bg" style={{ backgroundImage: "url(" + item.img + ")" }} />
                        <div className="banner-overly" />
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Banner;