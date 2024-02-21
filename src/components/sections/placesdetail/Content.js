import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import mainbanner from '../../../assets/img/places/08.jpg';

import glimg1 from '../../../assets/img/places/09.jpg';
import glimg2 from '../../../assets/img/places/10.jpg';

import plimg1 from '../../../assets/img/places/01.jpg';
import plimg2 from '../../../assets/img/places/02.jpg';
import plimg3 from '../../../assets/img/places/03.jpg';
import plimg4 from '../../../assets/img/places/04.jpg';
// Gallery
const gallerypost = [
    { img: glimg1 },
    { img: glimg2 },
]; 
// placeposts
const placeposts = [
    { img: plimg1, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: plimg2, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: plimg3, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: plimg4, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' }
];
class Content extends Component {
    render() {
        return (
            <section className="places-wrapper pt-120 pb-120">
                <div className="container">
                    <div className="places-details">
                        <div className="main-thumb mb-50">
                            <img src={mainbanner} alt="" />
                        </div>
                        <div className="title-wrap mb-50 d-flex align-items-center justify-content-between">
                            <div className="title">
                                <span className="place-cat">destination</span>
                                <h2>Miranda Halim Restaurent</h2>
                            </div>
                            <div className="link">
                                <Link to="/contact">direction</Link>
                            </div>
                        </div>
                        <p className="mb-25">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem totam rem aperiam, eaque ipsa quae ab illo inventore.
      </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                            ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
                        <div className="gallery mt-30 mb-60">
                            <div className="row">
                                {gallerypost.map((item, i) => (
                                    <div key={i} className="col-sm-6 mt-30">
                                        <img src={item.img} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-25">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
                            ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem totam rem aperiam, eaque ipsa quae ab illo inventore.
      </p>
                    </div>
                    {/* Places Boxes */}
                    <div className="places-boxes pt-115">
                        {/* Title */}
                        <div className="section-title text-center mb-50">
                            <span className="title-tag">Popular</span>
                            <h2>Highlights Places</h2>
                        </div>
                        <div className="row justify-content-center">
                            {placeposts.map((item, i) => (
                                <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-10">
                                    <div className="place-box mt-30">
                                        <div className="place-bg-wrap">
                                            <div className="place-bg" style={{ backgroundImage: "url(" + item.img + ")" }} />
                                        </div>
                                        <div className="desc">
                                            <h4><Link to="/places-details">{item.title}</Link></h4>
                                            <span className="time">{item.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;