import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="custom-nav" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand
          href="https://joyce-kyalo-portfolio.netlify.app/"
          className="custom-navbar-brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joyce Kyalo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="custom-nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="custom-nav-link">
              Projects
            </Nav.Link>
            <Nav.Link href="#skills" className="custom-nav-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#contact" className="custom-nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
