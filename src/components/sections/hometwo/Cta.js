import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
            <section className="book-room-style2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="book-room-content">
                                <h3 className="mb-15">Executive Apartments</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna..</p>
                                <Link to="/contact">
                                    <i className="fal fa-long-arrow-right" />
            Contact Us
          </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 mobile-none">
                            <div className="calender-box">
                                <form>
                                    <ul>
                                        <li>
                                            <label>Arrival Date</label>
                                            <div className="calender-input-box">
                                                <div className="calender-input-inner">
                                                    <span>Sep</span>
                                                    <h3>12</h3>
                                                    <div className="calendar-controls">
                                                        <Link to="#" className="next-day">
                                                            <i className="fal fa-long-arrow-up" />
                                                        </Link>
                                                        <Link to="#" className="prev-day">
                                                            <i className="fal fa-long-arrow-down" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Departure Date</label>
                                            <div className="calender-input-box">
                                                <div className="calender-input-inner">
                                                    <span>Oct</span>
                                                    <h3>15</h3>
                                                    <div className="calendar-controls">
                                                        <Link to="#" className="next-day">
                                                            <i className="fal fa-long-arrow-up" />
                                                        </Link>
                                                        <Link to="#" className="prev-day">
                                                            <i className="fal fa-long-arrow-down" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Adults</label>
                                            <div className="calender-input-box">
                                                <div className="calender-input-inner">
                                                    <h3>01</h3>
                                                    <div className="calendar-controls">
                                                        <Link to="#" className="next-day">
                                                            <i className="fal fa-long-arrow-up" />
                                                        </Link>
                                                        <Link to="#" className="prev-day">
                                                            <i className="fal fa-long-arrow-down" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <label>Child</label>
                                            <div className="calender-input-box">
                                                <div className="calender-input-inner">
                                                    <h3>02</h3>
                                                    <div className="calendar-controls">
                                                        <Link to="#" className="next-day">
                                                            <i className="fal fa-long-arrow-up" />
                                                        </Link>
                                                        <Link to="#" className="prev-day">
                                                            <i className="fal fa-long-arrow-down" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="reserve-block text-white">
                                        <span>Reservation is available 24 hours</span>
                                        <Link to="/contact" className="text-white">
                                            <i className="fal fa-long-arrow-right" />
                CHECK AVAILABILITY
              </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;