import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import breadcrumbbg from '../../assets/img/bg/black-sub-banner-04.png';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="breadcrumb-area" style={{ backgroundImage: "url(" + breadcrumbbg + ")" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <span>Intentional Living</span>
                        <h1 className="page-title">{this.props.breadcrumb.pagename}</h1>
                        <nav aria-label="Breadcrumb">
                            <ol className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li className="active" aria-current="page">{this.props.breadcrumb.pagename}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;
