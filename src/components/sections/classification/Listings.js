import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

import img1 from '../../../assets/img/restu/01.jpg';
import img2 from '../../../assets/img/restu/02.jpg';
import img3 from '../../../assets/img/restu/03.jpg';
import img4 from '../../../assets/img/restu/04.jpg';

const duplexpost = [
    { img: img1, category: 'italian food', title: '4X Pan Pijja', price: '90' },
    { img: img2, category: 'italian food', title: '4X Pan Pijja', price: '90' },
    { img: img3, category: 'italian food', title: '4X Pan Pijja', price: '90' },
    { img: img4, category: 'italian food', title: '4X Pan Pijja', price: '90' },
];
const convertiblepost = [
    { img: img1, category: 'chicken', title: '4X Pan Pijja', price: '90' },
    { img: img2, category: 'chicken', title: '4X Pan Pijja', price: '90' },
    { img: img3, category: 'chicken', title: '4X Pan Pijja', price: '90' },
    { img: img4, category: 'chicken', title: '4X Pan Pijja', price: '90' },
];
const gardenpost = [
    { img: img1, category: 'coffee', title: '4X Pan Pijja', price: '90' },
    { img: img2, category: 'coffee', title: '4X Pan Pijja', price: '90' },
    { img: img3, category: 'coffee', title: '4X Pan Pijja', price: '90' },
    { img: img4, category: 'coffee', title: '4X Pan Pijja', price: '90' },
];
const loftpost = [
    { img: img1, category: 'bake cake', title: '4X Pan Pijja', price: '90' },
    { img: img2, category: 'bake cake', title: '4X Pan Pijja', price: '90' },
    { img: img3, category: 'bake cake', title: '4X Pan Pijja', price: '90' },
    { img: img4, category: 'bake cake', title: '4X Pan Pijja', price: '90' },
];
const triplexpost = [
    { img: img1, category: 'cokkies', title: '4X Pan Pijja', price: '90' },
    { img: img2, category: 'cokkies', title: '4X Pan Pijja', price: '90' },
    { img: img3, category: 'cokkies', title: '4X Pan Pijja', price: '90' },
    { img: img4, category: 'cokkies', title: '4X Pan Pijja', price: '90' },
];
const micropost = [
    { img: img1, category: 'coctail', title: '4X Pan Pijja', price: '90' },
    { img: img2, category: 'coctail', title: '4X Pan Pijja', price: '90' },
    { img: img3, category: 'coctail', title: '4X Pan Pijja', price: '90' },
    { img: img4, category: 'coctail', title: '4X Pan Pijja', price: '90' },
];
class Listings extends Component {
    render() {
        return (
            <section className="restaurant-tab-area pt-120 pb-90">
                <div className="container">
                    <Tab.Container defaultActiveKey="convertible">
                        <Nav variant="pills" className="restaurant-rood-list row justify-content-center nav nav-pills mb-30">
                            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <Nav.Link eventKey="duplex">
                                    <i className="flaticon-duplex" />
                                    <span className="title">Duplex</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <Nav.Link eventKey="convertible">
                                    <i className="flaticon-medieval-house" />
                                    <span className="title">Convertible</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <Nav.Link eventKey="gardenview">
                                    <i className="flaticon-condominium" />
                                    <span className="title">Garden View</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <Nav.Link eventKey="loft">
                                    <i className="flaticon-residential" />
                                    <span className="title">Loft</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <Nav.Link eventKey="triplex">
                                    <i className="flaticon-building" />
                                    <span className="title">Triplex</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <Nav.Link eventKey="micro">
                                    <i className="flaticon-apartment" />
                                    <span className="title">Micro</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="duplex">
                                <div className="row">
                                    {duplexpost.map((item, i) => (
                                        <div key={i} className="col-lg-3 col-6">
                                            <div className="food-box">
                                                <div className="thumb">
                                                    <img src={item.img} alt="" />
                                                    <span className="price">${item.price}</span>
                                                </div>
                                                <div className="desc">
                                                    <Link to="#" className="cat">{item.category}</Link>
                                                    <h4>{item.title}</h4>
                                                    <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="convertible">
                                <div className="row">
                                    {convertiblepost.map((item, i) => (
                                        <div key={i} className="col-lg-3 col-6">
                                            <div className="food-box">
                                                <div className="thumb">
                                                    <img src={item.img} alt="" />
                                                    <span className="price">${item.price}</span>
                                                </div>
                                                <div className="desc">
                                                    <Link to="#" className="cat">{item.category}</Link>
                                                    <h4>{item.title}</h4>
                                                    <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="gardenview">
                                <div className="row">
                                    {gardenpost.map((item, i) => (
                                        <div key={i} className="col-lg-3 col-6">
                                            <div className="food-box">
                                                <div className="thumb">
                                                    <img src={item.img} alt="" />
                                                    <span className="price">${item.price}</span>
                                                </div>
                                                <div className="desc">
                                                    <Link to="#" className="cat">{item.category}</Link>
                                                    <h4>{item.title}</h4>
                                                    <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="loft">
                                <div className="row">
                                    {loftpost.map((item, i) => (
                                        <div key={i} className="col-lg-3 col-6">
                                            <div className="food-box">
                                                <div className="thumb">
                                                    <img src={item.img} alt="" />
                                                    <span className="price">${item.price}</span>
                                                </div>
                                                <div className="desc">
                                                    <Link to="#" className="cat">{item.category}</Link>
                                                    <h4>{item.title}</h4>
                                                    <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="triplex">
                                <div className="row">
                                    {triplexpost.map((item, i) => (
                                        <div key={i} className="col-lg-3 col-6">
                                            <div className="food-box">
                                                <div className="thumb">
                                                    <img src={item.img} alt="" />
                                                    <span className="price">${item.price}</span>
                                                </div>
                                                <div className="desc">
                                                    <Link to="#" className="cat">{item.category}</Link>
                                                    <h4>{item.title}</h4>
                                                    <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="micro">
                                <div className="row">
                                    {micropost.map((item, i) => (
                                        <div key={i} className="col-lg-3 col-6">
                                            <div className="food-box">
                                                <div className="thumb">
                                                    <img src={item.img} alt="" />
                                                    <span className="price">${item.price}</span>
                                                </div>
                                                <div className="desc">
                                                    <Link to="#" className="cat">{item.category}</Link>
                                                    <h4>{item.title}</h4>
                                                    <Link to="#" className="link"><i className="fal fa-arrow-right" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>
        );
    }
}

export default Listings;