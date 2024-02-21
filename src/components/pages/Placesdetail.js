import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/placesdetail/Content';

class Placesdetail extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Nycondos | Places Details</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Places Details'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Placesdetail;