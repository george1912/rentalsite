import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import featuresbg from '../../../assets/img/bg/06.jpg';
import img1 from '../../../assets/img/room/01.jpg';
import img2 from '../../../assets/img/room/02.jpg';
import img3 from '../../../assets/img/room/03.jpg';

const popularapartment = [
    { img: img1, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img2, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img3, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
];
class Features extends Component {
    render() {
        return (
            <section className="feature-room-section with-bg pt-155 pb-115" style={{ backgroundImage: "url(" + featuresbg + ")" }}>
                <div className="container">
                    <div className="section-title white-color text-center">
                        <span className="title-tag">popular list</span>
                        <h2>Popular Apartments</h2>
                    </div>
                    {/* Apartment Looop */}
                    <div className="row room-gird-loop justify-content-center mt-30">
                        {popularapartment.map((item, i) => (
                            <div key={i} className="col-lg-4 col-sm-6">
                                <div className="room-box mt-30">
                                    <div className="room-img-wrap">
                                        <div className="room-img" style={{ backgroundImage: "url(" + item.img + ")" }} />
                                    </div>
                                    <div className="room-desc">
                                        <ul className="icons">
                                            <li><i className="fal fa-bed" /></li>
                                            <li><i className="fal fa-wifi" /></li>
                                            <li><i className="fal fa-car" /></li>
                                            <li><i className="fal fa-coffee" /></li>
                                            <li><i className="fal fa-concierge-bell" /></li>
                                            <li><i className="fal fa-compress-arrows-alt" /></li>
                                            <li><i className="fal fa-swimmer" /></li>
                                        </ul>
                                        <h4 className="title"><Link to="/apartment-details">{item.title}</Link></h4>
                                        <p>{item.text}</p>
                                        <span className="price">${item.price}/{item.period}</span>
                                        <Link to="/apartment-details" className="book-btn">Booking Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;