import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    SANITATION_YEAR,
    WEEKLY_SCHEDULE,
    formatFullDate,
    getDayDetails,
    getScheduleBanner,
    isoFromDate,
} from '../../../data/sanitationSchedule';

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const isoForDay = (month, day) => `${SANITATION_YEAR}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

class SanitationCalendarContent extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const initialMonth = today.getFullYear() === SANITATION_YEAR ? today.getMonth() : 0;
        const initialDay = today.getFullYear() === SANITATION_YEAR ? today.getDate() : 1;
        this.state = {
            month: initialMonth,
            selectedDate: isoForDay(initialMonth, initialDay),
        };
    }

    changeMonth = (direction) => {
        this.setState(({ month }) => {
            const nextMonth = Math.min(11, Math.max(0, month + direction));
            return { month: nextMonth, selectedDate: isoForDay(nextMonth, 1) };
        });
    };

    selectDay = (day) => {
        this.setState(({ month }) => ({ selectedDate: isoForDay(month, day) }));
    };

    renderCalendarDays() {
        const { month, selectedDate } = this.state;
        const firstWeekday = new Date(SANITATION_YEAR, month, 1).getDay();
        const daysInMonth = new Date(SANITATION_YEAR, month + 1, 0).getDate();
        const todayISO = isoFromDate(new Date());
        const cells = [];

        for (let index = 0; index < firstWeekday; index += 1) {
            cells.push(<span className="sanitation-calendar-empty" aria-hidden="true" key={`empty-${index}`} />);
        }

        for (let day = 1; day <= daysInMonth; day += 1) {
            const iso = isoForDay(month, day);
            const details = getDayDetails(iso);
            const types = [...new Set(details.map((detail) => detail.type))];
            const hasAction = types.some((type) => ['setout', 'holiday', 'delayed', 'notice'].includes(type));
            const hasHoliday = types.includes('holiday');
            const description = details.length
                ? details.map((detail) => `${detail.title}: ${detail.text}`).join(' ')
                : 'No scheduled action.';
            cells.push(
                <button
                    className={`sanitation-calendar-day${hasAction ? ' has-action' : ''}${hasHoliday ? ' has-holiday' : ''}${selectedDate === iso ? ' is-selected' : ''}${todayISO === iso ? ' is-today' : ''}`}
                    type="button"
                    key={iso}
                    onClick={() => this.selectDay(day)}
                    aria-pressed={selectedDate === iso}
                    aria-label={`${formatFullDate(iso)}. ${description}`}
                >
                    <span>{day}</span>
                    <span className="sanitation-calendar-markers" aria-hidden="true">
                        {types.slice(0, 3).map((type) => <i className={`is-${type}`} key={type} />)}
                    </span>
                </button>
            );
        }

        return cells;
    }

    render() {
        const { month, selectedDate } = this.state;
        const selectedDetails = getDayDetails(selectedDate);
        const banner = getScheduleBanner();

        return (
            <section className="sanitation-calendar-shell">
                <div className="container">
                    <div className="sanitation-calendar-back">
                        <Link to="/waste-and-recycling"><i className="fal fa-arrow-left" aria-hidden="true" /> Back to the sorting guide</Link>
                    </div>

                    <header className="sanitation-calendar-hero">
                        <span>228 9th Street · Brooklyn</span>
                        <h1>2026 Sanitation Calendar</h1>
                        <p>Trash and recycling set-out dates for the building.</p>
                    </header>

                    {banner && (
                        <section className={`sanitation-calendar-banner is-${banner.tone}`} aria-labelledby="calendar-alert-heading">
                            <span>{banner.eyebrow}</span>
                            <h2 id="calendar-alert-heading">{banner.title}</h2>
                            <p>{banner.text}</p>
                        </section>
                    )}

                    <section className="sanitation-calendar-rhythm" aria-labelledby="calendar-schedule-heading">
                        <div>
                            <span>Regular schedule</span>
                            <h2 id="calendar-schedule-heading">Set-out nights</h2>
                        </div>
                        <div className="sanitation-calendar-rhythm-days">
                            {WEEKLY_SCHEDULE.map((item) => (
                                <article key={item.setOutDay}>
                                    <strong>{item.setOutDay}</strong>
                                    <span>{item.time}</span>
                                    <p>{item.services.join(' + ')}</p>
                                    <small>Collected {item.pickupDay}</small>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="sanitation-calendar-tool" aria-labelledby="calendar-month-heading">
                        <div className="sanitation-calendar-tool-header">
                            <div>
                                <span>Set-out calendar</span>
                                <h2 id="calendar-month-heading" aria-live="polite">{MONTHS[month]}</h2>
                            </div>
                            <div className="sanitation-calendar-controls">
                                <button type="button" onClick={() => this.changeMonth(-1)} disabled={month === 0} aria-label="Previous month">
                                    <i className="fal fa-arrow-left" aria-hidden="true" />
                                </button>
                                <button type="button" onClick={() => this.changeMonth(1)} disabled={month === 11} aria-label="Next month">
                                    <i className="fal fa-arrow-right" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <div className="sanitation-calendar-layout">
                            <div className="sanitation-calendar-grid" role="group" aria-label={`${MONTHS[month]} ${SANITATION_YEAR}`}>
                                {WEEKDAYS.map((day) => <span className="sanitation-calendar-weekday" key={day}>{day}</span>)}
                                {this.renderCalendarDays()}
                            </div>

                            <aside className="sanitation-calendar-detail" aria-live="polite">
                                <span>Selected date</span>
                                <h3>{formatFullDate(selectedDate)}</h3>
                                {selectedDetails.length ? (
                                    <div className="sanitation-calendar-detail-events">
                                        {selectedDetails.map((detail, index) => (
                                            <article className={`is-${detail.type}`} key={`${detail.type}-${index}`}>
                                                <i aria-hidden="true" />
                                                <div>
                                                    <strong>{detail.title}</strong>
                                                    <p>{detail.text}</p>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                ) : <p className="sanitation-calendar-quiet">No set-out scheduled.</p>}
                            </aside>
                        </div>

                        <div className="sanitation-calendar-legend" aria-label="Calendar legend">
                            <span><i className="is-setout" />Set out</span>
                            <span><i className="is-holiday" />Holiday change</span>
                            <span><i className="is-delayed" />Collection resumes</span>
                        </div>
                    </section>

                    <footer className="sanitation-calendar-note">
                        <p>Holiday service can change. This calendar follows the building’s regular schedule and confirmed DSNY notices; always check close to a holiday.</p>
                        <a href="https://www.nyc.gov/site/dsny/collection/residents/holiday-schedule.page" target="_blank" rel="noopener noreferrer">
                            Check the official DSNY holiday schedule <i className="fal fa-external-link" aria-hidden="true" />
                        </a>
                    </footer>
                </div>
            </section>
        );
    }
}

export default SanitationCalendarContent;
