import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProjectCards = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Card className='projectCard'>
              <Card.Body>
                <Card.Title><strong className='purple'>Licensing Application </strong></Card.Title>
                <Card.Text>
                  <ul>
                    <li>Designed and implemented complex UI components such as forms, modals, and grids using Telerik Blazor, ensuring a responsive and user-friendly interface.</li>
                    <li>Utilized data visualization within Telerik Blazor to create dashboards and reports.</li>
                    <li>Performed continuous performance tuning and optimization of the analytics components to handle large volumes of data efficiently.</li>
                  </ul>
                 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='projectCard'>
              <Card.Body>
                <Card.Title><strong className='purple'>Seat Allocation and Management</strong> </Card.Title>
                <Card.Text>	
                  <ul>
                    <li>Analyzed and stabilized demand/supply processes to ensure high seat utilization in the application.</li>
                    <li>Maintained and managed data backups to ensure data integrity and availability.</li>
                    <li>Identified, diagnosed, and resolved production data issues to maintain system reliability.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='projectCard'>
              <Card.Body>
                <Card.Title><strong className='purple'>Email Voice Assistant </strong></Card.Title>
                <Card.Text>
                  <ul>
                    <li>Developed a Chrome extension designed to assist visually impaired users with Gmail operations, leveraging voice assistance to interacte with their Gmail inbox.</li>
                    <li>Enabled functionalities such as reading emails, composing new messages and replying through voice control. </li>
                    <li>Conducted user research to understand the specific needs of visually impaired users.</li>
                  
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectCards;