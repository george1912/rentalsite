import React, { Component } from 'react';

class Bookingform extends Component {
    render() {
        return (
            <div className="booking-form boxed-layout">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-11">
                            <div className="booking-form-inner">
                                <form action="#">
                                    <div className="row align-items-end">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="inputs-filed mt-30">
                                                <label htmlFor="arrival-date">Arrival Date</label>
                                                <div className="icon"><i className="fal fa-calendar-alt" /></div>
                                                <input type="text" placeholder="24th march 2020" name="arrival-date" id="arrival-date" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="inputs-filed mt-30">
                                                <label htmlFor="departure-date">Departure Date</label>
                                                <div className="icon"><i className="fal fa-calendar-alt" /></div>
                                                <input type="text" placeholder="30th march 2020" name="departure-date" id="departure-date" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="inputs-filed mt-30">
                                                <label htmlFor="guests">Guests</label>
                                                <select name="guests" id="guests">
                                                    <option value={0}>Select From Here</option>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={4}>4</option>
                                                    <option value={8}>8</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="inputs-filed mt-30">
                                                <button type="submit">check availability</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bookingform;