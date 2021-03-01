import React from "react";
import { NavLink } from "react-router-dom";
import Projects from "../../containers/projects/Projects";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project_card_container">
      <h3>{props.name}</h3>
      <img src={props.image} />
      <h2>{props.milestone}</h2>
      <i>{props.description}</i>
      <NavLink to={props.link}>
        <button>More</button>
      </NavLink>
    </div>
  );
};

export default ProjectCard;
