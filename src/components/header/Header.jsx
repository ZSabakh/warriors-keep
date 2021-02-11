import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  const menu = [
    {
      name: "Home",
      link: "/",
      sub: {},
    },
    {
      name: "projects ",
      link: "/projects",
      sub: [
        {
          name: "hand for help",
          link: "/projects/hand4help",
        },
        {
          name: "parking place",
          link: "/projects/parking",
        },
      ],
    },
    {
      name: "Service",
      link: "/service",
    },
  ];

  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="text-center text-lg-right col-lg-6">
              <ul>
                <li>it</li>
                <li>fb</li>
                <li>lt</li>
              </ul>
            </div>
            <div className="text-center text-lg-right col-lg-6">
              <ul>
                <li>dasdkoas</li>
                <li>dasdsasa</li>
                <li>dasd897asda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="logo_container container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.helpforheroes.org.uk/content/images/h4h-logo-stacked.svg"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <nav>
        <div className="container">
          <ul className="d-flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
              <ul>
                <li>
                  <Link to="/projects/hand4help">hand for help</Link>
                </li>
                <li>
                  <Link to="/projects/parking">parking place</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/services">services</Link>
            </li>
            <li>
              <a href="">Non sence</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
