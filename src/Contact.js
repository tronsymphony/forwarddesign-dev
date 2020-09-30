import React, { Component } from "react";
// import axios from "axios";

// const API_PATH = "http://forwwarddesign.com/api/contact/index.php";

// const handleChange = (e, field) => {
//   let value = e.target.value;
// };

// const handleFormSubmit = (e) => {
//   e.preventDefault();

//   axios({
//     method: "post",
//     url: `${API_PATH}`,
//     headers: { "content-type": "application/json" },
//     data: this.state,
//   })
//     .then((result) => {
//       this.setState({
//         mailSent: result.data.sent,
//       });
//     })
//     .catch((error) => this.setState({ error: error.message }));
// }


class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      message: "",
      mailSent: false,
      error: null,
    };
  }


  componentDidMount() {
    document.title = "Contact Us | Forwward Design";
  }

  render() {
    return (
      <div>
        <section className="image-background">
          <div className="background">
            <img
              alt=""
              sizes="(max-width: 1880px) 100vw, 1880px"
              src={require("./media/neonbrand-mtEyAXA1xGo-unsplash-1880x1253.jpg")}
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
                      <h1 style={{ color: "#FFFFFF" }}>Get In Touch</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta grey size-large">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
                <h3>One simple way to get in touch</h3>
                <p>
                  Our team is always contactable throughout the day on our
                  studio email. Regardless of who you need to get in touch with,
                  you can shoot us an email to the following email:
                </p>
              </div>
              <div className="col-10 offset-1 button">
                <p>
                  <a href="mailto:info@forwwarddesign.com">
                    info@forwwarddesign.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

  
      </div>
    );
  }
}
export default Contact;
