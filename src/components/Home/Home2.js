import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* <Col className="home-about-social">
            <h1>CONTACT ME</h1>
            <h4>E-MAIL</h4>
            <h5><a href="mailto:supreetha.kashyap15@gmail.com" className="navLink">supreetha.kashyap15@gmail.com</a></h5>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
