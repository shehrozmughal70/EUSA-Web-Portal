import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function LandingPage() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>

      <div id="aboutus" className="wrapper">
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">About Our Company</h2>
                <h5 className="description">
                  This project has great potential in easing the struggle by the many service providers out there looking to work. It will also greatly save time for our customers by reducing the time spent looking for help and increasing the time spent productively. With fast booking and reliable workers, this app can easily find itself among the app giants such as foodpanda, uber etc.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/about1.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      We are passionate about our goals and are always willing to go to extra mile to give customers the experience they yearn for and deserve! <br></br>
                      <br />
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/about6.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/about5.jpg") + ")",
                    }}
                  ></div>
                  <h2 style={{ fontWeight: 'bold' }}>
                    Why Choose EUSA
                  </h2>
                  <h4>● Trained Workers</h4>
                  <p>
                    Our workers are skilled, trained and professional. Furthermore, they are background-checked.
                  </p>
                  <h4>● Quick</h4>
                  <p>
                    Our handymen use motor bikes to minimize delays and reach you on time.
                  </p>
                  <h4>● AFFORDABLE</h4>
                  <p>
                    We charge sensible prices that are really competitive even when compared to contractors or freelance technicians. The clients are further given invoices professionally and don’t have to go through the worry of over-pricing.
                  </p>
                  <h4>● CUSTOMER FOCUSED</h4>
                  <p>We provide after support for our services and make routine feedback calls to our customers. In the unlikely event you are unhappy with the job, we will redo it to your satisfaction*.</p>
                </Col>
              </Row>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">What does EUSA actually provide?</h2>
                <h5 className="description">
                  E-utility service is an android application in which we aim to provide fast and responsive solutions for customers where they can search for a number of services; Electrician, Plumber, AC Repair, Mechanics, Carpenters. Location of these service providers will be available through map, customers will be able to contact, book and visit (location) the service providers at the tap of a button.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/shehroz.jpeg")}
                    ></img>
                    <h4 className="title">Shehroz Mughal</h4>
                    <p className="category text-info">AI Enginner</p>
                    <p className="description">
                      Build AI models from scratch and help the different components of the organization (such as product managers and stakeholders) understand what results they gain from the model. Build data ingestion and data transformation.{" "}
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site. */}
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => window.location = "https://www.facebook.com/"}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/default.jpg")}
                    ></img>
                    <h4 className="title">Salman Qureshi</h4>
                    <p className="category text-info">Backend Developer</p>
                    <p className="description">
                      Responsible for server-side web application logic and integration of the work front-end developers do. I usually write the web services and APIs used by front-end developers and mobile application developers.{" "}
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site. */}
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => window.location = "https://www.facebook.com/"}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/default.jpg")}
                    ></img>
                    <h4 className="title">Akash Ali</h4>
                    <p className="category text-info">Frontend Developer</p>
                    <p className="description">
                      Responsible for implementing visual elements that users see and interact with in a web application.Supported by back-end web developers,I m  responsible for server-side application logic and web integration{" "}
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site. */}
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => window.location = "https://www.facebook.com/"}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
