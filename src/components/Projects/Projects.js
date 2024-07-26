import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import Footer from "../Footer";

function Projects() {
  return (
    <section>
    <Container fluid className="home-section" id="projects">
      <Particle />
     <Container>
     <h1 style={{color:"white"}}><strong>Projects</strong></h1>
    <ProjectCard />
    </Container >
    <br/><br/><br/>
    </Container> 
    </section>
  );
}

export default Projects;