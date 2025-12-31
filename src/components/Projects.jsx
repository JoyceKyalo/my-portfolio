import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Weather App",
    description:
      "A weather forecasting app built with React and OpenWeather API.",
    link: "https://effulgent-salmiakki-94337f.netlify.app/",
  },

  {
    title: "Education Gap Analysis Platform",
    description: "A full-stack team project that analyzes relationships between socioeconomic status and educational outcomes across counties. Built with a Flask backend and PostgreSQL database, using parameterized SQL queries to serve data to the frontend.",
    link: "https://github.com/CS257-SoftwareDesign-W25/team-project-bug-busters.git"
  },

  {
    title: "Portfolio Website",
    description:
      "The site you are currently viewing, built with React and Bootstrap!",
    link: "https://joyce-kyalo-portfolio.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index} className="mb-6">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
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
