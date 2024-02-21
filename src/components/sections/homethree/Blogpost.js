import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/latest-post/01.jpg';
import img2 from '../../../assets/img/latest-post/02.jpg';
import img3 from '../../../assets/img/latest-post/03.jpg';

const blogpost = [
    { img: img1, title: 'Each of our 8 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { img: img2, title: 'Each of our 8 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { img: img3, title: 'Each of our 8 double rooms has its own distinct.', postdate: '28th Aug 2020', author: 'Admin', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
];

class Blogpost extends Component {
    render() {
        return (
            <div className="section latest-news pb-90">
                <div className="spacer dark-bg" />
                <div className="container">
                    {/* Latest post loop */}
                    <div className="row">
                        {blogpost.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="latest-post-box mt-30">
                                    <div className="post-img" style={{ backgroundImage: "url(" + item.img + ")" }} />
                                    <div className="post-desc">
                                        <ul className="post-meta">
                                            <li>
                                                <Link to="/news-details"><i className="fal fa-calendar-alt" />{item.postdate}</Link>
                                            </li>
                                            <li>
                                                <Link to="/news-details"><i className="fal fa-user" />By {item.author}</Link>
                                            </li>
                                        </ul>
                                        <h4><Link to="/news-details">{item.title}</Link></h4>
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogpost;