import { useState } from "react";

import "./Header.css";

import { Link, NavLink } from "react-router-dom";
import ResponsiveMenu from "./responsive-menu/ResponsiveMenu.jsx";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const menu = [
    {
      name: "Home",
      link: "/",
      sub: [],
    },
    {
      name: "projects",
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
      name: "Resources",
      link: "/resources",
      sub: [],
    },
    {
      name: "Contact",
      link: "/contact",
      sub: [],
    },
  ];

  return (
    <div>
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
                  <li>Address sample string</li>
                  <li>(+1) 995 555 555 555</li>
                  <li>mail@sampledomain.org</li>
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
            <div
              // src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png"
              className="drawer_opener_icon"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            ></div>
            <ul className="d-flex">
              {menu.map((item, index) => (
                <li key={index}>
                  <NavLink activeClassName="active" exact to={item.link}>
                    {item.name}
                  </NavLink>
                  {item.sub.length != 0 ? (
                    <ul>
                      <div className="container sub-menu justify-content-start">
                        {item.sub.map((sub_item, sub_index) => (
                          <li key={sub_index}>
                            <NavLink to={sub_item.link}>
                              {sub_item.name}
                            </NavLink>
                          </li>
                        ))}
                      </div>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              ))}
              <li className="donate_item">
                <a href="https://google.com/">Donate</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <ResponsiveMenu
        menu={menu}
        isDrawerOpen={isDrawerOpen}
        showDrawer={(cb) => {
          setIsDrawerOpen(cb);
        }}
      />
    </div>
  );
}
