import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/aboutme/Contentme';

class Aboutme extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                <title>Urban Fox Rentals | Home</title>
                    <meta
                        name="description"
                        content="Discover the story behind Urban Fox Rentals."
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Why'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Aboutme;