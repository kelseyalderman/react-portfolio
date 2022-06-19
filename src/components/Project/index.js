import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project label" key={name}>
      <img
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {removeHyphensAndCapitalize(name)}
          </a>{" "}
          <a target="_blank" rel="noopener noreferrer" href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
