import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Habout from '../../layouts/Habout';
import Bookingform from './Bookingform';
import Handpick from './Handpick';
import Counter from './Counter';
import Video from './Video';
import Gallery from './Gallery';
import Features from './Features';
import Team from './Team';
import Newsletter from './Newsletter';
import Cta from './Cta';
import About from './About';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Bookingform/>
                <Habout/>
                <Handpick/>
                <Counter/>
                <Video/>
                <Features/>
                <Gallery/>
                <Team/>
                <Newsletter/>
                <Cta/>
                <About/>
                <Blogpost/>
            </Fragment>
        );
    }
}

export default Content;