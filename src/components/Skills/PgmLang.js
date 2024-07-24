import React from "react";
import { Col, Row } from "react-bootstrap";

function ProgrammingLangauges() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/C++-4479A1?style=for-the-badge&logo=CPlusPlus&logoColor=white" height={"50px"} alt="c++"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" height={"50px"} alt="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" height={"50px"} alt="Java"/>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/OpenGL-5586A4?style=for-the-badge&logo=opengl&logoColor=white" height={"50px"} alt="OpenGL"/>
      </Col>  */}
    </Row>
  );
}

export default ProgrammingLangauges;
