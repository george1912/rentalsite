import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import Header from '../layouts/Headerinner';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footerinner';

const Notfound = () => (
    <React.Fragment>
        <MetaTags>
            <title>Page Not Found | Urban Fox Rentals</title>
            <meta name="description" content="The page you requested could not be found." />
            <meta name="robots" content="noindex" />
        </MetaTags>
        <Header />
        <main id="main-content" tabIndex="-1">
            <Breadcrumb breadcrumb={{ pagename: 'Page Not Found' }} />
            <section className="not-found-section pt-115 pb-115 text-center" aria-labelledby="not-found-heading">
                <div className="container">
                    <h2 id="not-found-heading">We couldn't find that page.</h2>
                    <p>The address may have changed, or the page may no longer be available.</p>
                    <Link className="main-btn btn-filled mt-30" to="/">Return home</Link>
                </div>
            </section>
        </main>
        <Footer />
    </React.Fragment>
);

export default Notfound;
