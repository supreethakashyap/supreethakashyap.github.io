import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import myPic from "../../Assets/myPic.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import ResumeNew from "./ResumeNew";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import CertificationAwards from "../CertificationAwards/CertificationAwards";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col>
              <img
                src={myPic}
                alt="home pic"
                className="img-fluid"
                style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SUPREETHA KASHYAP</strong>
              </h1>

              <div className="home-intro">
                <h6>APPLICATION DEVELOPMENT ANALYST @ ACCENTURE</h6>
                <h6>FULL STACK DEVELOPER</h6>
                <ResumeNew />
                <h1>CONTACT ME</h1>
                <h4>E-MAIL</h4>
                <h5><a href="mailto:supreetharkashyap@gmail.com" className="navLink">supreetharkashyap@gmail.com</a></h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Experience />
      <Projects />
      <CertificationAwards />
    </section>
  );
}

export default Home;
