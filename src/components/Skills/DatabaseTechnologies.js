import React from "react";
import { Col, Row } from "react-bootstrap";

function DatabaseTechnologies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" height={"50px"} alt="MySQL"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" height={"50px"} alt="PostgreSQL"/>
      </Col>
    </Row>
  );
}

export default DatabaseTechnologies;
