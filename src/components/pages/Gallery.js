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
                    <title>Nycondos | Gallery</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Gallery'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Gallery;