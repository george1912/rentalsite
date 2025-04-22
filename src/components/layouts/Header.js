import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import Canvas from './Canvas';

import logo from '../../assets/img/header-logo-transparent-bg-compressed.png';

const navigationmenu = [
    {
        id: 1,
        linkText: 'Home',
        child: false,
        link: '/',
        submenu: [
            
        ]
    },
    {
        id: 2,
        linkText: 'Apartment',
        child: true,
        submenu: [
            
            {
                id: 21,
                link: '/apartment-details',
                linkText: 'Details'
            },

            {
                id: 22,
               link: '/gallery',
                linkText: 'Gallery'
            },

        ]
    },
    {
        id: 3,
        linkText: 'About',
        child: true,
        submenu: [
            {
                id: 31,
                link: '/about',
                linkText: 'The Vision'
            },
            {
                id: 32,
                link: '/aboutme',
                linkText: 'The Why'
            },
        ]
    },
    {
        id: 4,
        linkText: 'Contact',
        child: true,
        submenu: [
            {
                id: 41,
                link: '/contact',
                linkText: 'contact Us',
                
            }
         
            
         
         

         
         
        ]
    },
]
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classmethod: false,
            togglemethod: false,
        };
        this.addClass = this.addClass.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }
    addClass() {
        this.setState({
            classmethod: true
        });
    }

    removeClass() {
        this.setState({
            classmethod: false
        });
    }
    toggleClass() {
        this.setState({
            togglemethod: !this.state.togglemethod
        });
    }
    componentDidMount() {

        
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 1024
            });
        }, false);
        window.addEventListener('load', () => {
            this.setState({
                isMobile: window.innerWidth < 1024
            });
        }, false);

        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 110
            });
        }, false);

        this.handleResize(); // Call this method on mount to set initial state

        window.addEventListener('resize', this.handleResize, false);
        window.addEventListener('scroll', this.handleScroll, false);
    

    }


    handleResize = () => {
        this.setState({
            isMobile: window.innerWidth < 1024
        });
    }

    handleScroll = () => {
        this.setState({
            isTop: window.scrollY > 110
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    }



    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.submenu') !== undefined) ? this.getNextSibling(e.target, '.submenu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block';
        }
    }
    render() {
        const className = this.state.isMobile ? 'breakpoint-on' : '';
        const classNamess = this.state.isMobile ? 'd-none' : '';
        const stickyheader = this.state.isTop ? 'sticky-active' : '';
        return (
            <Fragment>
                <header className={`header-absolute sticky-header ${stickyheader}`} id="header">
                    <div className="container container-custom-one">
                        <div className={`nav-container d-flex align-items-center justify-content-between ${className}`}>
                            {/* Main Menu */}
                            <div className={classNames("nav-menu d-lg-flex align-items-center", { "menu-on": this.state.togglemethod })}>
                                {/* Navbar Close Icon */}
                                <div className="navbar-close" onClick={this.toggleClass}>
                                    <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                </div>
                                {/* Off canvas Menu  */}
                                 <div className="toggle">
                                    <Link to="#" id="offCanvasBtn" onClick={this.addClass}><i className="fal fa-bars" /></Link>
                                </div> 
                                {/* Mneu Items */}
                                <div className="menu-items">
                                    <ul>
                                        {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                            <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                                {item.child ?
                                                    <ul className="submenu" role="menu">
                                                        {item.submenu.map((sub_item, i) => (
                                                            <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                {sub_item.submenu ?
                                                                    <ul className="submenu">
                                                                        {sub_item.submenu.map((third_item, i) => (
                                                                            <li key={i}><Link
                                                                                to={third_item.link}>{third_item.linkText}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul> : null}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : null
                                                }
                                            </li>
                                        )) : null}
                                    </ul>
                                </div>
                                {/* from pushed-item */}
                                <div className="nav-pushed-item" />
                            </div>
                            {/* Site Logo */}
                            <div className="site-logo">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                            {/* Header Info Pussed To Menu Wrap */}
                            <div className={`nav-push-item ${classNamess}`}>
                                {/* Header Info */}
                                <div className="header-info d-lg-flex align-items-center">
                                    <div className="item">
                                        <i className="fal fa-phone" />
                                        <span>Phone Number</span>
                                        <a href="tel:+19294897158"  style={{ fontFamily: "'Old Standard TT', serif" }} ><h5>929-489-7158</h5></a>
                                            {/* <h5 className="title">(929)-489-7158</h5> */}
                                        {/* </Link> */}
                                    </div>
                                    <div className="item">
                                        <i className="fal fa-envelope" />
                                        <span>Email Address</span>
                                        <a href="mailto:info@urbanfoxrentals.com"><h5>info@urbanfoxrentals.com</h5></a>
                                    </div>
                                </div>
                            </div>
                            {/* Navbar Toggler */}
                            { <div className={classNames("navbar-toggler", { "active": this.state.togglemethod })} onClick={this.toggleClass}>
                                <span /><span /><span />
                            </div> }
                        </div>
                    </div>
                </header>
                { <div className={classNames("offcanvas-wrapper", { "show-offcanvas": this.state.classmethod })}>
                    <div className={classNames("offcanvas-overly", { "show-overly": this.state.classmethod })} onClick={this.removeClass} />
                    <div className="offcanvas-widget">
                        <Link to="#" className="offcanvas-close" onClick={this.removeClass} ><i className="fal fa-times" /></Link>
                        <Canvas />
                    </div >
                </div > }
            </Fragment>
        );
    }
}

export default Header;