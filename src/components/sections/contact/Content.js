import React, { Component } from 'react';
import intantPhoto3 from '../../../assets/img/team/contactme-photoart-compressed.png';  

class Content extends Component {
    render() {
       
        return (
            <section className="contact-part pt-115 pb-115">
                <div className="container">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6 col-10">
                                <div className="info-box">
                                    <div className="icon">
                                        <i className="flaticon-home" />
                                    </div>
                                    <div className="desc">
                                        <h4>Office Address</h4>
                                        <p>4th Ave @ 9th Street
                                        <br />
                                        Park Slope, Brooklyn
                                            <br/>
                                            Near the R, F & G Lines
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-10">
                                <div className="info-box">
                                    <div className="icon">
                                        <i className="flaticon-phone" />
                                    </div>
                                    <div className="desc">
                                        <h4>Phone Number</h4>
                                        <p><a href="tel:+19294897158">929-489-7158</a></p>
                                        <br/>
                                        <br/>
                                       

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-10">
                                <div className="info-box">
                                    <div className="icon">
                                        <i className="flaticon-message" />
                                    </div>
                                    <div className="desc">
                                        <h4>Email Address</h4>
                                        <p>info@urbanfoxrentals.com</p>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                   
                    
                </div>

                <div className="photo-container">
  <img  src={intantPhoto3} alt="Made to Enjoy" className="instant-photo-img"/>
</div>
            </section>
        );
    }
}

export default Content;