import React from "react";
import { Col, Row } from "react-bootstrap";

function WebTechnologies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height={"50px"} alt="html"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height={"50px"} alt="css"/>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" height={"50px"} alt="Boostrap"/>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" height={"50px"} alt="Angular"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Blazor-512BD4?style=for-the-badge&logo=blazor&logoColor=white" height={"50px"} alt="Blazor"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height={"50px"} alt="Node.js"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" height={"50px"} alt="React"/>
      </Col>
    </Row>
  );
}

export default WebTechnologies;
