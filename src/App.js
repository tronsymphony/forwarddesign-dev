import React, { useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';

import ReactGA from 'react-ga';

import './App.scss';

import Header from './Header';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import NoMatch from './NoMatch';



function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div>
      
    

        <div>
          <Header></Header>
        </div>

      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/services/ecommerce">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        
        </Switch>

 


  <footer>
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1 col-sm-6 offset-sm-0 col-md-4">
          <a href="/">Forwward <br></br>Design</a>
          <div className="social">
           
          </div>
          <p><strong>New Business Inquiries</strong><br></br>
          Nitya<br></br>
          <a href="mailto:info@forwwarddesign.com">info@forwwarddesign.com</a>
          </p>
        </div>
        <div className="col-10 offset-1 col-sm-6 offset-sm-0 col-md-5 d-none d-sm-block">
          <div className="menu-footer-menu-container">
            <ul className="menu" id="menu-footer-menu">
              <li>
                <a className=" menu-item menu-item-type-post_type menu-item-object-service" href="/services/ecommerce">Ecommerce</a>
              </li>
              <li>
                <a className=" menu-item menu-item-type-post_type menu-item-object-service" href="/services/search-engine-optimisation">Search Engine Optimisation</a>
              </li>
              <li>
                <a className=" menu-item menu-item-type-post_type menu-item-object-service" href="/services/social-media-marketing">Social Media Marketing</a>
              </li>
              <li>
                <a className=" menu-item menu-item-type-post_type menu-item-object-service" href="/services/web-design-build">Web Design &amp; Build</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-10 offset-1 col-sm-6 offset-sm-0 col-md-3">
          
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <p><small>© ForwwardDesign Limited, 2020 all rights reserved</small></p>
        </div>
        <div className="col-12 col-md-6">
          <p><small>ForwwardDesign® and the ForwwardDesign logo is a registered trademark of ForwwardDesign Limited. <a href="/terms">Terms Of Service</a> | <a href="/privacy">Privacy Policy</a></small></p>
        </div>
      </div>
    </div>
  </footer>

  </div>

  );
}



export default App;
