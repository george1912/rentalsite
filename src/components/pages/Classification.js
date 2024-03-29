import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/classification/Content';

class Classification extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Nycondos | Classification</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Classification' }} />
                <Content/>
                <Footer />
            </Fragment>
        );
    }
}

export default Classification;