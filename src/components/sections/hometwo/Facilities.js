import React, { Component } from 'react';

import img1 from '../../../assets/img/we-offer/01.jpg';
import img2 from '../../../assets/img/we-offer/02.jpg';
import img3 from '../../../assets/img/we-offer/03.jpg';
import img4 from '../../../assets/img/we-offer/04.jpg';

const facilitiespost = [
    { img: img1, icon: 'flaticon-team', title: 'Strong Team', text: 'You have a family or Party Reunion' },
    { img: img2, icon: 'flaticon-fast-food', title: 'Fresh Food', text: 'You have a family or Party Reunion' },
    { img: img3, icon: 'flaticon-swimming', title: 'Swimming Pool', text: 'You have a family or Party Reunion' },
    { img: img4, icon: 'flaticon-hotel', title: 'Luxury Room', text: 'You have a family or Party Reunion' },
];

class Facilities extends Component {
    render() {
        return (
            <section className="condos-overlay-sec pt-115 pb-155">
                <div className="container-fluid">
                    <div className="section-title text-center mb-50">
                        <span className="title-tag"> facilities </span>
                        <h2>What We Offer</h2>
                    </div>
                    <div className="row">
                        {facilitiespost.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="condo-item hotel-intro" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                    <div className="title">
                                        <div className="icon">
                                            <i className={item.icon} />
                                        </div>
                                        <h4 className="text-white">{item.title}</h4>
                                        <div className="display-on-hover">
                                            <p className="text-white">{item.text}</p>
                                        </div>
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

export default Facilities;