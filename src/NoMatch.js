import React, { Component } from "react";
class NoMatch extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="image-background ">
            <div className="background">
              <img
                // src="https://www.many.co.uk/wp-content/uploads/2019/10/camille-couvez-H5PnIYI_1I0-unsplash-1880x2818.jpg"
                src={require("./media/about.png")}
                sizes="(max-width: 1880px) 100vw, 1880px"
                alt=""
                title
              />{" "}
            </div>
            <div className="container px-0">
              <div className="row no-gutters justify-content-start align-items-end align-content-end content">
                <div className="col-12 col-sm-10 offset-sm-1">
                  <div className="container">
                    <div className="row">
                      <div className="col-10 offset-1 offset-md-0">
                        <h3 style={{ color: "#FFFFFF" }}>Oops!</h3>
                        <h1 style={{ color: "#FFFFFF" }}>Not Found</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="wysiwyg  ">
            <div className="container-fluid px-0">
              <div className="row no-gutters">
                <div className="col-12 column-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-10 offset-1 col-sm-9 col-md-7 col-lg-8">
                        <h2>We're really sorry...</h2>
                        <p>
                          …but the page you’re looking for couldn’t be found.
                          Perhaps it’s been deleted or moved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cta purple size-regular">
            <div className="container">
              <div className="row">
                <div className="col-10 offset-1">
                  <h3>Easier to talk to a human?</h3>
                  <p>
                    If you’d prefer to speak to a member of our team, just give
                    us a call.
                  </p>
                </div>
                <div className="col-10 offset-1 button">
                  <p>
                    <a href="/contact">See contact details</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default NoMatch;
