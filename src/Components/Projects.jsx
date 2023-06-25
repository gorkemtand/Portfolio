import React from "react";
import projects from "../projects";
import Card from "./Card";

function createCard(project) {
    return (
      <Card
        key={project.id}
        name={project.name}
        img={project.imageUrl}
        description={project.description}
        codeLink={project.codeLink}
        liveLink={project.liveLink}
      />
    );
  }

function Projects(){
    return (
    <div>
    <h1 className="projectHeadline">PROJECTS</h1>
    <div className="projects">
    {projects.map(createCard)}
    </div>
    </div>
    );

}

export default Projects;