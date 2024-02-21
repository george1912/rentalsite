import React, { Component, Fragment } from 'react';
import Blogpost from '../../layouts/Blogpost';
import Banner from './Banner';
import Bookingform from './Bookingform';
import Habout from '../../layouts/Habout';
import Facilities from './Facilities';
import Condos from './Condos';
import Features from './Features';
import Counter from './Counter';
import Video from './Video';
import Broker from './Broker';

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