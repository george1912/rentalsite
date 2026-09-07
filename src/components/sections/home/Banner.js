import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../../assets/img/banner/hero-slider/hero-livingroom-watchingtv-compressed.jpg';
import img2 from '../../../assets/img/banner/hero-slider/hero-kitchen-cooking-compressed.jpg';
import img3 from '../../../assets/img/banner/hero-slider/hero-office-studying-compressed.jpg';
import img4 from '../../../assets/img/banner/hero-slider/hero-livingroom-reading-compressed.jpg';

const bannerposts = [
    { img: img1, alt: 'Furnished Urban Fox Rentals living room' },
    { img: img2, alt: 'Resident cooking in the apartment kitchen' },
    { img: img3, alt: 'Dedicated apartment workspace' },
    { img: img4, alt: 'Resident reading in the furnished living room' },
];

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { currentSlide: 0 };
        this.slider = React.createRef();
    }

    showPreviousSlide = () => this.slider.current && this.slider.current.slickPrev();

    showNextSlide = () => this.slider.current && this.slider.current.slickNext();

    showSlide = slide => this.slider.current && this.slider.current.slickGoTo(slide);

    render() {
        const { currentSlide } = this.state;
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            speed: 550,
            cssEase: 'cubic-bezier(0.22, 1, 0.36, 1)',
            swipe: true,
            swipeToSlide: true,
            draggable: true,
            accessibility: true,
            afterChange: slide => this.setState({ currentSlide: slide }),
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
                            <div className="banner-thumb home-carousel" role="region" aria-label="Apartment photo carousel">
                                <Slider ref={this.slider} className="hero-slider-one" {...settings}>
                                    {bannerposts.map((item, i) => (
                                        <div key={i} className="single-thumb">
                                            <img src={item.img} alt={item.alt} />
                                        </div>
                                    ))}
                                </Slider>
                                <div className="home-carousel-controls" role="group" aria-label="Carousel controls">
                                    <button type="button" className="home-carousel-arrow home-carousel-arrow-previous" onClick={this.showPreviousSlide} aria-label="Show previous apartment photo">
                                        <span aria-hidden="true">‹</span>
                                    </button>
                                    <div className="home-carousel-dots" aria-label="Choose an apartment photo">
                                        {bannerposts.map((item, index) => (
                                            <button
                                                key={item.img}
                                                type="button"
                                                className={`home-carousel-dot ${currentSlide === index ? 'active' : ''}`}
                                                onClick={() => this.showSlide(index)}
                                                aria-label={`Show apartment photo ${index + 1}`}
                                                aria-current={currentSlide === index ? 'true' : undefined}
                                            />
                                        ))}
                                    </div>
                                    <button type="button" className="home-carousel-arrow home-carousel-arrow-next" onClick={this.showNextSlide} aria-label="Show next apartment photo">
                                        <span aria-hidden="true">›</span>
                                    </button>
                                </div>
                            </div>



                            
                        </div>

                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
