import React, { Component } from "react";

class Seo extends Component {
  componentDidMount() {
    document.title = "Search Engine Optimisation | Forwward Design";
  }
  render() {
    return (
      <div>
        <section className="image-background ">
          <div className="background">
            <img
              src={require("../media/space.png")}
              sizes="(max-width: 1191px) 100vw, 1191px"
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
                      <h3 style={{ color: "#ffffff" }}>What We Do</h3>
                      <h1 style={{ color: "#ffffff" }}>
                        Search Engine Optimisation
                      </h1>
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
                      <h2>
                        Our search engine optimisation strategy? Be natural.
                      </h2>
                      <p>
                        <strong>
                          The fundamentals of Search Engine Optimisation remain
                          unchanged for the last 15 years: write natural, high
                          quality content deployed in an accessible and
                          user-friendly codebase and you’ll rank well.
                        </strong>{" "}
                        After all, it’s the content your users are arriving at
                        your site to read. Rather than waste our time on
                        whatever black hat tricks and games are the trend, we
                        focus on on-page and off-site optimisation, both content
                        and technical. We lean towards quality over quantity as
                        this has the best long-term commercial benefits, winning
                        in both the search algorithm and user engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="boxes purple">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1 col-xl-8 offset-xl-2 text-center">
                <h3>Our services</h3>
                <p>
                  Our Search Engine Optimisation strategy can be grouped into
                  three main areas:
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div
                className="col-10 offset-1 col-sm-4 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <div className="box box-grey box-align-center box-icon">
                  <canvas className="rays-background" />
                  <a href="/services/search-engine-optimisation/content-marketing">
                    {" "}
                    <div className="icon icon-font"></div>
                    <h3>Content Marketing</h3>
                    <p>
                      A solid content strategy is the most effective tool in our
                      arsenal. Our content marketing service includes
                      copywriting, video production and content optimisation.
                    </p>
                    <div className="button">
                      <p>Read More</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-4 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="box box-grey box-align-center box-icon">
                  <canvas className="rays-background" />
                  <a href="/services/search-engine-optimisation/outreach">
                    {" "}
                    <div className="icon icon-font"></div>
                    <h3>Outreach</h3>
                    <p>
                      Building a credible online presence involves more than
                      your website. Our outreach programme works to build
                      backlinks with other credible sites, publish press
                      releases and build a social presence.
                    </p>
                    <div className="button">
                      <p>Read More</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-4 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="box box-grey box-align-center box-icon">
                  <canvas className="rays-background" />
                  <a href="/services/search-engine-optimisation/technical-seo">
                    {" "}
                    <div className="icon icon-font"></div>
                    <h3>Technical</h3>
                    <p>
                      Our technical SEO programme uses industry best-practice to
                      ensure your site is optimised for the search engines. This
                      includes crawlability, content optimisation, site speed
                      and structured data.
                    </p>
                    <div className="button">
                      <p>Read More</p>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wysiwyg slant ">
          <div className="container-fluid px-0">
            <div className="row no-gutters">
              <div className="col-12 column-content">
                <div className="container">
                  <div className="row">
                    <div className="col-10 offset-1 col-sm-9 col-md-7 col-lg-8">
                      <h2>It all starts with discovery</h2>
                      <p>
                        Before we kick-off any SEO strategy we will need to
                        research your business. We will need to understand your
                        brand, offering and inventory along with the target
                        audiences and locations in which you operate. Our audit
                        will gauge how your website works (from both a
                        commercial and technical perspective) and how your site
                        is referenced from offsite locations including social
                        media, PR campaigns, news, influencers, affiliates,
                        media and publishers.
                      </p>
                      <p>
                        As with everything we do, the SEO discovery process is
                        tailored to meet your specific needs. If you are just
                        getting started in SEO and need market intelligence and
                        competitor analysis to understand the search space, we
                        can help. Likewise, if you have a highly evolved SEO
                        strategy that needs validating and auditing, we can
                        present you with a range of audits and reports to
                        provide you with the natural search insights you need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="seoaudit purple">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1 col-xl-6 offset-xl-3 text-center">
                <h3>See how you're doing</h3>
                <p>
                  Drop your a URL for your site into the first box and a keyword
                  you'd like to rank for, and we'll tell you how you're doing.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1">
                <form action="/" method="post" className="inline-grey">
                  <div className="row search">
                    <div className="col-10 offset-1 col-xl-5 offset-xl-0">
                      <input
                        type="url"
                        name="seo-url"
                        placeholder="e.g https://www.nike.com/gb/men"
                        tabIndex={1}
                      />
                    </div>
                    <div className="col-10 offset-1 col-xl-5 offset-xl-0">
                      <input
                        type="text"
                        name="seo-keyword"
                        placeholder="e.g running shoe"
                        tabIndex={2}
                      />
                    </div>
                    <div className="col-10 offset-1 col-xl-2 offset-xl-0">
                      <input type="text" name="seo-email" tabIndex={-1} />
                      <input type="submit" defaultValue="Go" tabIndex={3} />
                    </div>
                    <div className="col-10 offset-1 col-xl-12 offset-xl-0 validation">
                      <div className="msg msg-error general" />
                    </div>
                  </div>
                  <div className="row loader">
                    <div className="col-10 offset-1 col-xl-12 offset-xl-0">
                      <div className="loading mx-auto my-auto" />
                    </div>
                  </div>
                  <div className="row results">
                    <div className="col-10 offset-1 col-xl-12 offset-xl-0">
                      <h2 className="rank">Your Results</h2>
                      <p className="grade">
                        We'd recommend you take the following actions:
                      </p>
                      <ul className="recommendations">
                        <li className="tick">
                          Your content is looking good, it's clean and natural.
                        </li>
                        <li className="warn">
                          You're missing structured data from your page
                        </li>
                        <li className="error">
                          Your robots.txt is blocking Google from visiting your
                          site!
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="cta purple size-regular">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
                <h3>
                  Interested in how SEO can help your business grow online?
                </h3>
                <p>
                  Our team regularly conducts audits, offer advice and provide
                  guidance on everything search-related. If you’re looking for
                  some SEO assistance, we’re here to help. Just get in touch.
                </p>
              </div>
              <div className="col-10 offset-1 button">
                <p>
                  <a href="/contact">Talk to the team</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Seo;
