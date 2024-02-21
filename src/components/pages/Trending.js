import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/trending/Content';

class Trending extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Nycondos | Trending</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Trending'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Trending;