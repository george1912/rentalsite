import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const About = React.lazy(() => import("./components/pages/About"));
const Aboutme = React.lazy(() => import("./components/pages/Aboutme"));
const Apartmentdetails = React.lazy(() => import("./components/pages/Apartmentdetails"));
const Gallery = React.lazy(() => import("./components/pages/Gallery"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Notfound = React.lazy(() => import("./components/pages/Notfound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="page-loading" role="status"><span className="sr-only">Loading page</span></div>}>
      <Preloader/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/aboutme" component={Aboutme} />
          <Route exact path="/apartment-details/:id?" component={Apartmentdetails} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
