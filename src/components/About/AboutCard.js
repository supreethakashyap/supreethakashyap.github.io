import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My goal is to apply data-driven decision-making and advanced analytical techniques
            to drive business growth and optimize processes. 
            I'm also a developer with experience in database management and application development. 
            Currently pursuing a master's in <strong className="purple">Computer Science</strong> with a focus on database systems and analytics.
            <br />
            Additionally, I'm an <strong className="purple">AWS Certified Cloud Practitioner.</strong>
            <br />
            I am a quick learner and collaborative team player with a strong work ethic.
            <br />
            <br />
            Apart from coding, other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
