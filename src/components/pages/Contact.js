import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/contact/Content';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                <title>Contact Us | Urban Fox Rentals</title>
                    <meta
                        name="description"
                        content="Discover modern apartments in Brooklyn with Urban Fox Rentals. See our curated listings of stylish apartments and find your perfect home in Brooklyn today."
                    />
                </MetaTags>
                <Header/>
                <main id="main-content" tabIndex="-1">
                    <Breadcrumb breadcrumb={{pagename:'Contact Us'}} />
                    <Content/>
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default Contact;
