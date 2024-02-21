import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../../assets/img/team/01.jpg';
import img2 from '../../../assets/img/team/02.jpg';
import img3 from '../../../assets/img/team/03.jpg';
import img4 from '../../../assets/img/team/04.jpg';
import img5 from '../../../assets/img/team/05.jpg';

const teampost = [
    { img: img1, name: 'Rosa D.William', post: 'Founder & CEO' },
    { img: img2, name: 'hilixer b. browni', post: 'co-founder' },
    { img: img3, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img4, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img5, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img1, name: 'Rosa D.William', post: 'Founder & CEO' },
    { img: img2, name: 'hilixer b. browni', post: 'co-founder' },
    { img: img3, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img4, name: 'pokoloko k. kilix', post: 'consultant' },
    { img: img5, name: 'pokoloko k. kilix', post: 'consultant' },
];
class Broker extends Component {
    render() {
        const settings = {
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        }
        return (
            <section className="team-section bg-white has-slider pt-115 pb-85">
                <div className="container-fluid">
                    <Slider className="row team-loop team-slider-one" {...settings}>
                        {teampost.map((item, i) => (
                            <div key={i} className="col-lg-12">
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
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Broker;