import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/team/01.jpg';
import img2 from '../../../assets/img/team/02.jpg';
import img3 from '../../../assets/img/team/03.jpg';

const teampost = [
    { img: img1, name: 'Rosa D.William', post: 'Founder & CEO' },
    { img: img2, name: 'hilixer b. browni', post: 'co-founder' },
    { img: img3, name: 'pokoloko k. kilix', post: 'consultant' },
];

class Team extends Component {
    render() {
        return (
            <section className="team-section bg-white has-slider pt-115 pb-85">
                <div className="container">
                    <div className="section-title text-center mb-80">
                        <span className="title-tag">Our Brokers</span>
                        <h2>Talent We Rely On</h2>
                    </div>
                    <div className="row team-loop">
                        {teampost.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="member-box">
                                    <div className="member-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="member-info">
                                        <h3>{item.name}</h3>
                                        <span>{item.post}</span>
                                    </div>
                                    <Link to="#" className="socail-trigger">+</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;