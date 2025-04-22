import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import breadcrumbbg from '../../assets/img/bg/black-sub-banner-04.png';

class Breadcrumb extends Component {
    render() {
        return (
            <section className="breadcrumb-area" style={{ backgroundImage: "url(" + breadcrumbbg + ")" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <span>Intentional Living</span>
                        <h2 className="page-title">{this.props.breadcrumb.pagename}</h2>
                        <ul className="breadcrumb-nav">
                        <li><Link to="/">Home</Link></li>
                            <li className="active">{this.props.breadcrumb.pagename}</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Breadcrumb;