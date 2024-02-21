import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../assets/img/instagram/01.jpg';
import img2 from '../../assets/img/instagram/02.jpg';
import img3 from '../../assets/img/instagram/03.jpg';
import img4 from '../../assets/img/instagram/04.jpg';
import img5 from '../../assets/img/instagram/05.jpg';
import img6 from '../../assets/img/instagram/06.jpg';

const instapost = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
];

class Instapost extends Component {
    render() {
        const settings = {
            slidesToShow: 6,
            slidesToScroll: 1,
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        }
        return (
            <div className="instagram-feed-section">
                <div className="container-fluid p-0">
                    <Slider className="instagram-slider" {...settings}>
                        {instapost.map((item, i) => (
                            <div key={i} className="image">
                                <Link to={item.img} className="insta-popup">
                                    <img src={item.img} alt="instagram" />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Instapost;