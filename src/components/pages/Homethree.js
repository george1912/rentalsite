import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerthree';
import Footer from '../layouts/Footerthree';
import Content from '../sections/homethree/Content';

class Homethree extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Nycondos | Homepage</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Homethree;