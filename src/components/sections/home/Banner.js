import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../../assets/img/banner/hero-slider/hero-livingroom-watchingtv-compressed.jpg';
import img2 from '../../../assets/img/banner/hero-slider/hero-kitchen-cooking-compressed.jpg';
import img3 from '../../../assets/img/banner/hero-slider/hero-office-studying-compressed.jpg';
import img4 from '../../../assets/img/banner/hero-slider/hero-livingroom-reading-compressed.jpg';

const bannerposts = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
];

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
        }
        return (
            <section className="banner-area banner-style-one">
                <div className="container container-custom-two">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="banner-content">
                                <span className="promo-tag wow fadeInDown" data-wow-delay=".3s">The ultimate Brooklyn
            experience</span>
                                <h1 className="title wow fadeInLeft" data-wow-delay=".5s"> Curated <br /> Comfort
          </h1>

          
          
                                <ul>
                                    <li>
                                        <Link className="main-btn btn-filled wow fadeInUp" data-wow-delay=".7s" to="/about">Learn More</Link>
                                    </li>
                                    {/* <li>
                                        <Link className="main-btn btn-border wow fadeInUp" data-wow-delay=".9s" to="/about">Learn
                More</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0.5s">
                            {/* <div className="banner-thumb d-none d-md-block">
                                <Slider className="hero-slider-one" {...settings}>
                                    {bannerposts.map((item, i) => (
                                        <div key={i} className="single-thumb">
                                            <img src={item.img} alt="" />
                                        </div>
                                    ))}
                                </Slider>
                            </div> */}


  {/* Desktop slider */}
  <div className="banner-thumb d-none d-md-block">
    <Slider className="hero-slider-one" {...settings}>
      {bannerposts.map((item, i) => (
        <div key={i} className="single-thumb">
          <img src={item.img} alt="" />
        </div>
      ))}
    </Slider>
  </div>

  {/* Mobile fallback */}
  <div className="mobile-hero-fallback d-block d-md-none">
    <img src={img1} alt="Urban Fox Rentals" />
  </div>



                            
                        </div>

                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;