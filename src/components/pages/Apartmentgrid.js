import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/apartmentgrid/Content';

class Apartmentgrid extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                <title>Urban Fox Rentals | Home</title>
                    <meta
                        name="description"
                        content="Discover modern apartments in Brooklyn with Urban Fox Rentals. See our curated listings of stylish apartments and find your perfect home in Brooklyn today."
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Apartment Grid'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Apartmentgrid;