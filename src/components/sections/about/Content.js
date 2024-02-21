import React, { Component, Fragment } from 'react';
import About from './About';
import Blogpost from './Blogpost';
import Counter from './Counter';
import Features from './Features';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <About/>
                {/* <Features/> */}
                {/* <Counter/> */}
                {/* <Blogpost/> */}
            </Fragment>
        );
    }
}

export default Content;