import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


import intantPhoto1 from '../../../assets/img/team/made-to-focus-photoart-compressed.jpg'; 
import intantPhoto2 from '../../../assets/img/team/made-to-rest-photoart-compressed.jpg';  
import intantPhoto3 from '../../../assets/img/team/made-to-enjoy-photoart-compressed.jpg';  
import transparentlogo from '../../../assets/img/team/transparent-logo.png';  


class About extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container about-container ">
                    
                    <div className="section-title about-title text-center">
                        <span className="title-tag">What We're About</span>
                        <h2>A Smarter Standard for Furnished&nbsp;Living</h2>
                        <br />
                        
                        <p>At <strong>Urban Fox Rentals</strong>, we believe housing should work for you—not the other way around. Our apartments are designed for people who want to focus on their work, their goals, and their lives—without being burdened by high costs, complicated leases, or missing&nbsp;essentials.</p>
                        
                        
                        <div className="photo-container">
  <img  src={intantPhoto1} alt="Made to Focus" className="instant-photo-img"/>
</div>

                        <p>Located in <strong>Park Slope, Brooklyn</strong>, each unit is fully furnished and move-in ready. High-speed internet, in-unit washer/dryer, a full entertainment setup with smart TV and soundbar, a complete kitchen, and workspace with ergonomic seating—it's all here. Even the cleaning supplies are&nbsp;stocked.</p>
                        <div className="photo-container">
  <img  src={intantPhoto2} alt="Made to Focus" className="instant-photo-img"/>
</div>


                        <p>Privacy and quality were top priorities when we built this experience. Each space feels like a true apartment—not a shared room or temporary setup. You'll have room to host, relax, or simply enjoy quiet on your own&nbsp;terms.</p>
                        <div className="photo-container">
  <img  src={intantPhoto3} alt="Made to Enjoy" className="instant-photo-img"/>
</div>
                        
                       <p>We created <strong>Urban Fox Rentals</strong> for professionals, students, and creatives who want a well-equipped, dependable living space that's both comfortable and equitable. No hidden fees. No luxury markup. Just thoughtful design, flexible options, and everything you need to feel at home from day&nbsp;one.</p>
                       <br/>
                       <div className="photo-container">
  <img  src={transparentlogo} alt="Urban Fox Logo" className="instant-photo-logo"/>
</div>


                    </div>
                    
                </div>
            </section>
        );
    }
}

export default About;