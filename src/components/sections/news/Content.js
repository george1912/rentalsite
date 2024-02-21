import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from '../../layouts/Pagination';

import blogimg from '../../../assets/img/blog/01.jpg';
import blogimg2 from '../../../assets/img/blog/02.jpg';
import blogimg3 from '../../../assets/img/blog/03.jpg';
import blogimg4 from '../../../assets/img/blog/06.jpg';
import smallauthor from '../../../assets/img/author-small.png';

class Content extends Component {
    render() {
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="blog-loop">
                                <div className="post-box mb-40">
                                    <div className="post-media">
                                        <img src={blogimg} alt="" />
                                    </div>
                                    <div className="post-desc">
                                        <Link to="/news-details" className="cat">Businese</Link>
                                        <h2>
                                            <Link to="/news-details">Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod
                  tempor.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/news-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-calendar-alt" />24th March 2020</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/news-details">
                                                    <img src={smallauthor} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/news-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-box with-video mb-40">
                                    <div className="post-media">
                                        <img src={blogimg2} alt="" />
                                        <Link to="/news-details" className="play-icon"><i className="fas fa-play" /></Link>
                                    </div>
                                    <div className="post-desc">
                                        <Link to="/news-details" className="cat">Businese</Link>
                                        <h2>
                                            <Link to="/news-details">Adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/news-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-calendar-alt" />24th March 2020</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/news-details">
                                                    <img src={smallauthor} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/news-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-box mb-40">
                                    <div className="post-media">
                                        <img src={blogimg3} alt="" />
                                    </div>
                                    <div className="post-desc">
                                        <Link to="/news-details" className="cat">Businese</Link>
                                        <h2>
                                            <Link to="/news-details">Magna aliqua. Ut enim ad minim venia
                  m, quis nostrud exercitation ullamco</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/news-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-calendar-alt" />24th March 2020</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/news-details">
                                                    <img src={smallauthor} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/news-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-box sound-cloud-post mb-40">
                                    <div className="post-media">
                                        <img src={blogimg4} alt="" />
                                    </div>
                                    <div className="post-desc">
                                        <Link to="/news-details" className="cat">Businese</Link>
                                        <h2>
                                            <Link to="/news-details">Laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/news-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-calendar-alt" />24th March 2020</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/news-details">
                                                    <img src={smallauthor} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/news-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-box no-thumb mb-40">
                                    <div className="post-desc">
                                        <Link to="/news-details" className="cat">Businese</Link>
                                        <h2>
                                            <Link to="/news-details">In reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/news-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-calendar-alt" />24th March 2020</Link></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                        <div className="post-footer">
                                            <div className="author">
                                                <Link to="/news-details">
                                                    <img src={smallauthor} alt="" />
                    by Hetmayar
                  </Link>
                                            </div>
                                            <div className="read-more">
                                                <Link to="/news-details"><i className="far fa-arrow-right" />Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-box quote-post mb-40">
                                    <div className="post-desc">
                                        <h2>
                                            <Link to="/news-details">Excepteur sint occaecat cupida
                  tat non proident, sunt in.</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/news-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-calendar-alt" />24th March 2020</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="post-box title-with-thumb mb-40">
                                    <div className="post-desc">
                                        <Link to="/news-details" className="cat">Businese</Link>
                                        <h2>
                                            <Link to="/news-details">Culpa qui officia deserunt mollit anim
                  id est laborum. Sed ut perspiciatis</Link>
                                        </h2>
                                        <ul className="post-meta">
                                            <li><Link to="/news-details"><i className="far fa-eye" />232 Views</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-comments" />35 Comments</Link></li>
                                            <li><Link to="/news-details"><i className="far fa-calendar-alt" />24th March 2020</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrap">
                                <Pagination />
                            </div>
                        </div>
                        {/* Blog Sidebar */}
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;