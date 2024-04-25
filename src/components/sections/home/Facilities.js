import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/room-suite/homestead-apt-1.jpg';
import img2 from '../../../assets/img/room-suite/sleek-stuido-apt-2.png';
// import img3 from '../../../assets/img/room-suite/03.jpg';
// import img4 from '../../../assets/img/room-suite/04.jpg';

const apartmentspost = [
    {
        img: img1, title: 'Modern Homestead',
        text: '3 Bedroom, 1 Bath, Queen Bed, Optional Furnishment',
        utilities: 'Utilities Included: Cooking Gas, Heat, Water',
        price: '3200', period: 'Month'
    },
    {
        img: img2, title: 'Sleek Sanctuary',
        text: 'Studio, Queen Bed, Optional Furnishment',
        utilities: 'Utilities Included: Gas, Heat, Water, High-speed Internet', // Leave empty or add utilities if applicable 
        price: 'TBA', period: 'Month'
    },
    // { img: img3, title: 'Garden Apartment', text: '1 Person, Queed Bed, 2 Windows', price: '345', period: 'Month' },
    // { img: img4, title: 'Duplex Apartment', text: '1 Person, Queed Bed, 2 Windows', price: '345', period: 'Month' },
];

class Facilities extends Component {
    render() {
        return (
            <section className="pt-115 pb-115 bg-white">
                <div className="container">
                    <div className="section-title text-center mb-30">
                        <span className="title-tag"> facilities </span>
                        <h2>Apartments</h2>
                    </div>
                    {/* <div className="text-center mb-20">
                        <Link to="/apartment-grid">View more
                            <i className="fal fa-arrow-right ml-2" />
                        </Link>
                    </div> */}
                    <div className="row">
                        {apartmentspost.map((item, i) => (
                            <div key={i} className="col-lg-6 col-md-6">
                                <div className="apartment-box">
                                    <div className="image-box">

                                        {/* <Link to="/apartment-details" className="d-block">
                                            <img src={item.img} alt="img" />
                                        </Link> */}

                                        {i === 0 ? (
                                            // Only the first apartment image is clickable
                                            <Link to={`/apartment-details/${item.id}`} className="d-block">
                                                <img src={item.img} alt="img" />
                                            </Link>
                                        ) : (
                                            // Non-clickable image for other apartments
                                            <img src={item.img} alt="img" />
                                        )}
                                    </div>
                                    <div className="content-box-2">
                                        <h3 className="title">
                                            {/* <Link to="/apartment-details">{item.title}</Link> */}
                                            <span>{item.title}</span>
                                        </h3>
                                        <p>{item.text}</p>
                                        <p className="utilities">{item.utilities}</p>
                                        <span className="price">${item.price}/{item.period}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Facilities;