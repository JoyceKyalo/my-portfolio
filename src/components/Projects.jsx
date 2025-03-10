import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Weather App",
    description: "A weather forecasting app built with React and OpenWeather API.",
    link: "https://your-weather-app-link.com",
  },
  {
    title: "Cybersecurity Blog",
    description: "A blog where I write about my journey in learning penetration testing.",
    link: "https://your-cybersecurity-blog.com",
  },
  {
    title: "Portfolio Website",
    description: "The site you are currently viewing, built with React and Bootstrap!",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
