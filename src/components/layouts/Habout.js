import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import singlefeature from '../../assets/img/feature/kitchen-feature-compressed.jpg';
import singlefeature1 from '../../assets/img/feature/bedroom-feature-compressed.jpg';
import bottomimg from '../../assets/img/bg/parkslope-landscape-4.png';

class Habout extends Component {
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.col-sm-6',
            percentPosition: false,
            resize: true,
            fitWidth: true
        };
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10 wow fadeInLeft" data-wow-delay=".3s">
                            <Masonry className="row about-features-boxes fetaure-masonary" imagesLoadedOptions={imagesLoadedOptions}>
                                <div className="col-sm-6">
                                    <div className="single-feature-box">
                                        <div className="icon">
                                            <i className="flaticon-suitcase" />
                                        </div>
                                        <h4>Effortless Luxury</h4>
                                        <p>
                                        Where timeless design meets elevated living. Enjoy curated interiors, sleek finishes, and modern conveniences and amenities—in a space that's as practical as it is beautiful.
              </p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-feature-box only-bg mt-30" style={{ backgroundImage: "url(" + singlefeature + ")" }}>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-feature-box only-bg mt-30" style={{ backgroundImage: "url(" + singlefeature1 + ")" }}>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-feature-box dark mt-30">
                                        <div className="icon">
                                            <i className="flaticon-hotel" />
                                        </div>
                                        <h4>Everyday Sanctuary</h4>
                                        <p>
                                        Designed for doers. Just steps from shops and transit, this peaceful space offers everything you need to recharge, reset, and get back to what matters.
              </p>
                                    </div>
                                </div>
                            </Masonry>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-10 wow fadeInRight" data-wow-delay=".3s">
                            <div className="abour-text pl-50 pr-50">
                                <div className="section-title mb-30">
                                    <span className="title-tag">Step Inside</span>
                                    <h2>Discover the Difference</h2>
                                </div>
                                <p>
                                Welcome to a curated 900 sq ft apartment in the heart of Park Slope—fully furnished, beautifully lit, and crafted with intention. Every detail is considered, every convenience included. From modern amenities to flexible leasing, this is Brooklyn living without compromise.
          </p>
                                <Link to="gallery" className="main-btn btn-filled mt-40"> Take A Look</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-right-bottom">
                    <div className="about-bottom-img">
                        <img src={bottomimg} alt="" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Habout;