import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import mainimg from '../../../assets/img/room/apartment-bedroom-details-color.jpg';




class Content extends Component {
    render() {

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
                                        <h2>Spacious 1BR, 1BA</h2>
                                    </div>
                                    <div className="price">
                                        $3900<span>/Month</span>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img src={mainimg} alt="" />
                                </div>
                                <p style={{ color: '#3c4c5e' }}>
                                Welcome to <strong>"The Livewell on 9th Street"</strong> your move-in-ready home in the heart of Park Slope. This light-filled,apartment offers a rare combination of flexibility, comfort, and curated design — perfect for professionals, students, couples, or anyone looking for more than just a place to stay
                                <br />
                                <br />
                                The layout includes three bedrooms and one bathroom, with the option to fully furnish your space with high-quality pieces — from smart TVs and dining essentials to work-from-home setups and cozy sleeping arrangements. Whether you're staying a few months or longer, this apartment is designed to support your routine, your comfort, and your lifestyle.
                                <br />
                                <br />
                                Located just off 4th Avenue and a block from the R/F/G trains, you'll have easy access to Prospect Park, local restaurants, groceries, and a 24-hour laundry facility — all within a few blocks. Month-to-month leasing makes it easier than ever to live flexibly, without the pressure of a long-term commitment.
                                <br />
                                <br />
                                Make yourself at home — and make it yours.
                                <br />
                                <br />
                                <strong>  Utilities:</strong>
                                <br />
                                <ul>
  <li>High-speed internet (with guest SSID access) and Water are included</li>
  <li>Water included</li>
  <li><em>*Electricity and cooking gas are billed based on usage for added flexibility*</em></li>
</ul>
                                
                                <br />
                                <br />
                                Seize the opportunity to make this exceptional Park Slope apartment your own. 
                                
                   
                                <br />
                                Contact us to schedule a viewing today and begin your next adventure in one of Brooklyn's most sought-after neighborhoods!
                                <br />
                                <br />


          </p>
                              
          
                                
                                <div className="room-rules clearfix mb-60">
                                    <h3 className="subtitle">Stay Guidlines</h3>
                                    <ul className="room-rules-list">
                                        <li>No smoking allowed.</li>
                                        <li>Pets approved case-by-case</li>                                        

                                    </ul>
                                </div>

                                <p style={{ color: '#3c4c5e' }}>
                                At <strong>Urban Fox Rentals</strong>, it's not just about finding a place to live — it's about creating a space that works for you. With thoughtful amenities, flexible terms, and a location that brings the best of Brooklyn to your doorstep, this apartment is ready to meet your needs from day one.
                                <br />
                                <br />

          </p>
          <div className="map-container" style={{ margin: '2rem 0' }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4676454703916!2d-73.9890219241905!3d40.66843567138809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba3d85c4401%3A0xaeb29b4bcfd5cf97!2s4th%20Ave%20%26%209th%20St%2C%20Brooklyn%2C%20NY%2011215!5e0!3m2!1sen!2sus!4v1713382721502!5m2!1sen!2sus"
    width="100%"
    height="400"
    style={{ border: 0, borderRadius: '12px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Map of 4th Ave & 9th St"
  ></iframe>
</div>


          
                              
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;