import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import mainimg from '../../../assets/img/room/apt-1-details.jpg';
import testi1 from '../../../assets/img/testimonial/01.png';
import testi2 from '../../../assets/img/testimonial/02.png';
import rel1 from '../../../assets/img/room/13.jpg';
import rel2 from '../../../assets/img/room/14.jpg';

// Testimonials
// const testimonialpost = [
//     { img: testi1, name: 'Rosalina D. William', post: 'Founder, qux co.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
//     { img: testi2, name: 'Donald H. Hilixer', post: 'Founder, hilix', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
// ];
// Related post
// const relatedpost = [
    // { img: rel1, title: 'Modern Homestead', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '3900', period: 'Month' },
    // { img: rel2, title: 'Minimal Duplex Apartment', text: 'Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.', price: '345', period: 'Month' },
// ];

class Content extends Component {
    render() {
        // const Map = ReactMapboxGl({
        //     accessToken:
        //         'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'
        // });
        return (
            <section className="room-details pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        {/* details */}
                        <div className="col-lg-8">
                            <div className="deatils-box">
                                <div className="title-wrap">
                                    <div className="title">
                                        <div className="room-cat">Queen Bed</div>
                                        <h2>Spacious 3BR, 1BA</h2>
                                    </div>
                                    <div className="price">
                                        $3300<span>/Month</span>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img src={mainimg} alt="" />
                                </div>
                                <p>
                                Welcome to your next home in the heart of Park Slope, Brooklyn! This 900 sq ft apartment is your blank canvas, perfect for those seeking a personal touch in one of New York City's most desirable neighborhoods. The flexible layout features three bedrooms and a bathroom, making it an ideal choice for students, professionals, working couples and anyone eager to dive into city life.

                                <br />
                                <br />

                                Optional Furnishing: Tailor your space to your taste with our furnishing package available for an additional monthly fee. This includes two TVs, a comfortable living setup with a couch and coffee table, a dining area, a work-ready office desk and chair, and a futon that doubles as extra sleeping space. Bedrooms can be equipped with beds, dressers, and full-body mirrors for your convenience.
                                <br />
                                <br />
                                Kitchen Ready: Choose to have your kitchen pre-stocked with essentials such as plates, glasses, cups, and utensils, allowing you to settle in with ease.
                                <br />
                                <br />
                                Comfort and Convenience: Opt for added ease with available AC window units, and enjoy a space bathed in natural light thanks to skylights in the bathroom and kitchen.
                                <br />
                                <br />
                                Utilities Included: Cooking gas, water, and heating.
                                <br />
                                <br />
                                Seize the opportunity to make this exceptional Park Slope apartment your own. Contact us to schedule a viewing today and begin your next adventure in one of Brooklyn's most sought-after neighborhoods!
                                <br />
                                <br />


          </p>
                                {/* <div className="room-fearures clearfix mt-60 mb-60">
                                    <h3 className="subtitle">Feature Highlights Package</h3>
                                    <ul className="room-fearures-list">
                                        <li><i className="fal fa-bath" /> Air conditioner</li>
                                        <li><i className="fal fa-wifi" />High speed WiFi</li>
                                        <li><i className="fal fa-credit-card" />Digital Pay Options</li>
                                        <li><i className="fal fa-cut" />Kitchen Supplies</li>
                                        <li><i className="fal fa-shower" />Shower</li>
                                        <li><i className="fal fa-bed" />Queen bed</li>
                                        <li><i className="fal fa-users" />On Site Team</li>
                                        <li><i className="fal fa-shopping-cart" />Shopping Near</li>
                                        <li><i className="fal fa-clipboard" />Office</li>
                                    </ul>
                                </div> */}
                               

          
                                {/* <div className="testimonials mt-60 mb-20">
                                    <div className="row">
                                        {testimonialpost.map((item, i) => (
                                            <div key={i} className="col-lg-6 col-sm-6">
                                                <div className="testimonial-box">
                                                    <div className="client-img">
                                                        <img src={item.img} alt="" />
                                                        <span className="check"><i className="fal fa-check" /></span>
                                                    </div>
                                                    <h3>{item.name}</h3>
                                                    <span className="clinet-post">{item.post}</span>
                                                    <p>
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}
                                <div className="room-rules clearfix mb-60">
                                    <h3 className="subtitle">Stay Guidlines</h3>
                                    <ul className="room-rules-list">
                                        <li>No smoking allowed.</li>
                                        <li>Small Pets are permitted.</li>                                        

                                    </ul>
                                </div>

                                <p>
                                Situated in the vibrant Park Slope neighborhood, you're just steps away from a 24-hour laundry facility, ensuring convenience around the clock. Enjoy easy access to fantastic restaurants, entertainment options, and outdoor activities, with the park a few blocks away—ideal for biking and leisure. Just a block away from Prospect Ave Station(R/N/D) making it perfect for getting to and from the city.
                                <br />
                                <br />

          </p>
                                {/* <div className="cancellation-box clearfix mb-60">
                                    <h3 className="subtitle">Cancellation</h3>
                                    <p>
                                        Phasellus volutpat neque a tellus venenatis, a euismod augue facilisis. Fusce ut metus
                                        mattis, consequat metus nec, luctus lectus. Pellentesque orci quis hendrerit sed eu
              dolor. <strong>Cancel up</strong> to <strong>14 days</strong> to get a full refund.
            </p>
                                </div> */}
                                {/* <Map
                                    style="mapbox://styles/mapbox/light-v10"
                                    className="room-map mb-60"
                                >
                                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                                        <Feature coordinates={[-77.04, 38.907]} zoom={11} />
                                    </Layer>
                                </Map> */}
                                {/* <div className="related-room">
                                    <h3 className="subtitle">Related Apartments</h3>
                                    <div className="row room-gird-loop">
                                        {relatedpost.map((item, i) => (
                                            <div key={i} className="col-lg-6 col-sm-6">
                                                <div className="room-box mb-30">
                                                    <div className="room-img-wrap">
                                                        <div className="room-img" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                                        </div>
                                                    </div>
                                                    <div className="room-desc">
                                                        <ul className="icons">
                                                            <li><i className="fal fa-bed" /></li>
                                                            <li><i className="fal fa-wifi" /></li>
                                                            <li><i className="fal fa-car" /></li>
                                                            <li><i className="fal fa-coffee" /></li>
                                                            <li><i className="fal fa-concierge-bell" /></li>
                                                            <li><i className="fal fa-compress-arrows-alt" /></li>
                                                            <li><i className="fal fa-swimmer" /></li>
                                                        </ul>
                                                        <h4 className="title"><Link to="#">{item.title}</Link></h4>
                                                        <p>{item.text}</p>
                                                        <span className="price">${item.price}/{item.period}</span>
                                                        <Link to="#" className="book-btn">Booking Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* form */}
                        {/* <div className="col-lg-4">
                            <div className="room-booking-form">
                                <h5 className="title">Check Availability</h5>
                                <form action="#">
                                    <div className="input-group input-group-two left-icon mb-20">
                                        <label htmlFor="arrival-date">Check In</label>
                                        <div className="icon"><i className="fal fa-calendar-alt" /></div>
                                        <input type="text" placeholder="20-6-2020" name="arrival-date" id="arrival-date" />
                                    </div>
                                    <div className="input-group input-group-two left-icon mb-20">
                                        <label htmlFor="departure-date">Check Out</label>
                                        <div className="icon"><i className="fal fa-calendar-alt" /></div>
                                        <input type="text" placeholder="30-6-2020" name="departure-date" id="departure-date" />
                                    </div>
                                    <div className="input-group input-group-two left-icon mb-20">
                                        <label htmlFor="room">Apartments</label>
                                        <select name="room" id="room">
                                            <option value={1}>1 Apartment</option>
                                            <option value={2}>2 Apartment</option>
                                            <option value={4}>4 Apartment</option>
                                            <option value={8}>8 Apartment</option>
                                        </select>
                                    </div>
                                    <div className="input-group input-group-two left-icon mb-20">
                                        <label htmlFor="departure-date">Guest</label>
                                        <select name="guest" id="guest">
                                            <option value={8}>8 Guest</option>
                                            <option value={10}>10 Guest</option>
                                            <option value={12}>12 Guest</option>
                                            <option value={15}>15 Guest</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <button className="main-btn btn-filled">check availability</button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;