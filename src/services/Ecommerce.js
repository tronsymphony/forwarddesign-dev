import React, { Component } from "react";
// import { Link, Route ,Switch} from "react-router-dom";

class Ecommerce extends Component {
  render() {
    return (
      <div>
        <section className="image-background ">
          <div className="background">
            <img
              src={require("../media/Header-2-1880x940.png")}
              sizes="(max-width: 1880px) 100vw, 1880px"
              alt=""
              title
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
                        The digital agency for eCommerce
                      </h1>
                    </div>
                    <div className="col-8 offset-1 col-md-6 offset-md-0 mb-5 mt-3">
                      <p style={{ color: "white" }}>
                        We’ve built award-winning winning websites for hundreds
                        of clients around the world.
                      </p>

                      <p>
                        <a
                          className="button"
                          style={{ color: "#1b1151" }}
                          href="/contact"
                        >
                          GET YOUR FREE AUDIT
                        </a>
                      </p>
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
                      <h2>We’re building a new breed of eCommerce.</h2>
                      <p>
                        <strong>
                          One that drives relentless growth through exceptional
                          customer experience.
                        </strong>
                        As the creative digital agency for retail brands,
                        eCommerce is at the heart of everything we do. Using the
                        latest best-in-breed eCommerce platform, coupled with
                        our in-house design, UX and development team, we build
                        high-performance and robust online stores that enable
                        owners to merchandise, sell and fulfil orders with ease,
                        so they can focus on what really matters: the customer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="boxes grey">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1 col-xl-8 offset-xl-2 text-center">
                <h3>We offer three flavours of eCommerce support</h3>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div
                className="col-10 offset-1 col-sm-4 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <div className="box box-regular box-align-left ">
                  <h6>1.</h6>
                  <h2>Design and UX</h2>
                  <p>
                    The next generation of eCommerce stores look and feel
                    different, so it’s important that your design and user
                    experience keeps up. Our designers build beautiful,
                    functional eCommerce stores that customers can glide through
                    with ease. We’ve got you covered, whether it’s UX
                    improvements as part of a Conversion Rate Optimisation plan,
                    a new season drop or an entire site redesign.
                  </p>
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-4 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="box box-regular box-align-left ">
                  <h6>2.</h6>
                  <h2>Development</h2>
                  <p>
                    Using Magento as our platform of choice, we build, deploy,
                    support and scale your eCommerce website. From minor
                    enhancements and platform migrations through to full builds,
                    our in-house team of eCommerce developers build
                    award-winning websites for major eCommerce players each and
                    every day.
                  </p>
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-4 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="box box-regular box-align-left ">
                  <h6>3.</h6>
                  <h2>Optimisation</h2>
                  <p>
                    Our Conversion Rate Optimisation service uses real-time
                    data, research and our knowledge bank to suggest micro
                    improvements to your eCommerce store, looking for
                    incremental gains and uplift in conversion – be that sales
                    or average order value. Our team run tests, analyse the
                    results and implement the changes that work to give you
                    increased ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section className="boxes purple">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1 col-xl-8 offset-xl-2 text-center">
                <h3>We give the same 6 promises to every one of our clients</h3>
                <p>
                  We've learnt what's important for eCommerce. Our 6 key
                  principles help drive and define how we do business.
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div
                className="col-10 offset-1 col-sm-6 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <div className="box box-grey box-align-left ">
                  <h6>Fast</h6>
                  <hr />
                  <p>
                    We’ve built a highly-optimised Magento stack from the ground
                    up on Amazon Web Services infrastructure. It’s built for
                    speed and scalability, handling hundreds of thousands of
                    requests every hour.
                  </p>
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-6 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="box box-grey box-align-left ">
                  <h6>Secure</h6>
                  <hr />
                  <p>
                    We use industry-leading security from the likes of Amazon
                    and Verisign to secure our platform, making sure that the
                    data your customers entrust to your store are kept secure
                    and in compliance. We use the latest fraud detection
                    technology to protect you losing revenue, and we ensure
                    we’re fully compliant with PCI-DSS when it comes to payment
                    handling.
                  </p>
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-6 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="box box-grey box-align-left ">
                  <h6>In House</h6>
                  <hr />
                  <p>
                    We build everything in-house and we never outsource abroad.
                    This means our own team of Magento developers write,
                    understand and maintain our code, ensuring the best quality,
                    security and scalability all the time.
                  </p>
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-6 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="box box-grey box-align-left ">
                  <h6>Flexible</h6>
                  <hr />
                  <p>
                    We handle integrations with tons of payment providers
                    including Sagepay, Stripe, PayPal, Braintree and we’ve
                    automated shipping with all major couriers including DHL,
                    UPS, DPD, Fedex and Royal Mail. What’s more, we add new
                    payment methods and shipping options throughout the year.
                  </p>
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-6 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="box box-grey box-align-left ">
                  <h6>Bespoke</h6>
                  <hr />
                  <p>
                    We don’t use off-the-shelf themes and plugins, as they often
                    come with bloat or security problems. Instead we write
                    everything exactly to your specification and design,
                    assuring it’s bloat-free and of the highest quality.
                  </p>
                </div>
              </div>
              <div
                className="col-10 offset-1 col-sm-6 col-sm-4 col-md-4 col-lg-4 offset-sm-0 align-self-stretch"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="box box-grey box-align-left ">
                  <h6>Mobile</h6>
                  <hr />
                  <p>
                    With the increasing numbers of users researching and
                    purchasing on their mobile devices, it’s vital that stores
                    cater for a mobile audience. We’re mobile-first, meaning we
                    design and develop everything with mobile as a priority,
                    making sure mobile users get just as good an experience and
                    desktop users.
                  </p>
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
                        We approach eCommerce with a single, unified strategy:
                        put the customer first
                      </h2>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          We believe that a store driven by fanatical customer
                          service is the only way to stand the test of time, so
                          we build those in from the start. Things like
                          real-time order tracking, live chat support, one-click
                          checkout, a fully responsive mobile design and a
                          variety of checkout options all work to build trust
                          with the customer, and giving you the tools to provide
                          exceptional after-sales support are all part of the
                          promise we make to our clients.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          We make decisions during the design and build phase of
                          any project with the customer central to the decision
                          making process. How will design changes affect the
                          user’s experience? Are they able to access all the
                          data they might need to make a buying decision? What
                          additional information could we be giving to the
                          customer that helps them understand the delivery
                          process better?
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: 400 }}>
                          Of course, revenue and numbers are always important,
                          but it’s key to the longevity of your store that the
                          customer feels informed, empowered and in-control at
                          every step of the process. Your store ratings and
                          revenue will thank us later.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-form purple">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1 col-lg-6 offset-lg-0">
                <h3>We'll give you a free audit</h3>
                <p>
                  Let us take a look at your existing offering and we’ll make
                  some recommendations, let you know how to fix problems and
                  provide advice on growth. Over the last 8 years, we’ve
                  provided hundreds of site audits for store owners and brand
                  managers alike, and the feedback is always the same: “that was
                  really helpful.”
                </p>
                <p>
                  It’s <strong>completely free</strong> and
                  <strong>zero obligation</strong>.
                </p>
              </div>
              <div className="col-10 offset-1 col-lg-5">
                <form
                  className="af-form acf-form"
                  method="POST"
                  // action="https://www.many.co.uk/services/ecommerce"
                  id="form_5eebb7834f0e4"
                  data-key="form_5eebb7834f0e4"
                >
                  <div className="af-fields acf-fields acf-form-fields -top">
                    <div id="acf-form-data" className="acf-hidden">
                      <input
                        type="hidden"
                        id="_acf_screen"
                        name="_acf_screen"
                        defaultValue="acf_form"
                      />
                      <input
                        type="hidden"
                        id="_acf_post_id"
                        name="_acf_post_id"
                        defaultValue={0}
                      />
                      <input
                        type="hidden"
                        id="_acf_validation"
                        name="_acf_validation"
                        defaultValue={1}
                      />
                      <input
                        type="hidden"
                        id="_acf_form"
                        name="_acf_form"
                        defaultValue={0}
                      />
                      <input
                        type="hidden"
                        id="_acf_nonce"
                        name="_acf_nonce"
                        defaultValue="9e293bec28"
                      />
                      <input
                        type="hidden"
                        id="_acf_changed"
                        name="_acf_changed"
                        defaultValue={0}
                      />
                    </div>
                    <div className="acf-hidden">
                      <input
                        type="hidden"
                        name="_acfnonce"
                        defaultValue="a1d984ffa0"
                      />
                      <input
                        type="hidden"
                        name="nonce"
                        defaultValue="a1d984ffa0"
                      />
                      <input
                        type="hidden"
                        name="af_form"
                        defaultValue="form_5eebb7834f0e4"
                      />
                      <input
                        type="hidden"
                        name="af_form_args"
                        defaultValue="eyJkaXNwbGF5X3RpdGxlIjpmYWxzZSwiZGlzcGxheV9kZXNjcmlwdGlvbiI6ZmFsc2UsImlkIjoiZm9ybV81ZWViYjc4MzRmMGU0IiwidmFsdWVzIjpbXSwic3VibWl0X3RleHQiOiJTdWJtaXQiLCJyZWRpcmVjdCI6Imh0dHBzOlwvXC93d3cubWFueS5jby51a1wvc2VydmljZXNcL2Vjb21tZXJjZSIsInRhcmdldCI6Imh0dHBzOlwvXC93d3cubWFueS5jby51a1wvc2VydmljZXNcL2Vjb21tZXJjZSIsImVjaG8iOnRydWUsImV4Y2x1ZGVfZmllbGRzIjpbXSwidXBsb2FkZXIiOiJ3cCIsImZpbHRlcl9tb2RlIjpmYWxzZSwibGFiZWxfcGxhY2VtZW50IjoidG9wIiwiaW5zdHJ1Y3Rpb25fcGxhY2VtZW50IjoibGFiZWwiLCJob25leXBvdCI6dHJ1ZX0="
                      />
                      <input
                        type="hidden"
                        name="_acf_form"
                        defaultValue="eyJkaXNwbGF5X3RpdGxlIjpmYWxzZSwiZGlzcGxheV9kZXNjcmlwdGlvbiI6ZmFsc2UsImlkIjoiZm9ybV81ZWViYjc4MzRmMGU0IiwidmFsdWVzIjpbXSwic3VibWl0X3RleHQiOiJTdWJtaXQiLCJyZWRpcmVjdCI6Imh0dHBzOlwvXC93d3cubWFueS5jby51a1wvc2VydmljZXNcL2Vjb21tZXJjZSIsInRhcmdldCI6Imh0dHBzOlwvXC93d3cubWFueS5jby51a1wvc2VydmljZXNcL2Vjb21tZXJjZSIsImVjaG8iOnRydWUsImV4Y2x1ZGVfZmllbGRzIjpbXSwidXBsb2FkZXIiOiJ3cCIsImZpbHRlcl9tb2RlIjpmYWxzZSwibGFiZWxfcGxhY2VtZW50IjoidG9wIiwiaW5zdHJ1Y3Rpb25fcGxhY2VtZW50IjoibGFiZWwiLCJob25leXBvdCI6dHJ1ZX0="
                      />
                      <input
                        type="text"
                        name="email_for_non_humans"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                    <div
                      id
                      className="af-field af-field-type-text af-field-name acf-field acf-field-text acf-field-5eebb7fdb2699 af-field-required"
                      data-name="name"
                      data-key="field_5eebb7fdb2699"
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
                            type="text"
                            id="acf-field_5eebb7fdb2699"
                            name="acf[field_5eebb7fdb2699]"
                            placeholder="First Name"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id
                      className="af-field af-field-type-email af-field-email acf-field acf-field-email acf-field-5eebb7fdb26df af-field-required"
                      data-name="email"
                      data-key="field_5eebb7fdb26df"
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
                            type="email"
                            id="acf-field_5eebb7fdb26df"
                            name="acf[field_5eebb7fdb26df]"
                            placeholder="Email Address"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id
                      className="af-field af-field-type-text af-field-phone acf-field acf-field-text acf-field-5eebb7fdb2723"
                      data-name="phone"
                      data-key="field_5eebb7fdb2723"
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
                            type="text"
                            id="acf-field_5eebb7fdb2723"
                            name="acf[field_5eebb7fdb2723]"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      id
                      className="af-field af-field-type-textarea af-field-comments acf-field acf-field-textarea acf-field-5eebb7fdb2762"
                      data-name="comments"
                      data-key="field_5eebb7fdb2762"
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
                        type="submit"
                        className="acf-button af-submit-button"
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
        <section className="feature grey">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-10 offset-1 col-md-5 offset-md-1 justify-content-center">
                <img
                  // src=""
                  src={require("../media/bg15-1.svg")}
                  sizes="(max-width: 1px) 100vw, 1px"
                  alt=""
                  title
                />
              </div>
              <div className="col-10 offset-1 col-md-5 offset-md-1">
                <h4>In Detail: Why Many?</h4>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    With over 50 years in the retail industry and backgrounds in
                    John Lewis, Superdry, Boots and Marshall Amps, we’ve got a
                    wealth of understanding on what works and what doesn’t. We
                    know the problems that retailers face. We’ve helped launch
                    luxury fashion brands, built year-on-year growth for home
                    improvement stores and built complex, multi language, multi
                    currency stores for London retailers. Put simply, we don’t
                    just understand marketing; we understand retail.
                  </span>
                </p>
                <p>
                  <a href="/about">
                    More about us <i className="icon-font"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      
      
        <section className="cta purple size-regular">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
                <h3>Interested in hearing more?</h3>
                <p>
                  If you’ve got an eCommerce project, or simply want to discuss
                  options for support, our team is on hand to help.
                </p>
              </div>
              <div className="col-10 offset-1 button">
                <p>
                  <a href="/contact">Talk to our team</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Ecommerce;
