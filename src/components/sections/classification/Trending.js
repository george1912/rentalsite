import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/menu/01.jpg';
import img2 from '../../../assets/img/menu/02.jpg';
import img3 from '../../../assets/img/menu/03.jpg';
import img4 from '../../../assets/img/menu/04.jpg';
import img5 from '../../../assets/img/menu/05.jpg';
import img6 from '../../../assets/img/menu/06.jpg';
import img7 from '../../../assets/img/menu/07.jpg';
import img8 from '../../../assets/img/menu/08.jpg';
import img9 from '../../../assets/img/menu/09.jpg';
import img10 from '../../../assets/img/menu/10.jpg';

// Menu left post 
const menuleftposts = [
    { img: img1, url: '#', title: 'Eggs & Bacon', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.3s' },
    { img: img2, url: '#', title: 'Tea or Coffee', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.4s' },
    { img: img3, url: '#', title: 'Chia Oatmeal', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.5s' },
    { img: img4, url: '#', title: 'Juice', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.6s' },
    { img: img5, url: '#', title: 'Chia Oatmeal', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.7s' },
];
// Menu right post 
const menurightposts = [
    { img: img6, url: '#', title: 'Fruit Parfait', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.3s' },
    { img: img7, url: '#', title: 'Marmalade Selection', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.4s' },
    { img: img8, url: '#', title: 'Cheese Platen', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.5s' },
    { img: img9, url: '#', title: 'Avocado Toast', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.6s' },
    { img: img10, url: '#', title: 'Avocado Toast', desc: 'Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor.', animation: '.7s' },
];

class Trending extends Component {
    render() {
        return (
            <section className="menu-area gradient-white pt-115 pb-115">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center mb-80">
                        <span className="title-tag">available</span>
                        <h2>Treanding Menu</h2>
                    </div>
                    {/* Menu Looop */}
                    <div className="menu-loop">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-10">
                                {menuleftposts.map((item, i) => (
                                    <div key={i} className="single-menu-box wow fadeInUp" data-wow-delay={item.animation}>
                                        <div className="menu-img" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                        </div>
                                        <div className="menu-desc">
                                            <h4><Link to={item.url}>{item.title}</Link></h4>
                                            <p>{item.desc}
                                            </p>
                                            <Link to={item.url} className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-6 col-md-10">
                                {menurightposts.map((item, i) => (
                                    <div key={i} className="single-menu-box wow fadeInUp" data-wow-delay={item.animation}>
                                        <div className="menu-img" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                        </div>
                                        <div className="menu-desc">
                                            <h4><Link to={item.url}>{item.title}</Link></h4>
                                            <p>{item.desc}
                                            </p>
                                            <Link to={item.url} className="menu-link"><i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trending;