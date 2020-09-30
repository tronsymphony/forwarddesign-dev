import React, { Component } from "react";
import mainVideo from "./media/welcome.mp4";
// import mainVideo1 from "./media/1433147584.mp4";
// import mainVideo2 from "./media/1521167211.mp4";
import mainVideo3 from "./media/1521167359.mp4";
import mainVideo4 from "./media/1521167682.mp4";
// import mainVideo5 from "./media/1918465.mp4";

let video = [];
video.push(mainVideo);
// video.push(mainVideo1);
// video.push(mainVideo2);
video.push(mainVideo3);
video.push(mainVideo4);
// video.push(mainVideo5);

let videoItem = video[Math.floor(Math.random() * video.length)];

class Home extends Component {
  render() {
    return (
      <div>
        <section className="video-background">
          <div className="videotag">
            <video autoPlay loop playsInline muted>
              <source src={videoItem} type="video/mp4" size="1080" />
              <source
                src="https://player.vimeo.com/external/367853827.hd.mp4?s=14d52988ba245932614cfe16bf3778ec72f720b3&amp;profile_id=174"
                type="video/mp4"
                size="720"
              />
              <source
                src="https://player.vimeo.com/external/367853827.sd.mp4?s=31bbc714deea5c007440274cf54a6b66b9f415f5&amp;profile_id=165"
                type="video/mp4"
                size="576"
              />
              <source
                src="https://player.vimeo.com/external/367853827.sd.mp4?s=31bbc714deea5c007440274cf54a6b66b9f415f5&amp;profile_id=164"
                type="video/mp4"
                size="360"
              />
            </video>
          </div>

          <div className="container">
            <div className="row content">
              <div className="col-11 col-sm-6">
                <div className="hero-content">
                  <h1 className="page-title">
                    <span className="field field--name-title field--type-string field--label-hidden">
                      Demand More From Your Website
                    </span>
                  </h1>
                  <div className="red-bar" />
                  <div className="clearfix text-formatted field field--name-field-sub-heading field--type-text-long field--label-hidden field__item">
                    <p>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  We merge imagination and technology to help
                                  business's grow in an age of digital
                                  transformation.
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="field field--name-field-homepage-header-link field--type-link field--label-hidden feature-link--dark-blue-arrow hero-link field__item">
                    <a href="/contact" target="_self">
                      REQUEST A CONSULTATION
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-bottom icon">
              <div className="col-12">
                <a
                  className="bounce"
                  href="#first"
                  styles={{ color: "#e01173" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 490.656 490.656"
                    style={{enableBackground:"new 0 0 490.656 490.656"}}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.317,347.581L18.203,120.445c-4.16-4.16-10.923-4.16-15.083,0    c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.069,2.091,4.8,3.136,7.531,3.136s5.461-1.045,7.552-3.115l234.667-234.667    C491.696,131.368,491.696,124.627,487.536,120.445z" />
                      </g>
                    </g>  
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="wysiwyg  ">
          <div className="container px-0">
            <div className="row ">
              <div className="col-12 column-content">
                <div className="">
                  <div className="">
                    <div className="">
                      <div className="field__item">
                        <div className="homepage-blocks-wrapper">
                          <div className="field field--name-field-components field--type-entity-reference-revisions field--label-hidden field__items">
                            <div className="field__item">
                              <div className="paragraph paragraph--type--homepage-blocks paragraph--view-mode--default">
                                <div className="homepage-block-inner-content">
                                  <div className="homepage-block-inner-left">
                                    <h2 className="field field--name-field-homepage-block-title field--type-string field--label-hidden field__item">
                                      Website Design
                                    </h2>
                                    <div className="clearfix text-formatted field field--name-field-homepage-block-body field--type-text-long field--label-hidden field__item">
                                      <p>
                                        Specializing in creating highly
                                        performing sites for mid-market&nbsp;to
                                        enterprise businesses.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="homepage-block-inner-right">
                                    <div className="field field--name-field-homepage-block-link field--type-link field--label-hidden feature-link--dark-blue-arrow field__item">
                                      <a href="/services/web-design-build">
                                        Learn More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="field__item">
                              <div className="paragraph paragraph--type--homepage-blocks paragraph--view-mode--default">
                                <div className="homepage-block-inner-content">
                                  <div className="homepage-block-inner-left">
                                    <h2 className="field field--name-field-homepage-block-title field--type-string field--label-hidden field__item">
                                      Digital Marketing
                                    </h2>
                                    <div className="clearfix text-formatted field field--name-field-homepage-block-body field--type-text-long field--label-hidden field__item">
                                      <p>
                                        Prospects are people too. Marketing
                                        should be scientific, but never robotic.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="homepage-block-inner-right">
                                    <div className="field field--name-field-homepage-block-link field--type-link field--label-hidden feature-link--dark-blue-arrow field__item">
                                      <a href="/services/social-media-marketing">
                                        Explore
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="field__item">
                              <div className="paragraph paragraph--type--homepage-blocks paragraph--view-mode--default">
                                <div className="homepage-block-inner-content">
                                  <div className="homepage-block-inner-left">
                                    <h2 className="field field--name-field-homepage-block-title field--type-string field--label-hidden field__item">
                                      Website Development
                                    </h2>
                                    <div className="clearfix text-formatted field field--name-field-homepage-block-body field--type-text-long field--label-hidden field__item">
                                      <p>
                                        Step inside the center of excellence
                                        where we build bold, engaging new
                                        websites.&nbsp;
                                      </p>
                                    </div>
                                  </div>
                                  <div className="homepage-block-inner-right">
                                    <div className="field field--name-field-homepage-block-link field--type-link field--label-hidden feature-link--dark-blue-arrow field__item">
                                      <a href="/services/ecommerce">
                                        See Our Services
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* callout */}
        <section
          className="layout-stats-slider"
        >
          <div className="container">
            <div className="content-container">
              <h2 className="section-title">
                The Team, Tools and Talent to Help You Succeed.
              </h2>
              <div className="content">
                <p>
                  You care about your customers and doing the best for them. That
                  passion shines through in every conversation you have, and it's why
                  people do business with you.
                </p>
                <p>
                  To simplify, amplify and bring that energy to the forefront you need a
                  true partner. We've helped hundreds of businesses realize their goals,
                  drive their companies forward and create insanely happy customers.
                </p>
              </div>
              <a className="btn btn-orange" href="/contact">
                Schedule a Call
              </a>
              <a className="second-cta btn btn-dark" href="/contact">
                Free Website Review
              </a>
            </div>
          </div>
        </section>

        {/* work */}
        <div className="field__item">
          <div className="paragraph paragraph--type--homepage-portfolio- paragraph--view-mode--default ">
            <div className="glob container">
              
              <h2 className="field field--name-field-title field--type-string field--label-hidden field__item">
                Exciting Projects
              </h2>
              <div className="red-bar" />

            </div>
            <div className="field field--name-field-view-reference field--type-viewsreference field--label-hidden field__item container">
              <div className="views-element-container">
                <div className="view view-portfolio view-id-portfolio view-display-id-homepage_portfolio_block js-view-dom-id-1487fa151381c4dd55641658e56afdc6403c2fd2c52bc388ecd6428be009a680">
                  <div className="view-content">
                    <div className="views-row odd mod-3-is-1">
                      <div
                        data-history-node-id={9941}
                        role="article"
                        className="node node--type-case-study node--promoted node--sticky node--view-mode-teaser"
                      >
                        <div className="node__content">
                          <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
                            <a href="/services">
                              <img
                                src="https://hosatech.com/wp-content/uploads/2018/12/mixing-table-mixing-music-musician-159206-1024x681.jpeg"
                                width={914}
                                height={572}
                                alt="homepage visual stop and stor"
                              />
                            </a>
                          </div>
                          <div className="field field--name-field-case-study-industry field--type-entity-reference field--label-hidden field__item">
                            Hosa Tech
                          </div>
                        </div>
                        <div className="red-bar" />
                        <h3>
                          <a href="/services" rel="bookmark">
                            <span className="field field--name-title field--type-string field--label-hidden">
                              Ecommerce Catalog
                            </span>
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="views-row even">
                      <div
                        data-history-node-id={9956}
                        role="article"
                        className="node node--type-case-study node--promoted node--sticky node--view-mode-teaser"
                      >
                        <div className="node__content">
                          <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
                            <a href="/services">
                              <img
                                src="https://almarose.com/wp-content/themes/ui-almarose/img/welcome@2x.jpg"
                                width={914}
                                height={572}
                                alt="homepage visual baldor "
                              />
                            </a>
                          </div>
                          <div className="field field--name-field-case-study-industry field--type-entity-reference field--label-hidden field__item">
                            Alma Rose
                          </div>
                        </div>
                        <div className="red-bar" />
                        <h3>
                          <a href="/services" rel="bookmark">
                            <span className="field field--name-title field--type-string field--label-hidden">
                              Marketing and Blog
                            </span>
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="views-row odd last">
                      <div
                        data-history-node-id={10136}
                        role="article"
                        className="node node--type-case-study node--view-mode-teaser"
                      >
                        <div className="node__content">
                          <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
                            <a href="/services">
                              <img
                                src="https://edinahomes.com/wp-content/uploads/2019/07/IMG_7406.jpg"
                                width={914}
                                height={572}
                                alt="teaser  "
                              />
                            </a>
                          </div>
                          <div className="field field--name-field-case-study-industry field--type-entity-reference field--label-hidden field__item">
                            Edina Homes
                          </div>
                        </div>
                        <div className="red-bar" />
                        <h3>
                          <a href="/services" rel="bookmark">
                            <span className="field field--name-title field--type-string field--label-hidden">
                              Real Esate - Blogging and Marketing
                            </span>
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className="views-row even first mod-3-is-1">
                      <div
                        data-history-node-id={9801}
                        role="article"
                        className="node node--type-case-study node--promoted node--sticky node--view-mode-teaser"
                      >
                        <div className="node__content">
                          <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
                            <a href="/services">
                              <img
                                src="https://www.illuminateplasticsurgery.com/wp-content/themes/ui-illuminate/img/MedSpatop.jpg"
                                width={914}
                                height={572}
                                alt="ucf teaser  "
                              />
                            </a>
                          </div>
                          <div className="field field--name-field-case-study-industry field--type-entity-reference field--label-hidden field__item">
                            illuminate plastic surgery
                          </div>
                        </div>
                        <div className="red-bar" />
                        <h3>
                          <a href="/services" rel="bookmark">
                            <span className="field field--name-title field--type-string field--label-hidden">
                              Surgeon and Medical Practice
                            </span>
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="views-row odd">
                      <div
                        data-history-node-id={9896}
                        role="article"
                        className="node node--type-case-study node--promoted node--sticky node--view-mode-teaser"
                      >
                        <div className="node__content">
                          <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
                            <a href="/services">
                              <img
                                src={require("./media/southframes.png")}
                                width={914}
                                height={572}
                                alt="homepage teaser "
                              />
                            </a>
                          </div>
                          <div className="field field--name-field-case-study-industry field--type-entity-reference field--label-hidden field__item">
                            South Frames
                          </div>
                        </div>
                        <div className="red-bar" />
                        <h3>
                          <a href="/services" rel="bookmark">
                            <span className="field field--name-title field--type-string field--label-hidden">
                              eCommerce / Shop Catalog
                            </span>
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="views-row even">
                      <div
                        data-history-node-id={9926}
                        role="article"
                        className="node node--type-case-study node--promoted node--sticky node--view-mode-teaser"
                      >
                        <div className="node__content">
                          <div className="field field--name-field-teaser-image field--type-image field--label-hidden field__item">
                            <a href="/services">
                              <img
                                src="https://i-aesthetic.com/img/vivivace.jpg"
                                width={914}
                                height={572}
                                alt="homepage teaser "
                              />
                            </a>
                          </div>
                          <div className="field field--name-field-case-study-industry field--type-entity-reference field--label-hidden field__item">
                            I-Aestheic
                          </div>
                        </div>
                        <div className="red-bar" />
                        <h3>
                          <a href="/services" rel="bookmark">
                            <span className="field field--name-title field--type-string field--label-hidden">
                              Medical Service and Skin Care
                            </span>
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glob container">
              <div className="field field--name-field-homepage-block-link field--type-link field--label-hidden feature-link--dark-blue-arrow field__item">
                <a href="/services">View Full Portfolio</a>
              </div>
            </div>
          </div>
        </div>

        {/* work */}

        <section className="wysiwyg image">
          <div className="container px-0">
            <div className="row no-gutters">
              <div className="col-8  column-image">
                <div className="frame">
                  <img
                    src="https://images.pexels.com/photos/1688186/pexels-photo-1688186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    sizes="(max-width: 1125px) 100vw, 1125px"
                    alt="The ForwwardDesign offices, Bournemouth"
                    title=""
                  />
                </div>
              </div>
              <div className=" column-content">
                <div className="container">
                  <div className="row">
                    <div className="col-10 offset-1 col-sm-10 col-md-10 col-xl-12 offset-xl-1 p-10 content">
                      <h2>
                        We believe things work better when they’re joined up.
                      </h2>
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
                      <div className="glob">
                        <div className="field field--name-field-homepage-block-link field--type-link field--label-hidden feature-link--dark-blue-arrow field__item">
                          <a href="/about">More about our thinking</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature purple">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-10 offset-1 col-xl-8 offset-xl-2">
                
                <h4>IN HOUSE, EVERY TIME</h4>
                <p>
                  Everything we do is done by a team member in one of our
                  offices.
                  <em>We never outsource. </em>It’s how we’re able to maintain
                  quality, ensure projects stay on track and remove bloat from
                  projects and campaigns. What’s more, we open source many parts
                  of our toolkit, allowing others in the community to benefit
                  from the work we do and for us to glean insights from that
                  same wider community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-articles">
          <div className="container px-0 px-md-1">
            <div className="row mx-0">
              <div className="col-10 offset-1 px-0 px-md-1">
                <h4>From The Blog</h4>
              </div>
            </div>
          </div>
          <div className="container px-0 px-md-1">
            <div className="row mx-0">
              <div className="article col-12 col-md-6 px-0 px-md-1">
                <a
                  href="/2019/08/10-ecommerce-improvements-for-any-store"
                  title="10 eCommerce improvements for any store"
                >
                  <img
                    // src="https://www.many.co.uk/wp-content/uploads/2019/08/xkristian-egelund-wwqRpSNBPq4-unsplash-760x427.jpg.pagespeed.ic.ueo8zJRNOQ.webp"
                    sizes="(max-width: 760px) 100vw, 760px"
                    alt=""
                    title=""
                  />
                </a>
                <div className="col-10 offset-1">
                  <a
                    href="/2019/08/10-ecommerce-improvements-for-any-store"
                    title="10 eCommerce improvements for any store"
                  >
                    <h2>10 eCommerce improvements for any store</h2>
                  </a>
                  <p>16.08.19 | Opinion</p>
                </div>
              </div>
              <div className="article col-12 col-md-6 px-0 px-md-1">
                <a
                  href="/2019/05/how-can-live-streaming-enhance-your-brand"
                  title="How can live streaming enhance your brand?"
                >
                  <img
                    // src="https://www.many.co.uk/wp-content/uploads/2019/05/xgraydon-driver-ggZiK8G2WLY-unsplash-760x427.jpg.pagespeed.ic.21Msy6sL12.webp"
                    sizes="(max-width: 760px) 100vw, 760px"
                    alt=""
                    title=""
                  />
                </a>
                <div className="col-10 offset-1">
                  <a
                    href="/2019/05/how-can-live-streaming-enhance-your-brand"
                    title="How can live streaming enhance your brand?"
                  >
                    <h2>How can live streaming enhance your brand?</h2>
                  </a>
                  <p>20.05.19 | Opinion</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
