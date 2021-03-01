import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="project_container">
      <div className="project_banner">
        <img src="https://pawsteams.org/wp-content/uploads/2019/07/service-dogs-for-veterans.jpg" />
        <div className="project_banner_description">
          <h3>The Veterans Programme Test test TestTest</h3>
          <p>
            Some random text which I should test if it is working for more than
            two lines i think it is. should be description detailed. test test
            test test test beautiful
          </p>
        </div>
      </div>
      <hr />
      <div className="project_summary">
        <h2>
          "Some quote which also should be tested for two lines or more
          fdsfasfsdfasdfsd fdasf dsaf dsafsdf sdafsdf asdf dsaf sdafsdfddsa"
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          luctus, dolor in faucibus tincidunt, diam nulla suscipit est, a
          aliquam eros magna quis nulla. Quisque posuere ex a tellus pulvinar
          rhoncus. Proin mattis convallis rhoncus. Nulla eget sagittis ipsum. In
          porta tortor vel neque pellentesque egestas. Donec quis porttitor mi.
          Sed elementum mi ac magna pretium imperdiet.
        </p>
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/LkbC8Tbqb-Q"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          Sed id mollis nunc. Vestibulum ante eros, viverra vitae lectus ut,
          sagittis dictum nisl. Donec a mi nunc. Suspendisse a elementum eros.
          Maecenas pellentesque at nisl at tempor. In in metus nec justo
          efficitur varius vitae in felis. Etiam fringilla mi id nibh accumsan
          sodales. Nulla ut lorem sem. Cras pharetra nisl non felis vestibulum
          sodales. Suspendisse lacinia finibus tincidunt. Nulla pellentesque
          turpis vel venenatis porta. Quisque sodales enim mollis urna
          consequat, ut semper nisl pretium. Nulla a augue a nulla sollicitudin
          blandit. In ullamcorper convallis ante vehicula vehicula. Curabitur
          varius consequat lobortis. Proin sed posuere quam, nec pretium ante.
        </p>
        <p>
          Nunc tellus lacus, vehicula sit amet elementum vitae, pellentesque in
          augue. Nulla accumsan tristique luctus. Nulla eget dui eu elit porta
          dapibus at sed diam. Curabitur congue purus quis ultrices ullamcorper.
          Curabitur efficitur, dui fermentum placerat varius, diam turpis tempus
          sem, in gravida nibh purus ac eros. Nullam justo odio, tincidunt nec
          justo ut, maximus interdum orci. Nullam cursus, erat vitae bibendum
          posuere, velit ante fermentum sem, vestibulum vestibulum lacus felis
          id tortor. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Aliquam sit amet mauris felis.
          Curabitur a augue in metus porta luctus a vitae orci.
        </p>
      </div>
    </div>
  );
};

export default Project;
