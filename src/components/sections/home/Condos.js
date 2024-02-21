import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/condos/menu-gallery-1.jpg';
import img2 from '../../../assets/img/condos/menu-gallery-2.jpg';
import img3 from '../../../assets/img/condos/menu-gallery-3.jpg';
import img4 from '../../../assets/img/condos/menu-gallery-4.jpg';

const condospost = [
    { img: img1, title: 'City Hotel', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do', price: '300', btntext: 'Book now' },
    { img: img2, title: 'City Hotel', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do', price: '300', btntext: 'Book now' },
    { img: img3, title: 'City Hotel', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do', price: '300', btntext: 'Book now' },
    { img: img4, title: 'City Hotel', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do', price: '300', btntext: 'Book now' },
];

class Condos extends Component {
    render() {
        return (
            <section className="condos-overlay-sec">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        {condospost.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="condo-item" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                    <div className="title">
                                        <i className="fal fa-plus text-white" />
                                        <h4 className="text-white">{item.title}</h4>
                                    </div>
                                    <div className="title title-hidden">
                                        <h4 className="text-white mt-0">{item.title}</h4>
                                        <p className="text-white">{item.text}</p>
                                        <div className="book-btn">
                                            <Link to="#"><i className="fal fa-long-arrow-right" />
                                                {item.btntext}
                                            </Link>
                                        </div>
                                    </div>
                                    <Link to="#" className="main-btn btn-border">Starting at ${item.price}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Condos;