import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agric_robot from "../../Assets/Projects/robot.png";
import eco_connect from "../../Assets/Projects/eco-connect.png";
import glorious_ff from "../../Assets/Projects/glorious-ff.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eco_connect}
              isBlog={false}
              title="Eco-Connect"
              description="Eco-Connect is a web app that connects individuals and organizations working on environmental conservation projects. Built with JavaScript, Node.js, Express.js, and MongoDB, it enables users to create, share, and collaborate on sustainability initiatives."
              ghLink="https://github.com/alfred-moyo/Eco-Connect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glorious_ff}
              isBlog={false}
              title="Glorious Future Foundation"
              description="Glorious Future Foundation, a Christian charity in Uganda, supports children nationwide by providing essential resources, education, and care. As a volunteer, I partnered with a friend to develop a website using JavaScript, HTML, and CSS, applying skills in responsive design, front-end development, and user experience to enhance the organization's outreach efforts."
              demoLink="https://glorious-futurefoundation.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agric_robot}
              isBlog={true}
              title="RIG-ALPHA"
              description="Rig-Alpha tackles early plant disease detection and precise soil moisture measurement to optimize agriculture. Using computer vision (OpenCV) , it identifies and classifies plant diseases through a camera system powered by a Raspberry Pi and Arduino."
              blogLink="https://docs.google.com/document/d/12-lk0BZZry3LeMO1m_3VIA70UxiTLDmHrA6VIodSXYM/edit?usp=sharing"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
