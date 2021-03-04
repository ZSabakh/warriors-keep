import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./Projects.css";

const ProjectList = [
  {
    name: "Program name",
    image:
      "https://thedogtrainingsecret.com/blog/wp-content/uploads/2019/05/AdobeStock_189404361-300x200.jpeg",
    milestone: "MLSTN",
    description:
      "Milestone descriptionMilestone descriptionMilestone descriptionMilestone description Milestone description",
    link: "/projects/project",
  },
  {
    name: "Program name",
    image:
      "https://thedogtrainingsecret.com/blog/wp-content/uploads/2019/05/AdobeStock_189404361-300x200.jpeg",
    milestone: "MLSTN",
    description:
      "Milestone descriptionMilestone descriptionMilestone descriptionMilestone description Milestone description",
    link: "/projects/project",
  },
];

const Projects = () => {
  return (
    <div className="projects_container">
      {ProjectList.map((project, index) => {
        return (
          <ProjectCard
            name={project.name}
            image={project.image}
            milestone={project.milestone}
            description={project.description}
            link={project.link}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Projects;
