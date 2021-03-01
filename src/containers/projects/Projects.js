import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects_container">
      <ProjectCard
        name="Program name"
        image="https://thedogtrainingsecret.com/blog/wp-content/uploads/2019/05/AdobeStock_189404361-300x200.jpeg"
        milestone="MLSTN"
        description="Milestone descriptionMilestone descriptionMilestone descriptionMilestone
        description Milestone description"
        link="/projects/project"
      />
      <ProjectCard
        name="Program name"
        image="https://thedogtrainingsecret.com/blog/wp-content/uploads/2019/05/AdobeStock_189404361-300x200.jpeg"
        milestone="MLSTN"
        description="Milestone descriptionMilestone descriptionMilestone descriptionMilestone
        description Milestone description"
        link="/projects/project"
      />
    </div>
  );
};

export default Projects;
