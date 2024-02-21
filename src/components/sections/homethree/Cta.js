import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const ctafeatures = [
    { number: '01', icon: 'flaticon-air-freight', animation: '.3s', title: 'Easy & Free Transport', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { number: '02', icon: 'flaticon-fast-food', animation: '.4s', title: 'Clean & Fresh Food', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { number: '03', icon: 'flaticon-swimming', animation: '.5s', title: 'Play Ground & Swiming Pool', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
];

class Cta extends Component {
    render() {
        const Map = ReactMapboxGl({
            accessToken:
                'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'
        });
        return (
            <section className="pt-120 section cta-section dark-bg">
                <Map
                    style="mapbox://styles/mapbox/light-v10"
                    className="contact-maps"
                    containerStyle={{
                        height: '700px',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        border: 0
                    }}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[-77.04, 38.907]} zoom={11.5} />
                    </Layer>
                </Map>
                <div className="container">
                    <div className="cta-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8 col-sm-9 col-10 order-2 order-lg-1">
                                <div className="cta-text">
                                    <div className="section-title mb-20">
                                        <span className="title-tag">call to action</span>
                                        <h2>The Thin Escape</h2>
                                    </div>
                                    <p>Miranda has everything for your trip
              &amp; every single things.</p>
                                    <Link to="#" className="main-btn btn-filled">take a tour</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 col-sm-11 col-10 order-1 order-lg-2">
                                {/* feature loop */}
                                <div className="cta-features">
                                    {/* feature box */}
                                    {ctafeatures.map((item, i) => (
                                        <div key={i} className="single-feature wow fadeInUp" data-wow-delay={item.animation}>
                                            <div className="icon">
                                                <i className={item.icon} />
                                            </div>
                                            <div className="cta-desc">
                                                <h3><Link to="#">{item.title}</Link></h3>
                                                <p>
                                                    {item.text}
                                                </p>
                                                <span className="count">{item.number}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;