import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CourseraCert from "../../Assets/Coursera.png";
import AwsCert from "../../Assets/AwsCertificate.png";
import GrowthCert from "../../Assets/GrowthCatalyst.png";
import AceCert from "../../Assets/ACE.png";

const CertificationAwardCards = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1><strong>Awards</strong></h1>
                    <Row>
                        <Col xs={12} md={6} className="mb-4">
                            <Card className="certificate-card">
                                <Card.Img variant="top" src={GrowthCert} />
                                <Card.Body className="certificate-body">
                                    <Card.Title><strong className="main-name">GROWTH CATALYST AWARD</strong></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} className="mb-4">
                            <Card className="certificate-card">
                                <Card.Img variant="top" src={AceCert} />
                                <Card.Body className="certificate-body">
                                    <Card.Title><strong className="main-name">ACCENTURE CELEBRATES EXCELLENCE AWARD</strong></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1><strong>Certifications</strong></h1>
                    <Row>
                        <Col xs={12} md={6} className="mb-4">
                            <Card className="certificate-card">
                                <Card.Img className="certificate-img" variant="top" src={AwsCert} />
                                <Card.Body className="certificate-body">
                                    <Card.Title><strong className="main-name">AWS CERTIFIED CLOUD PRACTITIONER</strong></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} className="mb-4">
                            <Card className="certificate-card">
                                <Card.Img className="certificate-img" variant="top" src={CourseraCert} />
                                <Card.Body className="certificate-body">
                                    <Card.Title><strong className="main-name">APPLIED DATA SCIENCE WITH PYTHON</strong></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default CertificationAwardCards;
