import React from "react";

function ProjectList(props) {
  const { projects = [] } = props;
  //   const { title, image, deployed, repo } = currentProject;
  return (
    <div>
      <ul className="flex-row space-evenly">
        {projects.map((project) => (
          <div key={project.title} className="flex-row px-1">
            <li key={project.title}>
              <div className="w-50">
                <h3>{project.title}</h3>
                <img
                  src={require(`../../assets/${project.image}`)}
                  width="350"
                  className="img-thumbnail w-50 column is-half"
                  //   src={project.image}
                  alt=""
                  //   key={image.name}
                ></img>
                <br />
                <a
                  href={project.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  deployed application
                </a>
                <br />
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  repo
                </a>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
