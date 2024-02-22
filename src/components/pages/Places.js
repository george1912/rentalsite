import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/places/Content';

class Places extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                <title>Urban Fox Rentals | Home</title>
                    <meta
                        name="description"
                        content="Take a modern apartments in Brooklyn with Urban Fox Rentals. Visit our curated listings of stylish apartments and find your perfect home in Brooklyn today."
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Places'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Places;