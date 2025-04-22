import React, { Component, Fragment } from 'react';
import Aboutme from './Aboutme';
import Blogpost from './Blogpostme';
import Counter from './Counterme';
import Features from './Featuresme';

class Contentme extends Component {
    render() {
        return (
            <Fragment>
                <Aboutme/>
                {/* <Features/> */}
                {/* <Counter/> */}
                {/* <Blogpost/> */}
            </Fragment>
        );
    }
}

export default Contentme;