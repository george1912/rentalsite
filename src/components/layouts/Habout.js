import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import singlefeature from '../../assets/img/feature/office-1.jpg';
import singlefeature1 from '../../assets/img/feature/kitchen-1.jpg';
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
                                        <h4><Link to="#">Travel Ready</Link></h4>
                                        <p>
                                        Fully furnished haven that simplifies your move. So you can focus on what matters&nbsp;most.
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
                                        <h4><Link to="#">Nouveau Luxury</Link></h4>
                                        <p>
                                        Experience bohemian elegance and modern efficiency in our thoughtfully designed apartments, where spaciousness meets comfort.
              </p>
                                    </div>
                                </div>
                            </Masonry>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-10 wow fadeInRight" data-wow-delay=".3s">
                            <div className="abour-text pl-50 pr-50">
                                <div className="section-title mb-30">
                                    <span className="title-tag">about us</span>
                                    <h2>Discover Our Apartments.</h2>
                                </div>
                                <p>
                                    Explore Park Slope living in our cozy, fully furnished 900 sq ft apartment, perfect for short or extended stays. Enjoy modern amenities, natural light, and a vibrant neighborhood close to all Brooklyn offers. Flexible leasing available.
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