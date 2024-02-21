import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../layouts/Pagination';

import img1 from '../../../assets/img/room/list-1.jpg';
import img2 from '../../../assets/img/room/list-2.jpg';
import img3 from '../../../assets/img/room/list-3.jpg';
import img4 from '../../../assets/img/room/list-4.jpg';
import img5 from '../../../assets/img/room/list-5.jpg';
import img6 from '../../../assets/img/room/list-6.jpg';

const appartmentlistpost = [
    { img: img1, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '345', period: 'Month' },
    { img: img2, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '345', period: 'Month' },
    { img: img3, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '345', period: 'Month' },
    { img: img4, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '345', period: 'Month' },
    { img: img5, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '345', period: 'Month' },
    { img: img6, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '345', period: 'Month' },
];

class Content extends Component {
    render() {
        return (
            <section className="room-section room-list-style pt-120 pb-120">
                <div className="container">
                    <div className="room-list-loop">
                        {appartmentlistpost.map((item, i) => (
                            <div key={i} className="room-box mb-30">
                                <div className="row no-gutters justify-content-center">
                                    <div className="col-lg-5 col-md-10">
                                        <div className="room-img-wrap">
                                            <div className="room-img" style={{ backgroundImage: "url(" + item.img + ")" }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-10">
                                        <div className="room-desc">
                                            <div className="row align-items-center">
                                                <div className="col-sm-8">
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
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="text-sm-center">
                                                        <span className="price">${item.price}<span>/{item.period}</span> </span>
                                                        <Link to="/apartment-details" className="book-btn">Booking Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination-wrap">
                        <Pagination />
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;