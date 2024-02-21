import React, { Component, Fragment } from 'react';
import Instapost from '../../layouts/Instapost';
import Blogpost from '../../layouts/Blogpost';
import Banner from './Banner';
import Cta from './Cta';
import Facilities from './Facilities';
import Bookingform from './Bookingform';
import Video from './Video';
import Roomtype from './Roomtype';
import Features from './Features';
import Roomslider from './Roomslider';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                <Cta/>
                <Facilities/>
                <Bookingform/>
                <Video/>
                <Roomtype/>
                <Features/>
                <Roomslider/>
                <Blogpost/>
                <Instapost/>
            </Fragment>
        );
    }
}

export default Content;