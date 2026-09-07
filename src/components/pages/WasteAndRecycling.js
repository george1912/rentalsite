import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/residentguide/Content';

class WasteAndRecycling extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Waste &amp; Recycling Guide | Urban Fox Rentals</title>
                    <meta
                        name="description"
                        content="A simple resident guide to waste, recycling, and large-item disposal at Urban Fox Rentals."
                    />
                </MetaTags>
                <Header />
                <main id="main-content" tabIndex="-1" className="resident-guide-page">
                    <Breadcrumb breadcrumb={{ pagename: 'Waste & Recycling', eyebrow: 'Resident Information' }} />
                    <Content />
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default WasteAndRecycling;
