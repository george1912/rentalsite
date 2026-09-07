import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/about/Content';

class About extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                <title>Our Vision | Urban Fox Rentals</title>
                    <meta
                        name="description"
                        content="Learn more about Urban Fox Rentals and our mission to provide quality furnished rentals."
                    />
                </MetaTags>
                <Header/>
                <main id="main-content" tabIndex="-1">
                    <Breadcrumb breadcrumb={{pagename:'Our Vision'}} />
                    <Content/>
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;
