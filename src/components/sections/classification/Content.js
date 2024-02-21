import React, { Component, Fragment } from 'react';
import Listings from './Listings';
import Trending from './Trending';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Listings/>
                <Trending/>
            </Fragment>
        );
    }
}

export default Content;