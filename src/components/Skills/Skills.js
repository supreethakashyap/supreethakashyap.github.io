import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Toolstack from "./Toolstack";
import ProgrammingLangauges from "./PgmLang";
import WebTechnologies from "./WebTechnologies";
import DatabaseTechnologies from "./DatabaseTechnologies";
import Footer from "../Footer";

function About() {
    return (
      <Container fluid className="about-section">
        <Particle />
        <Container>
        <h1 className="project-heading">
            Database <strong className="purple">Technologies</strong>
          </h1>
  
          <DatabaseTechnologies/>
          <h1 className="project-heading">
            Programming <strong className="purple">Langauges </strong>
          </h1>
          <ProgrammingLangauges/>

          <h1 className="project-heading">
            Web <strong className="purple">Technologies</strong>
          </h1>
          <WebTechnologies/>
  
          <h1 className="project-heading">
            <strong className="purple"></strong>Softwares
          </h1>
          <Toolstack /> 
        </Container>
      </Container>
    );
  }
  
  export default About;