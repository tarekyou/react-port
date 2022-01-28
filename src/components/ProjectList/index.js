import React from "react";

function ProjectList(props) {
  const { projects = [] } = props;
  //   const { title, image, deployed, repo } = currentProject;
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h3>{project.title}</h3>
            <img
              src={require(`../../assets/${project.image}`)}
              //   src={project.image}
              //   alt={image.name}
              //   key={image.name}
            ></img>
            <a href={project.deployed} target="_blank">
              {" "}
              deployed application
            </a>
            <a href={project.repo} target="_blank">
              repo
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
