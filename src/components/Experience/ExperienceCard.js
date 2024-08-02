import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ExperienceCards(props) {
  return (
    <Container id="experience">
      <h1>
        <strong className="purple">Work Experience</strong>
      </h1>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <Card className="expCard quote-card-view">
            <Card.Body>
              <h2 className="card-title">Application Development Analyst</h2>
              <p className="exp-body">Accenture Solutions Pvt Ltd (Sept 2021 - Present)</p>
              <ul>
                <li className="exp-body">
                  Primarily responsible for developing web applications including a supply chain management tool using Blazor and a seat management system with Angular.</li>
                <li className="exp-body">Designed and maintained databases to support application functionality, ensuring data integrity.</li>
                 <li className="exp-body">Utilized analytics to track and understand user usage patterns, , and employed data visualization in Blazor to develop comprehensive dashboards and reports.</li>
                 <li className="exp-body">Worked with designers to develop user-centric interfaces, deployed applications to cloud-based environments, and integrated various APIs.</li>
                <br/>
                <li className="exp-body">
                  <b>Awards:</b>
                  <h5><p className="purple"><b>Growth Catalyst Award</b></p></h5>
                  <h5><p className="purple"><b>Accenture Celebrates Excellence</b></p></h5>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Card className="expCard quote-card-view">
            <Card.Body>
              <h2 className="card-title">Quality Assurance Intern</h2>
              <p className="exp-body">CognitiveClouds Software Pvt Ltd (Sep 2020 - Dec 2020)</p>
              <ul>
                <li className="exp-body">
                  Responsible for addressing interface usability issues and collaborating with developers to review and refine test cases.
                </li>
                <li className="exp-body"> Developed automated tests to review test cases.</li>
                <li className="exp-body">
                  Documented test plans and test scripts and Presented client demos of the application's new features.
                </li>
                <br />
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ExperienceCards;
