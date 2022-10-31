import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zaid Budihal </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I am a Software Engineer pursuing to advance my career and master my
            development and programming skills as I move further.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Fond of artistry
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "For the things we have to learn before we can do them, we learn by doing them "{" "}
          </p>
          <footer className="blockquote-footer">Aristotle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
