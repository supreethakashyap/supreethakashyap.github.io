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
                  Primarily responsible for developing web applications including a supply chain management tool using Blazor and a seat management system with Angular.
                  Utilized analytics to track and understand user usage patterns, data visualization within Blazor to create dashboards and reports.
                  Collaborated with designers to create user-centric interfaces, deployed applications to cloud-based environments, and integrated with APIs.
                </li>
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
                  Responsible for creating and fixing interface usability issues, developing automated tests, and working with developers to review test cases.
                </li>
                <br />
                <li className="exp-body">
                  Documented test plans and test scripts, input data, actual data and expected data for integration testing.
                </li>
                <br />
                <li className="exp-body">
                  Presented client demos of the application's new features.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ExperienceCards;
