import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1>Hi, I'm JK 👩🏾‍💻</h1>
            <p className="lead">
              I'm a passionate web developer with a strong interest in front-end
              development and cybersecurity.
            </p>
            <a href="#projects">
              View My Work
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
