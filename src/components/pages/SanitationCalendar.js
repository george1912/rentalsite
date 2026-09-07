import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../layouts/Headerinner';
import Footer from '../layouts/Footerinner';
import SanitationCalendarContent from '../sections/residentguide/SanitationCalendarContent';

const SanitationCalendar = () => (
    <Fragment>
        <MetaTags>
            <title>2026 Sanitation Calendar | Urban Fox Rentals</title>
            <meta
                name="description"
                content="The 2026 trash and recycling set-out calendar for residents of 228 9th Street in Brooklyn."
            />
        </MetaTags>
        <Header />
        <main id="main-content" tabIndex="-1" className="sanitation-calendar-page">
            <SanitationCalendarContent />
        </main>
        <Footer />
    </Fragment>
);

export default SanitationCalendar;
