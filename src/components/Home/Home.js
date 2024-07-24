import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import myPic from "../../Assets/myPic.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import ResumeNew from "./ResumeNew";
import Footer from "../Footer";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5,textAlign: "center" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{textAlign: "center" }}>
                I'M
                <strong className="main-name" > SUPREETHA KASHYAP</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <h4>APPLICATION DEVELOPMENT ANALYST @ ACCENTURE</h4>
                <h4>FULL STACK DEVELOPER</h4>
                <ResumeNew />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}> 
            <img
              src={myPic}
              alt="home pic"
              className="img-fluid"
              style={{ height: "auto", width: "100%" }}
            />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
export default Home;
