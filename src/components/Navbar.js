import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logos from "../Assets/Logos.png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiFillTrophy,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={Logos} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home" className="navLink" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "6px", color: "white" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#about" className="navLink" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "6px", color: "white" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#experience" className="navLink" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "6px", color: "white" }} /> Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#projects" className="navLink" onClick={() => updateExpanded(false)}>
                <ImBlog style={{ marginBottom: "6px", color: "white" }} /> Projects
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link href="#certificationAwards" className="navLink" onClick={() => updateExpanded(false)}>
                <AiFillTrophy style={{ marginBottom: "6px", color: "white" }} /> Awards & Certifications
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
