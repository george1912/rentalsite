import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/newsdetail/Content';

class Newsdetail extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Nycondos | News Details</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'News Details'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Newsdetail;