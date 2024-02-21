import React, { Component, Fragment } from 'react';
import Features from './Features';
import Offers from './Offers';

class Content extends Component {
    render() {
        return (
            <Fragment>
                 <Offers/>
                 <Features/>
            </Fragment>
        );
    }
}

export default Content;