
import React from 'react';

//import global style
import GlobalStyle from './components/GlobalStyle';

//import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

//import nav
import Nav from './components/Nav';

//router
import { Switch, Route, useLocation } from 'react-router-dom';

//animation
import { AnimatePresence } from 'framer-motion';

import ScrollTop from './components/ScrollTop';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
