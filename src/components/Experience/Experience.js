import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import Footer from "../Footer";

function About() {
  return (
    <Container fluid className="home-section">
      <Particle />
     <Container>
    <ExperienceCard />
    </Container>
    </Container>


  );
}

export default About;