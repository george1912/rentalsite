import React, { Component, Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import Canvas from './Canvas';

import logo from '../../assets/img/header-logo-transparent-bg-compressed.png';

const navigationMenu = [
    { id: 1, linkText: 'Home', link: '/' },
    {
        id: 2,
        linkText: 'Apartment',
        submenu: [
            { id: 21, link: '/apartment-details', linkText: 'Details' },
            { id: 22, link: '/gallery', linkText: 'Gallery' },
        ],
    },
    {
        id: 3,
        linkText: 'About',
        submenu: [
            { id: 31, link: '/about', linkText: 'The Vision' },
            { id: 32, link: '/aboutme', linkText: 'The Why' },
        ],
    },
    {
        id: 4,
        linkText: 'Contact',
        submenu: [{ id: 41, link: '/contact', linkText: 'Contact Us' }],
    },
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            isTop: false,
            menuOpen: false,
            offcanvasOpen: false,
            openSubmenu: null,
        };
        this.menuButtonRef = React.createRef();
        this.navigationRef = React.createRef();
        this.offcanvasButtonRef = React.createRef();
        this.offcanvasCloseRef = React.createRef();
        this.offcanvasRef = React.createRef();
    }

    componentDidMount() {
        this.handleResize();
        this.handleScroll();
        window.addEventListener('resize', this.handleResize, false);
        window.addEventListener('scroll', this.handleScroll, false);
        document.addEventListener('keydown', this.handleKeyDown, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleResize = () => {
        const isMobile = window.innerWidth < 1024;
        this.setState(previousState => ({
            isMobile,
            menuOpen: previousState.isMobile && !isMobile ? false : previousState.menuOpen,
            openSubmenu: previousState.isMobile && !isMobile ? null : previousState.openSubmenu,
        }));
    };

    handleScroll = () => {
        this.setState({ isTop: window.scrollY > 110 });
    };

    handleKeyDown = event => {
        const { isMobile, menuOpen, offcanvasOpen } = this.state;

        if (event.key === 'Escape') {
            if (offcanvasOpen) this.closeOffcanvas();
            else if (menuOpen) this.closeMenu();
            return;
        }

        if (event.key === 'Tab' && offcanvasOpen && this.offcanvasRef.current) {
            const dialogControls = Array.from(
                this.offcanvasRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])')
            ).filter(control => control.tabIndex !== -1);
            const firstDialogControl = dialogControls[0];
            const lastDialogControl = dialogControls[dialogControls.length - 1];

            if (event.shiftKey && document.activeElement === firstDialogControl) {
                event.preventDefault();
                lastDialogControl.focus();
            } else if (!event.shiftKey && document.activeElement === lastDialogControl) {
                event.preventDefault();
                firstDialogControl.focus();
            }
            return;
        }

        if (event.key !== 'Tab' || !isMobile || !menuOpen || !this.navigationRef.current) return;

        const menuControls = Array.from(
            this.navigationRef.current.querySelectorAll('a:not([tabindex="-1"]), button:not([tabindex="-1"])')
        );
        const focusableControls = [...menuControls, this.menuButtonRef.current].filter(Boolean);
        const firstControl = focusableControls[0];
        const lastControl = focusableControls[focusableControls.length - 1];

        if (event.shiftKey && document.activeElement === firstControl) {
            event.preventDefault();
            lastControl.focus();
        } else if (!event.shiftKey && document.activeElement === lastControl) {
            event.preventDefault();
            firstControl.focus();
        }
    };

    toggleMenu = () => {
        this.setState(
            previousState => ({ menuOpen: !previousState.menuOpen, openSubmenu: null }),
            () => {
                if (this.state.menuOpen && this.navigationRef.current) {
                    const firstControl = this.navigationRef.current.querySelector('.primary-menu-control');
                    if (firstControl) firstControl.focus();
                } else if (this.menuButtonRef.current) {
                    this.menuButtonRef.current.focus();
                }
            }
        );
    };

    closeMenu = () => {
        this.setState({ menuOpen: false, openSubmenu: null }, () => {
            if (this.menuButtonRef.current) this.menuButtonRef.current.focus();
        });
    };

    toggleSubmenu = id => {
        this.setState(previousState => ({ openSubmenu: previousState.openSubmenu === id ? null : id }));
    };

    closeSubmenu = (event, id) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            this.setState(previousState => ({
                openSubmenu: previousState.openSubmenu === id ? null : previousState.openSubmenu,
            }));
        }
    };

    openOffcanvas = () => {
        this.setState({ offcanvasOpen: true }, () => {
            if (this.offcanvasCloseRef.current) this.offcanvasCloseRef.current.focus();
        });
    };

    closeOffcanvas = () => {
        this.setState({ offcanvasOpen: false }, () => {
            if (this.offcanvasButtonRef.current) this.offcanvasButtonRef.current.focus();
        });
    };

    render() {
        const { innerPage = false } = this.props;
        const { isMobile, isTop, menuOpen, offcanvasOpen, openSubmenu } = this.state;
        const closedMobileMenu = isMobile && !menuOpen;

        return (
            <Fragment>
                <a className="skip-link" href="#main-content">Skip to main content</a>
                <header className={`header-absolute sticky-header ${innerPage ? 'inner-page' : ''} ${isTop ? 'sticky-active' : ''}`} id="header">
                    <div className="container container-custom-one">
                        <div className={`nav-container d-flex align-items-center justify-content-between ${isMobile ? 'breakpoint-on' : ''}`}>
                            <nav
                                ref={this.navigationRef}
                                id="primary-navigation"
                                className={classNames('nav-menu d-lg-flex align-items-center', { 'menu-on': menuOpen })}
                                aria-label="Primary navigation"
                                aria-hidden={closedMobileMenu}
                            >
                                <div className="toggle">
                                    <button type="button" id="offCanvasBtn" ref={this.offcanvasButtonRef} onClick={this.openOffcanvas} aria-label="Open contact panel" aria-haspopup="dialog">
                                        <i className="fal fa-bars" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="menu-items">
                                    <ul>
                                        {navigationMenu.map(item => {
                                            const submenuOpen = openSubmenu === item.id;
                                            return (
                                                <li
                                                    key={item.id}
                                                    className={classNames('menu-item', { 'menu-item-has-children': item.submenu, 'submenu-open': submenuOpen })}
                                                    onBlur={event => item.submenu && this.closeSubmenu(event, item.id)}
                                                >
                                                    {item.submenu ? (
                                                        <button
                                                            type="button"
                                                            className="menu-link-button primary-menu-control"
                                                            onClick={() => this.toggleSubmenu(item.id)}
                                                            aria-expanded={submenuOpen}
                                                            aria-controls={`submenu-${item.id}`}
                                                            tabIndex={closedMobileMenu ? -1 : 0}
                                                        >
                                                            {item.linkText}
                                                        </button>
                                                    ) : (
                                                        <NavLink exact to={item.link} className="primary-menu-control" activeClassName="active" onClick={() => this.setState({ menuOpen: false })} tabIndex={closedMobileMenu ? -1 : 0}>
                                                            {item.linkText}
                                                        </NavLink>
                                                    )}
                                                    {item.submenu && (
                                                        <ul className={classNames('submenu', { 'd-block': submenuOpen })} id={`submenu-${item.id}`}>
                                                            {item.submenu.map(subItem => (
                                                                <li key={subItem.id} className="menu-item">
                                                                    <NavLink
                                                                        to={subItem.link}
                                                                        activeClassName="active"
                                                                        onClick={() => this.setState({ menuOpen: false, openSubmenu: null })}
                                                                        tabIndex={closedMobileMenu || (isMobile && !submenuOpen) ? -1 : 0}
                                                                    >
                                                                        {subItem.linkText}
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="nav-pushed-item" />
                            </nav>

                            <div className="site-logo">
                                <Link to="/" aria-label="Urban Fox Rentals home"><img src={logo} alt="Urban Fox Rentals" /></Link>
                            </div>

                            <div className={`nav-push-item ${isMobile ? 'd-none' : ''}`}>
                                <div className="header-info d-lg-flex align-items-center">
                                    <div className="item">
                                        <i className="fal fa-phone" aria-hidden="true" />
                                        <span>Phone Number</span>
                                        <a href="tel:+19294897158" style={{ fontFamily: "'Old Standard TT', serif" }}><h5>929-489-7158</h5></a>
                                    </div>
                                    <div className="item">
                                        <i className="fal fa-envelope" aria-hidden="true" />
                                        <span>Email Address</span>
                                        <a href="mailto:info@urbanfoxrentals.com"><h5>info@urbanfoxrentals.com</h5></a>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                ref={this.menuButtonRef}
                                className={classNames('navbar-toggler', { active: menuOpen })}
                                onClick={this.toggleMenu}
                                aria-expanded={menuOpen}
                                aria-controls="primary-navigation"
                                aria-label={menuOpen ? 'Close main menu' : 'Open main menu'}
                            >
                                <span /><span /><span />
                            </button>
                        </div>
                    </div>
                </header>

                <div className={classNames('offcanvas-wrapper', { 'show-offcanvas': offcanvasOpen })} aria-hidden={!offcanvasOpen}>
                    <div className={classNames('offcanvas-overly', { 'show-overly': offcanvasOpen })} onClick={this.closeOffcanvas} />
                    <div ref={this.offcanvasRef} className="offcanvas-widget" role="dialog" aria-modal="true" aria-label="Contact information">
                        <button type="button" className="offcanvas-close" ref={this.offcanvasCloseRef} onClick={this.closeOffcanvas} aria-label="Close contact panel" tabIndex={offcanvasOpen ? 0 : -1}>
                            <i className="fal fa-times" aria-hidden="true" />
                        </button>
                        <Canvas />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Header);
