import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Pagination from '../../layouts/Pagination';

import img1 from '../../../assets/img/room/01.jpg';
import img2 from '../../../assets/img/room/02.jpg';
import img3 from '../../../assets/img/room/03.jpg';
import img4 from '../../../assets/img/room/04.jpg';
import img5 from '../../../assets/img/room/05.jpg';
import img6 from '../../../assets/img/room/06.jpg';
import img7 from '../../../assets/img/room/07.jpg';
import img8 from '../../../assets/img/room/08.jpg';
import img9 from '../../../assets/img/room/09.jpg';
import img10 from '../../../assets/img/room/10.jpg';
import img11 from '../../../assets/img/room/11.jpg';
import img12 from '../../../assets/img/room/12.jpg';

const appartmentgridpost = [
    { img: img1, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img2, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img3, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img4, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img5, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img6, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img7, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img8, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img9, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img10, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img11, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
    { img: img12, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
];

class Content extends Component {
    render() {
        return (
            <section className="room-section room-grid-style pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center room-gird-loop">
                        {appartmentgridpost.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="room-box mb-30">
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
                    <div className="pagination-wrap">
                        <Pagination />
                    </div>
                </div>
            </section >
        );
    }
}

export default Content;