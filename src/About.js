import React, { Component } from "react";

class About extends Component {
  componentDidMount() {
    document.title = "About Us | Forwward Design";
  }
  render() {
    return (
      <div>
        <section className="image-background">
          <div className="background">
            <img
              alt="Bournemouth Big Wheel"
              sizes={{}}
              src={require("./media/about.png")}
              // src="https://www.many.co.uk/wp-content/uploads/2019/08/about.png"
              title=""
            ></img>
          </div>
          <div className="container px-0">
            <div className="row no-gutters justify-content-start align-items-end align-content-end content">
              <div className="col-12 col-sm-10 offset-sm-1">
                <div className="container">
                  <div className="row">
                    <div className="col-10 offset-1 offset-md-0">
                      <h3 style={{ color: "#FFFFFF" }}>&nbsp;</h3>
                      <h1 style={{ color: "#FFFFFF" }}>
                        Los Angeles Born and Raised
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wysiwyg slant">
          <div className="container-fluid px-0">
            <div className="row no-gutters">
              <div className="col-12 column-content">
                <div className="container">
                  <div className="row">
                    <div className="col-10 offset-1 col-sm-9 col-md-7 col-lg-8">
                      <h2>
                        We build best in class online experiences for leading
                        brands through expert knowledge and insights.
                      </h2>
                      <p>
                        <span style={{ fontSize: "1rem" }}>
                          Consumers expect more from brands. More empathy.
                          Better communication. Greater service and aftercare.
                          It’s these demands and how brands meet them that turn
                          good brands into great ones. ForwwardDesign exists to
                          help brands provide the best end-to-end experience
                          available online. From carefully crafted activation,
                          through a beautiful discovery experience to an
                          exceptional aftercare and follow up, we connect the
                          dots for brands and help them turn customers into
                          fanatics.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontSize: "1rem" }}>
                          Using a best-in-class technology and creative stack
                          and by ensuring that brands are positioned correctly,
                          ForwwardDesign creates exceptional experiences that
                          stand the test of time. We’re purpose-built to remain
                          boutique and specialist, servicing clients across the
                          consumer electronics, FMCG, fashion, home and garden
                          and eCommerce sectors.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wysiwyg">
          <div className="container-fluid px-0">
            <div className="row no-gutters">
              <div className="col-12 column-content">
                <div className="container">
                  <div className="row">
                    <div className="col-10 offset-1 col-sm-9 col-md-7 col-lg-8">
                      <h2>Our Culture</h2>
                      <p>
                        We're firm believers that life is too short to do
                        mediocre things. It's also too short to not enjoy
                        bringing creativity, passion and fun to everything that
                        we do. Our job is to see the world from the perspective
                        of your prospective customers, to understand what makes
                        them tick and excites them about working with you. It's
                        easy to forget that people are people, regardless of
                        industry and that if you can create an emotional
                        connection, you will win. It's our job to create that
                        connection for and with you, so that prospective
                        customers choose you, current customers choose you again
                        and potential hires are excited to be a part of what
                        your team is building.
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
                <h3>Want to speak to our team?</h3>
                <p>
                  We’re standing by to provide help, support advice and
                  feedback.
                </p>
              </div>
              <div className="col-10 offset-1 button">
                <p>
                  <a href="/contact">Get in touch</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
