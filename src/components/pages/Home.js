import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Urban Fox Rentals | Home</title>
                    <meta
                        name="description"
                        content="Discover modern apartments in Brooklyn with Urban Fox Rentals. Explore our curated listings of stylish apartments and find your perfect home in Brooklyn today."
                    />
                </MetaTags>
                <Header/>
                <main id="main-content" tabIndex="-1">
                    <Content/>
                </main>
                <Footer/>
            </Fragment>
        );
    }
}

export default Home;
