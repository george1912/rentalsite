import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';
import Content from '../sections/apartmentlist/Content';

class Apartmentlist extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Nycondos | Apartment List</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Apartment List'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Apartmentlist;