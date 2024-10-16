import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alfred MOYO</span>.
            <br />
            I am currently a <span className="purple">final year</span> student at Middlesex University Mauritius.
            <br />
            I am studying a <span className="purple">Bsc Computer Science (Systems Engineering)</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> ⛳Playing Golf & Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> ✈️Aviation
            </li>
            <li className="about-activity">
              <ImPointRight /> 📺Watching Documentries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Each of us can make a difference. Together we make change."{" "}
          </p>
          <footer className="blockquote-footer">Barbara Mikulski</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
