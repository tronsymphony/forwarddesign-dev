import React, { Component } from "react";

class WebDesign extends Component {
  render() {
    return (
      <div>
        <section className="image-background">
          <div className="background">
            <img
              alt=""
              sizes="(max-width: 1880px) 100vw, 1880px"
              src={require("../media/glenn-carstens-peters-P1qyEf1g0HU-unsplash-1880x1249.jpg")}
            />
          </div>
          <div className="container px-0">
            <div className="row no-gutters justify-content-start align-items-end align-content-end content">
              <div className="col-12 col-sm-10 offset-sm-1">
                <div className="container">
                  <div className="row">
                    <div className="col-10 offset-1 offset-md-0">
                      <h3 style={{ color: "#ffffff" }}>What We Do</h3>
                      <h1 style={{ color: "#ffffff" }}>
                        Web Design &amp; Build
                      </h1>
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
                        From brand and brochure sites to campaign, competition
                        and seasonal microsites, we’ve got it covered.
                      </h2>
                      <p>
                        Our websites have won awards, engaged consumers and
                        delivered measurable results for every one of our
                        clients. In a world where{" "}
                        <span style={{ fontWeight: 400 }}>
                          retail brands are under increasing pressure to connect
                          with their consumer, and with an increasing amount of
                          revenue switching to online, it’s more important than
                          ever that brands are represented with an attractive,
                          concise and always-available online presence.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          We help your brand represent itself online through
                          beautifully designed, functional and easy to navigate
                          websites that capture the essence, identity and tone
                          of your brand. We dig deep to understand what makes
                          your brand unique, and we help to tell that story
                          online, through expertly crafted copy, beautiful
                          imagery and a stunning user experience.
                        </span>
                      </p>
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
              <div className="col-10 offset-1 col-md-5 offset-md-1 justify-content-center">
                <img
                  alt=""
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  src={require("../media/flowerbx-1-left-1080x1387.png")}
                  // src="https://www.many.co.uk/wp-content/uploads/2019/09/flowerbx-1-left-1080x1387.png"
                />
              </div>
              <div className="col-10 offset-1 col-md-5 offset-md-1">
                <div className="icon icon-font"></div>
                <h4>User Research and User Experience</h4>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Through our years of experience as a creative digital agency
                    for retail brands, we have an extensive and deep knowledge
                    of consumer behaviour and habits, allowing us an advantage
                    over other more generalist web design agencies. Our
                  </span>{" "}
                  <span style={{ fontWeight: 400 }}>
                    User Research and Experience team
                  </span>{" "}
                  <span style={{ fontWeight: 400 }}>
                    works to understand your key demographic, how they’ll
                    navigate the site, what information they’re looking for and
                    how best it should be presented.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="feature none">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-10 offset-1 col-md-5 offset-md-1">
                <div className="icon icon-font"></div>
                <h4>Engaging Creative</h4>
                <p>
                  A truly great User Experience means creating an engaging and
                  rewarding visit for the user. When the time comes to put the
                  User Research into practice, our Creative team takes the lead;
                  designing beautiful and functional designs, built on top of
                  established design patterns and systems. Through years of
                  designing specialist sites for the retail sector, our team
                  have learnt what works and what doesn’t, cutting down on
                  design churn.
                </p>
              </div>
              <div className="col-5 offset-1">
                <img
                  alt=""
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  src={require("../media/antibad-3-right-1080x1329.png")}
                  // src="https://www.many.co.uk/wp-content/uploads/2019/09/antibad-3-right-1080x1329.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="feature purple">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-10 offset-1 col-md-5 offset-md-1 justify-content-center">
                <img
                  alt=""
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  src={require("../media/pd-1-left-1080x1387.png")}
                  // src="https://www.many.co.uk/wp-content/uploads/2019/09/pd-1-left-1080x1387.png"
                />
              </div>
              <div className="col-10 offset-1 col-md-5 offset-md-1">
                <div className="icon icon-font"></div>
                <h4>Results Driven</h4>
                <p>
                  Without measuring the results, you might as well be driving
                  with a blindfold on. Using a series of automated monthly
                  reports, we measure the real-world impact that websites we
                  build are having. A beautiful website attracting hundreds of
                  visitors a day is great, but it’s only half the equation. We
                  measure against real-world KPIs: increases in sales, brand
                  awareness, customer engagement.
                </p>
                <p>
                  We’re able to drive unrelenting growth for our clients using
                  this data-driven approach to design and development of brand
                  websites. The results speak for themselves.
                </p>
                <p>
                  <a href="/work">
                    See some of our work <i className="icon-font"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-form purple">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1 col-lg-6 offset-lg-0">
                <h3>Get in touch</h3>
                <p>
                  We’re happy to talk you through our design and build process
                  in more detail, and find out if we’re a good fit. Maybe you
                  have a specific project in mind, are making general enquiries,
                  have an idea you’d like to discuss or just need a question
                  answering – we’re all ears.
                </p>
                <p>
                  Just fill in our quick enquiry form and a member of our team
                  will get back to you within <strong>2 business hours</strong>.
                </p>
              </div>
              <div className="col-10 offset-1 col-lg-5">
                <form
                  // action="https://www.many.co.uk/services/web-design-build"
                  className="af-form acf-form"
                  data-key="form_5eebb7834f0e4"
                  id="form_5eebb7834f0e4"
                  method="post"
                  name="form_5eebb7834f0e4"
                >
                  <div className="af-fields acf-fields acf-form-fields -top">
                    <div className="acf-hidden" id="acf-form-data">
                      <input
                        id="_acf_screen"
                        name="_acf_screen"
                        type="hidden"
                        defaultValue="acf_form"
                      />
                      <input
                        id="_acf_post_id"
                        name="_acf_post_id"
                        type="hidden"
                        defaultValue={0}
                      />
                      <input
                        id="_acf_validation"
                        name="_acf_validation"
                        type="hidden"
                        defaultValue={1}
                      />
                      <input
                        id="_acf_form"
                        name="_acf_form"
                        type="hidden"
                        defaultValue={0}
                      />
                      <input
                        id="_acf_nonce"
                        name="_acf_nonce"
                        type="hidden"
                        defaultValue="9e293bec28"
                      />
                      <input
                        id="_acf_changed"
                        name="_acf_changed"
                        type="hidden"
                        defaultValue={0}
                      />
                    </div>
                    <div className="acf-hidden">
                      <input
                        name="_acfnonce"
                        type="hidden"
                        defaultValue="a1d984ffa0"
                      />
                      <input
                        name="nonce"
                        type="hidden"
                        defaultValue="a1d984ffa0"
                      />
                      <input
                        name="af_form"
                        type="hidden"
                        defaultValue="form_5eebb7834f0e4"
                      />
                      <input
                        name="af_form_args"
                        type="hidden"
                        defaultValue="eyJkaXNwbGF5X3RpdGxlIjpmYWxzZSwiZGlzcGxheV9kZXNjcmlwdGlvbiI6ZmFsc2UsImlkIjoiZm9ybV81ZWViYjc4MzRmMGU0IiwidmFsdWVzIjpbXSwic3VibWl0X3RleHQiOiJTdWJtaXQiLCJyZWRpcmVjdCI6Imh0dHBzOlwvXC93d3cubWFueS5jby51a1wvc2VydmljZXNcL3dlYi1kZXNpZ24tYnVpbGQiLCJ0YXJnZXQiOiJodHRwczpcL1wvd3d3Lm1hbnkuY28udWtcL3NlcnZpY2VzXC93ZWItZGVzaWduLWJ1aWxkIiwiZWNobyI6dHJ1ZSwiZXhjbHVkZV9maWVsZHMiOltdLCJ1cGxvYWRlciI6IndwIiwiZmlsdGVyX21vZGUiOmZhbHNlLCJsYWJlbF9wbGFjZW1lbnQiOiJ0b3AiLCJpbnN0cnVjdGlvbl9wbGFjZW1lbnQiOiJsYWJlbCIsImhvbmV5cG90Ijp0cnVlfQ=="
                      />
                      <input
                        name="_acf_form"
                        type="hidden"
                        defaultValue="eyJkaXNwbGF5X3RpdGxlIjpmYWxzZSwiZGlzcGxheV9kZXNjcmlwdGlvbiI6ZmFsc2UsImlkIjoiZm9ybV81ZWViYjc4MzRmMGU0IiwidmFsdWVzIjpbXSwic3VibWl0X3RleHQiOiJTdWJtaXQiLCJyZWRpcmVjdCI6Imh0dHBzOlwvXC93d3cubWFueS5jby51a1wvc2VydmljZXNcL3dlYi1kZXNpZ24tYnVpbGQiLCJ0YXJnZXQiOiJodHRwczpcL1wvd3d3Lm1hbnkuY28udWtcL3NlcnZpY2VzXC93ZWItZGVzaWduLWJ1aWxkIiwiZWNobyI6dHJ1ZSwiZXhjbHVkZV9maWVsZHMiOltdLCJ1cGxvYWRlciI6IndwIiwiZmlsdGVyX21vZGUiOmZhbHNlLCJsYWJlbF9wbGFjZW1lbnQiOiJ0b3AiLCJpbnN0cnVjdGlvbl9wbGFjZW1lbnQiOiJsYWJlbCIsImhvbmV5cG90Ijp0cnVlfQ=="
                      />
                      <input
                        autoComplete="off"
                        name="email_for_non_humans"
                        tabIndex={-1}
                        type="text"
                      />
                    </div>
                    <div
                      className="af-field af-field-type-text af-field-name acf-field acf-field-text acf-field-5eebb7fdb2699 af-field-required"
                      data-key="field_5eebb7fdb2699"
                      data-name="name"
                      data-type="text"
                    >
                      <div className="af-label acf-label">
                        <label htmlFor="acf-field_5eebb7fdb2699">
                          Your name <span className="acf-required">*</span>
                        </label>
                      </div>
                      <div className="af-input acf-input">
                        <div className="acf-input-wrap">
                          <input
                            id="acf-field_5eebb7fdb2699"
                            name="acf[field_5eebb7fdb2699]"
                            placeholder="First Name"
                            required="required"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="af-field af-field-type-email af-field-email acf-field acf-field-email acf-field-5eebb7fdb26df af-field-required"
                      data-key="field_5eebb7fdb26df"
                      data-name="email"
                      data-type="email"
                    >
                      <div className="af-label acf-label">
                        <label htmlFor="acf-field_5eebb7fdb26df">
                          Your email <span className="acf-required">*</span>
                        </label>
                      </div>
                      <div className="af-input acf-input">
                        <div className="acf-input-wrap">
                          <input
                            id="acf-field_5eebb7fdb26df"
                            name="acf[field_5eebb7fdb26df]"
                            placeholder="Email Address"
                            required="required"
                            type="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="af-field af-field-type-text af-field-phone acf-field acf-field-text acf-field-5eebb7fdb2723"
                      data-key="field_5eebb7fdb2723"
                      data-name="phone"
                      data-type="text"
                    >
                      <div className="af-label acf-label">
                        <label htmlFor="acf-field_5eebb7fdb2723">
                          Your phone
                        </label>
                      </div>
                      <div className="af-input acf-input">
                        <div className="acf-input-wrap">
                          <input
                            id="acf-field_5eebb7fdb2723"
                            name="acf[field_5eebb7fdb2723]"
                            placeholder="Phone number"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="af-field af-field-type-textarea af-field-comments acf-field acf-field-textarea acf-field-5eebb7fdb2762"
                      data-key="field_5eebb7fdb2762"
                      data-name="comments"
                      data-type="textarea"
                    >
                      <div className="af-label acf-label">
                        <label htmlFor="acf-field_5eebb7fdb2762">
                          Comments or notes
                        </label>
                      </div>
                      <div className="af-input acf-input">
                        <textarea
                          id="acf-field_5eebb7fdb2762"
                          name="acf[field_5eebb7fdb2762]"
                          rows={8}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="af-submit acf-form-submit">
                      <button
                        className="acf-button af-submit-button"
                        type="submit"
                      >
                        Submit
                      </button>
                      <span className="acf-spinner af-spinner" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      
      </div>
    );
  }
}

export default WebDesign;
