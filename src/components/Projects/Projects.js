import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import Footer from "../Footer";

function Projects() {
  return (
    <Container fluid className="project-section">
      <h1 style={{color:"white"}}><strong>Projects</strong></h1>
      <Particle />
     <Container>
    <ProjectCard />
    </Container >
    <br/><br/><br/><br/><br/><br/><br/><br/>
    </Container> 
  );
}

export default Projects;