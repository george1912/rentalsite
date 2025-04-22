import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

import img1 from '../../../assets/img/gallery/bedroom-01-9st.jpg';
import img2 from '../../../assets/img/gallery/kitchen-02-9st.jpg';
import img3 from '../../../assets/img/gallery/living-room-03-9st.jpg';
import img4 from '../../../assets/img/gallery/laundry-04-9st.jpg';
import img5 from '../../../assets/img/gallery/office-05-9st.jpg';
import img6 from '../../../assets/img/gallery/dining-06-9st.jpg';
import img7 from '../../../assets/img/gallery/bathroom-07-9st.jpg';
import img8 from '../../../assets/img/gallery/bathroom-08-9st-p1.JPG';


const gallerypost = [
    { img: img1, animation: '.3s' },
    { img: img2, animation: '.4s' },
    { img: img3, animation: '.5s' },
    { img: img4, animation: '.6s' },
    { img: img5, animation: '.7s' },
    { img: img6, animation: '.8s' },
    { img: img7, animation: '.9s' },
    { img: img8, animation: '1.1s' },

];

class Content extends Component {
    componentDidMount() {
        function popup() {
            $('.gallery-loop .popup-image').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                },
                mainClass: 'mfp-fade',
            });
        }
        popup();
    }
    render() {
        return (
            <div className="gallery-wrappper pt-120 pb-120">
                <div className="container">
                    <div className="gallery-loop">
                        {gallerypost.map((item, i) => (
                            <div key={i} className="single-gallery-image wow fadeInUp" data-wow-delay={item.animation}>
                                <Link to={item.img} className="popup-image">
                                    <img src={item.img} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;