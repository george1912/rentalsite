import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wasteRecyclingIllustration from '../../../assets/img/resident-guide/waste-recycling-fox-v2.webp';
import SchedulePreview from './SchedulePreview';

class Content extends Component {
    render() {
        return (
            <section className="resident-guide pt-115 pb-120" aria-labelledby="resident-guide-heading">
                <div className="container">
                    <div className="resident-guide-intro">
                        <div className="resident-guide-intro-title">
                            <span className="resident-guide-kicker">A cleaner home, together</span>
                            <h2 id="resident-guide-heading">Building Waste &amp; Recycling Guide</h2>
                        </div>
                        <div className="resident-guide-intro-copy">
                            <p className="resident-guide-lead">A simple guide to keeping our building clean, pest-free, and easy for everyone.</p>
                            <p>Good sorting protects hallways and sidewalks, keeps pests away, and helps City sanitation crews actually collect what you put out. Use the three bins below for everyday waste. If something is too large for a bag or bin, contact your landlord before placing it outside.</p>
                        </div>
                    </div>

                    <SchedulePreview />

                    <div className="resident-guide-divider" aria-hidden="true">
                        <span className="green" />
                        <span className="blue" />
                        <span className="black" />
                    </div>

                    <div className="resident-guide-guide-heading">
                        <div className="resident-guide-section-heading">
                            <span>Everyday sorting</span>
                            <h2>The Three-Bin Sorting Guide</h2>
                        </div>
                        <figure className="resident-guide-illustration">
                            <img
                                src={wasteRecyclingIllustration}
                                alt="Wheeled green, blue, and black waste bins with a clear bag of cardboard, a black bag, and a fox peeking from behind"
                                width="1536"
                                height="1024"
                            />
                        </figure>
                    </div>

                    <div className="resident-guide-streams">
                        <article className="resident-guide-stream stream-green">
                            <header className="resident-guide-stream-header">
                                <span className="resident-guide-stream-label">Green bin</span>
                                <h3>Paper and Flattened Cardboard</h3>
                            </header>
                            <div className="resident-guide-stream-body">
                                <section aria-labelledby="green-belongs">
                                    <h4 id="green-belongs">What belongs here</h4>
                                    <ul className="resident-guide-inline-key" aria-label="Green bin examples">
                                        <li><i className="fal fa-box-open" aria-hidden="true" /><span>Flattened cardboard</span></li>
                                        <li><i className="fal fa-newspaper" aria-hidden="true" /><span>Paper and mail</span></li>
                                        <li><i className="fal fa-shopping-bag" aria-hidden="true" /><span>Clear or white bag</span></li>
                                    </ul>
                                    <ul>
                                        <li>Newspapers, magazines, catalogs, and mail</li>
                                        <li>Office paper, envelopes, and notebooks (remove metal or plastic binding)</li>
                                        <li>Paperback books</li>
                                        <li>Corrugated cardboard, shipping boxes, shoe boxes, gift boxes, and file folders</li>
                                        <li>Empty, dry paper cups and lightly soiled pizza boxes</li>
                                    </ul>
                                </section>
                                <section aria-labelledby="green-prepare">
                                    <h4 id="green-prepare">How to prepare it</h4>
                                    <ul>
                                        <li>Flatten cardboard so it takes less space and stacks cleanly in the bag.</li>
                                        <li>Place paper and flattened cardboard in a <strong>clear or white plastic bag</strong>. Black bags are not acceptable.</li>
                                        <li>Keep paper as dry as you can. Wet or food-soaked paper belongs in trash instead.</li>
                                    </ul>
                                </section>
                            </div>
                            <aside className="resident-guide-note">
                                <strong>Important</strong>
                                <p>Keep paper and cardboard separate from metal, glass, and plastic. Mixing streams can cause the whole bag to be left behind.</p>
                            </aside>
                        </article>

                        <article className="resident-guide-stream stream-blue">
                            <header className="resident-guide-stream-header">
                                <span className="resident-guide-stream-label">Blue bin</span>
                                <h3>Metal, Glass, Rigid Plastics, and Cartons</h3>
                            </header>
                            <div className="resident-guide-stream-body">
                                <section aria-labelledby="blue-belongs">
                                    <h4 id="blue-belongs">What belongs here</h4>
                                    <ul className="resident-guide-inline-key" aria-label="Blue bin examples">
                                        <li><i className="fal fa-wine-bottle" aria-hidden="true" /><span>Bottles and jars</span></li>
                                        <li><i className="fal fa-recycle" aria-hidden="true" /><span>Cans and rigid plastics</span></li>
                                        <li><i className="fal fa-box" aria-hidden="true" /><span>Cartons</span></li>
                                        <li><i className="fal fa-shopping-bag" aria-hidden="true" /><span>Clear or white bag</span></li>
                                    </ul>
                                    <ul>
                                        <li>Metal food cans, empty aerosol cans, aluminum foil, and metal lids</li>
                                        <li>Glass bottles and jars only</li>
                                        <li>Rigid plastic bottles, jugs, tubs, cups, lids, and takeout containers</li>
                                        <li>Milk cartons, juice cartons, and drink boxes</li>
                                    </ul>
                                </section>
                                <section aria-labelledby="blue-prepare">
                                    <h4 id="blue-prepare">How to prepare it</h4>
                                    <ul>
                                        <li>Empty containers and clean them to the best of your ability. A quick rinse or wipe is enough when you can manage it.</li>
                                        <li>Place items in a <strong>clear or white plastic bag</strong>. Black bags are not acceptable.</li>
                                    </ul>
                                </section>
                            </div>
                            <section className="resident-guide-exclusions" aria-labelledby="blue-exclusions">
                                <div>
                                    <span>Keep out of blue</span>
                                    <h4 id="blue-exclusions">Put these in trash</h4>
                                </div>
                                <ul>
                                    <li>Soft plastic film: shopping bags, produce bags, plastic wrap, bubble wrap, chip bags, and candy wrappers</li>
                                    <li>Squeeze pouches for juice, baby food, or yogurt</li>
                                    <li>Styrofoam and foam products: cups, trays, egg cartons, and packing peanuts</li>
                                    <li>Drinking glasses, mugs, and other glassware (bottles and jars only)</li>
                                    <li>Mirrors, windows, and picture-frame glass</li>
                                    <li>Light bulbs of any kind</li>
                                    <li>Containers that are heavily greasy or coated in food you cannot reasonably clean</li>
                                </ul>
                                <p className="resident-guide-question">When you are unsure, ask: Is it a rigid bottle, jar, can, tub, or carton I can empty and clean? If yes, it likely goes in blue. If it is soft, foamy, or breakable household glass, it goes in trash.</p>
                            </section>
                        </article>

                        <article className="resident-guide-stream stream-black">
                            <header className="resident-guide-stream-header">
                                <span className="resident-guide-stream-label">Black bin</span>
                                <h3>Everyday Refuse and Food Waste</h3>
                            </header>
                            <div className="resident-guide-stream-body">
                                <section aria-labelledby="black-belongs">
                                    <h4 id="black-belongs">What belongs here</h4>
                                    <ul className="resident-guide-inline-key" aria-label="Black bin examples">
                                        <li><i className="fal fa-utensils" aria-hidden="true" /><span>Food scraps</span></li>
                                        <li><i className="fal fa-trash-alt" aria-hidden="true" /><span>Everyday refuse</span></li>
                                        <li><i className="fal fa-shopping-bag" aria-hidden="true" /><span>Tie bags closed</span></li>
                                    </ul>
                                    <ul>
                                        <li>Everyday household trash that cannot be recycled</li>
                                        <li>Raw or cooked food scraps and leftovers</li>
                                        <li>Soiled napkins, tissues, paper towels, and heavily soiled paper plates</li>
                                        <li>Soft plastics, wrappers, Styrofoam, and other non-recyclables listed above</li>
                                        <li>Broken or non-recyclable items that do not fit green or blue</li>
                                    </ul>
                                </section>
                                <section aria-labelledby="black-prepare">
                                    <h4 id="black-prepare">How to prepare it</h4>
                                    <ul>
                                        <li>Tie bags closed so nothing spills.</li>
                                        <li>Do not overstuff. Bags that can close cleanly are easier to handle and less likely to tear.</li>
                                    </ul>
                                </section>
                            </div>
                        </article>
                    </div>

                    <section className="resident-guide-large-items" aria-labelledby="large-items-heading">
                        <div className="resident-guide-large-items-title">
                            <span>Before it goes outside</span>
                            <h2 id="large-items-heading">Large Items</h2>
                        </div>
                        <p>If you have furniture, an appliance, a mattress, or any item too large for a regular bag, <strong><Link to="/contact">contact your landlord for further instruction</Link></strong> before placing anything outside. Do not leave oversized items at the curb on your own. Management will help you handle it the right way and keep walkways clear.</p>
                    </section>

                    <section className="resident-guide-quick-reference" aria-labelledby="quick-reference-heading">
                        <div className="resident-guide-quick-reference-title">
                            <span>At a glance</span>
                            <h2 id="quick-reference-heading">Quick Reference</h2>
                        </div>
                        <ol>
                            <li><span>Paper and flattened cardboard go in a <strong>clear or white bag</strong> (green stream).</span></li>
                            <li><span>Cans, bottles, jars, rigid plastics, and cartons go in a <strong>clear or white bag</strong> (blue stream), cleaned to the best of your ability.</span></li>
                            <li><span>Food scraps and everything else go in trash (black stream), bags tied and not overstuffed.</span></li>
                            <li><span>Large items: ask your landlord first.</span></li>
                        </ol>
                        <p>Clear bags, closed bags, and a quick sort go a long way toward a cleaner building for everyone.</p>
                    </section>
                </div>
            </section>
        );
    }
}

export default Content;
