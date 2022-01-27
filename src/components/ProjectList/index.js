import React, { useState } from "react";

function ProjectList(props) {
  const { projects = [], title, image, deployed, repo } = props;
  //   const projects = [];
  //   const currentProject = useState(props)[0].projects;
  //   const { title, image, deployed, repo } = currentProject;
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h3>{title}</h3>
            <img src={image}></img>
            <a href={deployed}> deployed application</a>
            <a href={repo}>repo</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
