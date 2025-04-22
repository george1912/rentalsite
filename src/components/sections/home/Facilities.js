import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/room-suite/livewell-apt-1.jpg';



const apartmentspost = [
    {
        img: img1, 
        title: 'Livewell Suite',
        spaceDetails: ['1 Bedroom, 1 Bath, Fully Furnished', '900 Sq Ft'],

        furnishings: [
            'Queen Bed with Fresh Linens Provided',
            'Comfortable Premade Room Setups',
            'Fully Outfitted Kitchen stocked with all the Essentials',
        ],
        amenities: [
            'In-unit Washer & Dryer',
            'Central Air Conditioning & Heating',
            'Professional Cooking Range and Appliances',
            'Secure Package Delivery Area',
            'Private Entrance',
        ],
        utilities: [
            'High-Speed Internet & Water Included',
            'Usage-Based Electric & Gas',
            'Complimentary VPN Service',
        ],
        price: '3900',
        period: 'Flexible Monthly Lease',
    },
];

class Facilities extends Component {
    render() {
        return (
            <section className="pt-115 pb-115 bg-white">
                <div className="container">
                    <div className="section-title text-center mb-30">
                        <span className="title-tag">Now Leasing</span>
                        <h2>Current Offering</h2>
                    </div>
                    
                    <div className="row justify-content-center">
                        {apartmentspost.length === 1 ? (
                            <div className="col-lg-6 col-md-8">
                                <div className="apartment-box">
                                    <div className="image-box">
                                        <Link to={`/apartment-details/1`} className="d-block">
                                            <img src={apartmentspost[0].img} alt="img" />
                                            <div className="image-overlay">View Gallery</div>
                                        </Link>
                                    </div>
                                    <div className="content-box-2">
                                        <h3 className="title">
                                            <span>{apartmentspost[0].title}</span>
                                        </h3>

                                        <div className="bubble">
                                        <div className="bubble-heading-wrapper">
                                            <span className="bubble-heading subtitle">Space Specs</span>
                                        </div>

                                        <ul className="details">
  {apartmentspost[0].spaceDetails.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>


                                        </div>

                                        
                                        <div className="bubble">
                                        <div className="bubble-heading-wrapper">
                                            <span className="bubble-heading subtitle">Furnishings</span>
                                        </div>
                                        <ul className="details">
  {apartmentspost[0].furnishings.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
                                        </div>

                                        
                                <div className="bubble">
                                        <div className="bubble-heading-wrapper">
                                            <span className="bubble-heading subtitle">Amenities</span>
                                        </div>
                                        <ul className="details">
  {apartmentspost[0].amenities.map((item, index) => (
    <li key={index}>{item}</li> 
  ))}
</ul>
                                        </div>




                                <div className="bubble">
                                        <div className="bubble-heading-wrapper">
                                            <span className="bubble-heading subtitle">Utilities</span>
                                        </div>
                                        <p>{apartmentspost[0].text}</p>
<ul className="details">
  {apartmentspost[0].utilities.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
                                        </div>


                                        <div className="price">
  <div className="price-amount">${apartmentspost[0].price}</div>
  <div className="price-period">{apartmentspost[0].period}</div>
</div>



                                    </div>
                                </div>
                            </div>
                        ) : (
                            apartmentspost.map((item, i) => (
                                <div key={i} className="col-lg-6 col-md-6">
                                    <div className="apartment-box">
                                        <div className="image-box">
                                            {i === 0 ? (
                                                <Link to={`/apartment-details/${i + 1}`} className="d-block">
                                                    <img src={item.img} alt="img" />
                                                </Link>
                                            ) : (
                                                <img src={item.img} alt="img" />
                                            )}
                                        </div>
                                        <div className="content-box-2">
                                            <h3 className="title">
                                                <span>{item.title}</span>
                                            </h3>
                                            <p>{item.text}</p>
                                            <p className="utilities">{item.utilities}</p>
                                            <span className="price">${item.price}/{item.period}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default Facilities;