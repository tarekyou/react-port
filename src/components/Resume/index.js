import React from "react";

function Resume() {
  return (
    <section>
      <h1>My Resume</h1>
      <a href={require("../../assets/resume.pdf")} download>
        <h4>Download resume</h4>
      </a>
      <h5>Proficiencies</h5>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>API</li>
        <li>React</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Node</li>
      </ol>
    </section>
  );
}

export default Resume;
