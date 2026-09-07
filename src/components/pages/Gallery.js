import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/gallery/Content';

class Gallery extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                <title>Apartment Gallery | Urban Fox Rentals</title>
                    <meta
                        name="description"
                        content="Discover modern apartments in Brooklyn with Urban Fox Rentals. See our curated listings of stylish apartments and find your perfect home in Brooklyn today."
                    />
                </MetaTags>
                <Header/>
                <main id="main-content" tabIndex="-1">
                    <Breadcrumb breadcrumb={{pagename:'Apartment Gallery'}} />
                    <Content/>
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default Gallery;
