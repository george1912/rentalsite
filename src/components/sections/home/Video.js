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
                                    <h2>Contact Us</h2>
                                </div>
                                <p>
                                Looking for a place that feels like home?
                                <br />
                                 Don't hesitate to send us an email or give us a call. 
                                 <br />
                                Find your perfect Brooklyn Rental.
          </p>
          {/* <Link to="#" onClick={(e) => {
    e.preventDefault();
    window.location.href = 'mailto:info@previewurbanfoxrentals.com?subject=Interest%20in%20Listing';
}} className="main-btn btn-filled mt-40">Email US</Link> */}

<div className="button-stack" style={{ marginTop: '2rem' }}>
  
<Link
  style={{
    display: 'block',
    margin: '0 auto 1rem auto',
    maxWidth: '250px',
    width: '100%',
    textAlign: 'center',
  }}
  to="#"
  onClick={(e) => {
    e.preventDefault();
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScnF4s3pjfLJRTl925okHtP80kyLMLO1XnPdaiKkh7FyrhU_Q/viewform?usp=dialog',
      '_blank',
      'noopener,noreferrer'
    );
  }}
  className="main-btn btn-filled"
>
  Request Info
</Link>
</div>





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