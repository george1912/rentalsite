import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const About = React.lazy(() => import("./components/pages/About"));
const Aboutme = React.lazy(() => import("./components/pages/Aboutme"));
const Apartmentgrid = React.lazy(() => import("./components/pages/Apartmentgrid"));
const Apartmentlist = React.lazy(() => import("./components/pages/Apartmentlist"));
const Apartmentdetails = React.lazy(() => import("./components/pages/Apartmentdetails"));
const Broker = React.lazy(() => import("./components/pages/Broker"));
const Classification = React.lazy(() => import("./components/pages/Classification"));
const News = React.lazy(() => import("./components/pages/News"));
const Newsdetail = React.lazy(() => import("./components/pages/Newsdetail"));
const Places = React.lazy(() => import("./components/pages/Places"));
const Placesdetail = React.lazy(() => import("./components/pages/Placesdetail"));
const Trending = React.lazy(() => import("./components/pages/Trending"));
const Gallery = React.lazy(() => import("./components/pages/Gallery"));
const Contact = React.lazy(() => import("./components/pages/Contact"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
      <Preloader/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hometwo" component={Hometwo} />
          <Route path="/homethree" component={Homethree} />
          <Route path="/about" component={About} />
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/apartment-grid" component={Apartmentgrid} />
          <Route path="/apartment-list" component={Apartmentlist} />
          <Route path="/apartment-details" component={Apartmentdetails} />
          <Route path="/broker" component={Broker} />
          <Route path="/classification" component={Classification} />
          <Route path="/news" component={News} />
          <Route path="/news-details" component={Newsdetail} />
          <Route path="/places" component={Places} />
          <Route path="/places-details" component={Placesdetail} />
          <Route path="/trending" component={Trending} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
