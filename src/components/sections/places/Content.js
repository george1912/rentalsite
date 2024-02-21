import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import img1 from '../../../assets/img/places/01.jpg';
import img2 from '../../../assets/img/places/02.jpg';
import img3 from '../../../assets/img/places/03.jpg';
import img4 from '../../../assets/img/places/04.jpg';
import img5 from '../../../assets/img/places/05.jpg';
import img6 from '../../../assets/img/places/06.jpg';
import img7 from '../../../assets/img/places/07.jpg';

const placeposts = [
    { img: img1, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: img2, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: img3, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: img4, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: img5, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: img6, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' },
    { img: img7, title: 'Duplex Restaurant', time: '1,500m | 21 min. Walk' }
];
class Content extends Component {
    render() {
        const Map = ReactMapboxGl({
            accessToken:
                'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'
        });
        return (
            <section className="places-wrapper pt-120 pb-120">
                <div className="container">
                    {/* Places Maps */}
                    <Map
                        style="mapbox://styles/mapbox/light-v10"
                        className="contact-maps bg-white"
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[-77.04, 38.907]} zoom={11} />
                        </Layer>
                    </Map>
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