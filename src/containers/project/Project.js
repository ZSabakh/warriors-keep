import React from "react";
import "./Project.css";

let projectContent;

projectContent = {
  name: "The Veterans Programme Test test TestTest",
  image:
    "https://pawsteams.org/wp-content/uploads/2019/07/service-dogs-for-veterans.jpg",
  subtext:
    "Some random text which I should test if it is working for more than two lines i think it is. should be description detailed. test test test test test beautiful",
  quote:
    '"Some quote which also should be tested for two lines or morefdsfasfsdfasdfsd fdasf dsaf dsafsdf sdafsdf asdf dsaf sdafsdfddsa"',
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus, dolor in faucibus tincidunt, diam nulla suscipit est, aaliquam eros magna quis nulla. Quisque posuere ex a tellus pulvinarrhoncus. Proin mattis convallis rhoncus. Nulla eget sagittis ipsum. In      porta tortor vel neque pellentesque egestas. Donec quis porttitor mi.Sed elementum mi ac magna pretium imperdiet.",
    "Sed id mollis nunc. Vestibulum ante eros, viverra vitae lectus ut,sagittis dictum nisl. Donec a mi nunc. Suspendisse a elementum eros.Maecenas pellentesque at nisl at tempor. In in metus nec justoefficitur varius vitae in felis. Etiam fringilla mi id nibh accumsansodales. Nulla ut lorem sem. Cras pharetra nisl non felis vestibulumsodales. Suspendisse lacinia finibus tincidunt. Nulla pellentesqueturpis vel venenatis porta. Quisque sodales enim mollis urnaconsequat, ut semper nisl pretium. Nulla a augue a nulla sollicitudinblandit. In ullamcorper convallis ante vehicula vehicula. Curabiturvarius consequat lobortis. Proin sed posuere quam, nec pretium ante.",
    "Nunc tellus lacus, vehicula sit amet elementum vitae, pellentesque inaugue. Nulla accumsan tristique luctus. Nulla eget dui eu elit portadapibus at sed diam. Curabitur congue purus quis ultrices ullamcorper.Curabitur efficitur, dui fermentum placerat varius, diam turpis tempussem, in gravida nibh purus ac eros. Nullam justo odio, tincidunt necjusto ut, maximus interdum orci. Nullam cursus, erat vitae bibendumposuere, velit ante fermentum sem, vestibulum vestibulum lacus felisid tortor. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae; Aliquam sit amet mauris felis.Curabitur a augue in metus porta luctus a vitae orci.",
  ],
};

const Project = (props) => {
  console.log(props.match.params.id);
  return (
    <div className="project_container">
      <div className="project_banner">
        <img src={projectContent.image} />
        <div className="project_banner_description">
          <h3>{projectContent.name}</h3>
          <p>{projectContent.subtext}</p>
        </div>
      </div>
      <hr />
      <div className="project_summary">
        <h2></h2>
        <p>{projectContent.paragraphs[0]}</p>
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/LkbC8Tbqb-Q"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>{projectContent.paragraphs[1]}</p>
        <p>{projectContent.paragraphs[2]}</p>
      </div>
    </div>
  );
};

export default Project;
