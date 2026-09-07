import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Habout from '../../layouts/Habout';
import Facilities from './Facilities';
import Features from './Features';
import Video from './Video';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
                {/* <Bookingform/> */}
                <Habout/>
                <Facilities/>
                {/* <Condos/> */}
                <Features/>
                {/* <Counter/> */}
                <Video/>
                {/* <Broker/> */}
                {/* <Blogpost/> */}
            </Fragment>
        );
    }
}

export default Content;
