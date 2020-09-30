import React, { Component } from "react";
class Portfolio extends Component {
  componentDidMount() {
    document.title = "Portfolio | Forwward Design";
  }
  render() {
    return (
      <div>
        <section className="image-background">
          <div className="background">
            <img
              alt=""
              sizes="(max-width: 1880px) 100vw, 1880px"
              src={require("./media/camille-couvez-H5PnIYI_1I0-unsplash-1880x2818.jpg")}
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
                      <h1 style={{ color: "#FFFFFF" }}>Work</h1>
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
                      <h2>
                        Incredible digital marketing for incredible clients.
                      </h2>
                      <p>
                        We’ve built solutions for a wide range of retail
                        clients, from web design and development through to
                        connected, strategised full-service marketing campaigns.
                        Here’s a sample of some of our latest work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="archive">
          <div className="container">
            <div className="row">
			<div
                className="col-12 col-sm-12 archive-item letterbox"
                data-ratio="0.40"
                style={{ minHeight: 496 }}
              >
                <a href="/portfolio" title="Jimmy’s Iced Coffee">
                  <img
                    alt="Jimmy's Iced Coffee can on blue background"
                    sizes="(max-width: 1260px) 100vw, 1260px"
                    src="https://i-aesthetic.com/img/vivivace.jpg"
                    title=""
                  ></img>
                  <h2 style={{ color: "#FFFFFF" }}>i-aesthetic</h2>
                  <h3 style={{ color: "#FFFFFF" }}>
                    A brand new eCommerce website rebuild for the FMCG brand
                  </h3>
                </a>
              </div>
              <div
                className="col-12 col-sm-12 archive-item letterbox"
                data-ratio="0.40"
                style={{ minHeight: 496 }}
              >
                <a href="/portfolio" title="Jimmy’s Iced Coffee">
                  <img
                    alt="Jimmy's Iced Coffee can on blue background"
                    sizes="(max-width: 1260px) 100vw, 1260px"
                    src="https://hosatech.com/wp-content/uploads/2018/12/mixing-table-mixing-music-musician-159206-1024x681.jpeg"
                    title=""
                  ></img>
                  <h2 style={{ color: "#FFFFFF" }}>HosaTech</h2>
                  <h3 style={{ color: "#FFFFFF" }}>
                    A brand new eCommerce website rebuild for the FMCG brand
                  </h3>
                </a>
              </div>
              <div
                className="col-12 col-sm-12 archive-item letterbox"
                data-ratio="0.40"
                style={{ minHeight: 496 }}
              >
                <a href="/portfolio" title="Antibad">
                  <img
                    alt="Antibad showing on an iPad"
                    sizes="(max-width: 1260px) 100vw, 1260px"
                    src="https://www.illuminateplasticsurgery.com/wp-content/themes/ui-illuminate/img/PlasticsSliderImage.jpg"
                    title=""
                  ></img>
                  <h2 style={{ color: "#FFFFFF" }}>Illuminate Plastic Surgery</h2>
                  <h3 style={{ color: "#FFFFFF" }}>
                    An ethical and sustainable fashion marketplace based on
                    Magento
                  </h3>
                </a>
              </div>
              <div
                className="col-12 col-sm-12 archive-item letterbox"
                data-ratio="0.40"
                style={{ minHeight: 496 }}
              >
                <a href="/portfolio" title="Paving Direct">
                  <img
                    alt="Paving slab on grey background"
                    sizes="(max-width: 1260px) 100vw, 1260px"
                    src="https://almarose.com/wp-content/themes/ui-almarose/img/welcome@2x.jpg"
                    title=""
                  ></img>
                  <h2 style={{ color: "#ffffff" }}>Alma Rose</h2>
                  <h3 style={{ color: "#ffffff" }}>
                    Launch of a Magento eCommerce store for B2C sales
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Portfolio;
