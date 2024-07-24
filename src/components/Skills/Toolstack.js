import React from "react";
import { Col, Row } from "react-bootstrap";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" height={"50px"} alt="Visual Studio Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91?style=for-the-badge&logo=visual-studio&logoColor=white" height={"50px"} alt="Visual Studio"/>
      </Col>
          <Col xs={4} md={2} className="tech-icons">
          <img src ="https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white" height={"50px"} alt="Microsoft Office"/>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white" height={"50px"} alt="Eclipse"/>
      </Col> 
       <Col xs={4} md={2} className="tech-icons">
        <img src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" height={"50px"} alt="Microsoft SQL Server"/>
      </Col> 
    </Row>
  );
}

export default Toolstack;
