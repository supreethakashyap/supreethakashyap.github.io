import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import LaptopLogo from "../../Assets/LaptopLogo.png";
import CertificationAwardCards from "./CertificationAwardCards";
import Footer from "../Footer";

function CertificationAwards() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <CertificationAwardCards />
      </Container>
      <br/> 
    </Container>
  );
}

export default CertificationAwards;
