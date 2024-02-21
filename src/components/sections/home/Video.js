import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
// import 'magnific-popup';

// import videobg from '../../../assets/img/text-block/03.jpg';

class Video extends Component {
    componentDidMount(){
    //     function popup(){
    //         $('.popup-video').magnificPopup({
    //             type: 'iframe',
    //         });
    //     }
    //     popup();
    }
    render() {
        return (
            <section className="text-block bg-black pt-115 pb-115">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="block-text text-center">
                                <div className="section-title mb-20">
                                    {/* <span className="title-tag">intro video</span> */}
                                    <h2>Meet With Us</h2>
                                </div>
                                <p>
                                Like what you see?
                                <br />
                                 Don't hesitate to send us an email or give us a call. 
                                 <br />
                                Find your perfect Brooklyn Rental. We're ready to assist you in booking the perfect space.
          </p>
          <Link to="#" onClick={(e) => {
    e.preventDefault();
    window.location.href = 'mailto:info@urbanfoxrentals.com?subject=Interest%20in%20Listing';
}} className="main-btn btn-filled mt-40">Book now</Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-10 order-1 order-lg-2 wow fadeInRight" data-wow-delay=".3s">
                            <div className="video-wrap video-wrap-two mb-small" style={{ backgroundImage: "url(" + videobg + ")" }}>
                                <Link to="http://www.youtube.com/embed/watch?v=EEJFMdfraVY" className="popup-video"><i className="fas fa-play" /></Link>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="pattern-wrap">
                    <div className="pattern" />
                </div> */}
            </section>
        );
    }
}

export default Video;