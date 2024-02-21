import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import icon1 from '../../../assets/img/icon/01.png';
import icon2 from '../../../assets/img/icon/02.png';
import icon3 from '../../../assets/img/icon/03.png';
import icon4 from '../../../assets/img/icon/04.png';
// Counter
const counterpost = [
    { icon: icon1, number: '84', prefix: 'k', title: 'Apartmentss in Album' },
    { icon: icon2, number: '10', prefix: 'M', title: 'Active Backers Around World' },
    { icon: icon3, number: '02', prefix: 'k', title: 'Categories Served' },
    { icon: icon4, number: '100', prefix: 'M', title: 'Ideas Raised Funds' },
];

export default function Counter() {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="counter-section bg-black pt-100 pb-100">
            <div className="container">
                <div className="row">
                    {counterpost.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-6">
                            <div className="counter-box">
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h4>
                                    <CountUp start={focus ? 0 : null} end={parseInt(item.number)} duration={5} redraw={true}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span className="counter" ref={countUpRef} />
                                                {item.prefix}
                                                <VisibilitySensor
                                                    onChange={isVisible => {
                                                        if (isVisible) {
                                                            setFocus(true);
                                                        }
                                                    }}
                                                >
                                                    <span className="plus-icon">+</span>
                                                </VisibilitySensor>
                                            </div>
                                        )}
                                    </CountUp>
                                </h4>
                                <span className="title">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}