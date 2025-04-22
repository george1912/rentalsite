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
                <title>Urban Fox Rentals | Home</title>
                    <meta
                        name="description"
                        content="Learn more about Urban Fox Rentals and our mission to provide quality furnished rentals."
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Vision'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;