import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tumor from "../../Assets/Projects/tumor.png"
import calc from "../../Assets/Projects/calculator.png"
import employee from "../../Assets/Projects/employee.png"
import movement from "../../Assets/Projects/movement.png"
import shop from "../../Assets/Projects/shop.png"
import shoe from "../../Assets/Projects/shoe.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shopify"
              description="E-commerce website to buy products off of an online store with checkout and transactions using stripe."
              ghLink="https://github.com/ACE3E3/ecom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Management System"
              description="Employee Management System using angular and springboot"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculator"
              description="A Simple Calculator made using ReactJS to perform all mathematical operations.(Not Scientific)"
              ghLink="https://github.com/soumyajit4419/Editor.io"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoe}
              isBlog={false}
              title="ShoeMart App"
              description="A Flutter application that makes clients easier to buy footwear from the store. Developed in Flutter and Firebase."
              ghLink="https://github.com/ACE3E3/ShoeApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tumor}
              isBlog={false}
              title="Brain Tumor Detection"
              description="A Deep learning model to detect brain tumors from images using CNN, keras and tensorflow."
              ghLink="https://github.com/ACE3E3/Brain-Tumor-Detection-UsingCNN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movement}
              isBlog={false}
              title="Human Motion Detection"
              description="An AI model to detect human movement using image and video recognition."
              ghLink="https://github.com/ACE3E3/Human-Motion-Detection-UsingTensorflow"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
