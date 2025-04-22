import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


import intantPhoto1 from '../../../assets/img/team/made-to-focus-photoart-compressed.jpg'; 
import intantPhoto2 from '../../../assets/img/team/made-to-rest-photoart-compressed.jpg';  
import intantPhoto3 from '../../../assets/img/team/made-to-enjoy-photoart-compressed.jpg';  
import transparentlogo from '../../../assets/img/team/about-me-colorized-photo.png';  


class Aboutme extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container about-container ">
                    
                    <div className="section-title about-title text-center">
                        <span className="title-tag">Why We Do.
                            <br/>   
                            What We Do.</span>
                        <h2>Made with Purpose</h2>
                        <br />
                        
                        <p><strong>Urban Fox Rentals</strong>, started with a simple idea: make moving easier for people who already have enough on their plates. I saw firsthand how much time, energy, and money goes into finding a good place to live—especially for working professionals, students, and healthcare workers. I wanted to create something&nbsp;better.</p>
                        
                        

                        <p>Over the years, I moved often—sometimes for school, sometimes for work—and each time I found myself searching for a space that made it easier to focus and settle in. Those experiences helped shape what Urban Fox would become: housing that's dependable, thoughtfully equipped, and easy to live in from day one.</p>
                        


                        <p><strong>Urban Fox Rentals</strong> offers furnished, ready-to-live-in apartments that are fairly priced, thoughtfully set up, and designed to feel like home from the start. It's housing that respects your time, your budget, and your need for comfort, privacy, and flexibility.</p>
                        
                        
                       <p>This work matters to me because I know how much stability, clarity, and peace the right space can offer—especially when you're chasing something bigger. I created Urban Fox to give people that foundation, so they can focus on what really&nbsp;matters.</p>
                       <br/>
                       <div className="photo-container-aboutme">
  <img  src={transparentlogo} alt="Urban Fox Logo" className="instant-photo-aboutme-logo"/>
</div>


                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Aboutme;