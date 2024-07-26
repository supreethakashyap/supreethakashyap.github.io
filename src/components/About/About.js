import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import LaptopLogo from "../../Assets/LaptopLogo.png";

function About() {
  return (
    <Container fluid className="home-section about-section" id="about">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          <Col
            md={7}
            className="d-flex flex-column align-items-center"
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <h1 className="heading">
              Know Who <strong className="purple">I am</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center about-img"
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
            <img src={LaptopLogo} alt="about" className="img-fluid" style={{ height: "350px", marginTop: "-50px" }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
