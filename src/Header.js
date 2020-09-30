import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
        <div>
            <header className="block">
              <div className="container headercontainer">
              <div className="logoblock">
                <Link to="/">
                  <div>Forward</div>
                  <div>Design</div>
                </Link>
              </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/services">services</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
              </nav>
              <div className="rightitems">
                <a href="mailto:info@forwwarddesign.com">info@forwwarddesign.com</a>
                <a href="/contact" className="speakbutton">Speak With Us</a>
              </div>
              </div>
            </header>
      </div>
    );
  }
}
export default Header;