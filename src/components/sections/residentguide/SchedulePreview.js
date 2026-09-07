import React from 'react';
import { Link } from 'react-router-dom';
import { WEEKLY_SCHEDULE } from '../../../data/sanitationSchedule';

const SchedulePreview = () => {
    return (
        <section className="resident-guide-schedule" aria-labelledby="weekly-schedule-heading">
            <div className="resident-guide-schedule-heading">
                <span id="weekly-schedule-heading">Set-out nights</span>
            </div>

            <div className="resident-guide-schedule-days">
                {WEEKLY_SCHEDULE.map((item) => (
                    <article key={item.setOutDay}>
                        <strong>{item.setOutDay}</strong>
                        <span>{item.services.join(' + ')} · {item.time}</span>
                    </article>
                ))}
            </div>

            <Link className="resident-guide-calendar-link" to="/sanitation-calendar">
                <span>Full 2026 calendar</span>
                <i className="fal fa-arrow-right" aria-hidden="true" />
            </Link>
        </section>
    );
};

export default SchedulePreview;
