import React, { Component } from "react";
import { Link } from "react-router-dom";
class Service extends Component {
  render() {
    return (
      <div>
        <section className="image-background">
          <div className="background">
            <img
              alt=""
              sizes="(max-width: 1880px) 100vw, 1880px"
              src={require("../media/orlova-maria-bU8TeXhsPcY-unsplash-1880x2820.jpg")}
              title=""
            ></img>
          </div>
          <div className="container px-0">
            <div className="row no-gutters justify-content-start align-items-end align-content-end content">
              <div className="col-12 col-sm-10 offset-sm-1">
                <div className="container">
                  <div className="row">
                    <div className="col-10 offset-1 offset-md-0">
                      <h3>&nbsp;</h3>
                      <h1 style={{ color: "#ffffff" }}>Services</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="archive">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-12 col-sm-6 archive-item services"
                data-ratio="0.75"
                style={{ minHeight: "328.242px" }}
              >
                <Link to="/services/ecommerce">
                  <img
                    alt=""
                    sizes="(max-width: 760px) 100vw, 760px"
                    src={require("../media/pawel-czerwinski-oNcFi_dYz_0-unsplash-760x427.jpg")}
                    // src="https://www.many.co.uk/wp-content/uploads/2019/10/"
                    title=""
                  ></img>
                  <h2>eCommerce</h2>
                </Link>
              </div>
              <div
                className="col-12 col-sm-6 archive-item services"
                data-ratio="0.75"
                style={{ minHeight: "328.242px" }}
              >
                <a
                  href="/services/web-design-build"
                  title="Web Design &amp; Build"
                >
                  <img
                    alt=""
                    sizes="(max-width: 760px) 100vw, 760px"
                    src={require("../media/artiom-vallat-mLcZFYO59oY-unsplash-760x427.jpg")}
                    // src="https://www.many.co.uk/wp-content/uploads/2019/10/artiom-vallat-mLcZFYO59oY-unsplash-760x427.jpg"
                    title=""
                  ></img>
                  <h2>Web Design &amp; Build</h2>
                </a>
              </div>
              <div
                className="col-12 col-sm-6 archive-item services"
                data-ratio="0.75"
                style={{ minHeight: "328.242px" }}
              >
                <a
                  href="/services/search-engine-optimisation"
                  title="Search Engine Optimisation"
                >
                  <img
                    alt=""
                    sizes="(max-width: 760px) 100vw, 760px"
                    src={require("../media/francesco-mazzoli-0xh3QPqcfKM-unsplash-760x427.jpg")}
                    // src="https://www.many.co.uk/wp-content/uploads/2019/10/francesco-mazzoli-0xh3QPqcfKM-unsplash-760x427.jpg"
                    title=""
                  ></img>
                  <h2>Search Engine Optimisation</h2>
                </a>
              </div>
              <div
                className="col-12 col-sm-6 archive-item services"
                data-ratio="0.75"
                style={{ minHeight: "328.242px" }}
              >
                <a
                  href="/services/social-media-marketing"
                  title="Social Media Marketing"
                >
                  <img
                    alt=""
                    sizes="(max-width: 760px) 100vw, 760px"
                    src={require("../media/nicole-honeywill-7wS6xXqqfws-unsplash-760x427.jpg")}
                    // src="https://www.many.co.uk/wp-content/uploads/2019/10/nicole-honeywill-7wS6xXqqfws-unsplash-760x427.jpg"
                    title=""
                  ></img>
                  <h2>Social Media Marketing</h2>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Service;
