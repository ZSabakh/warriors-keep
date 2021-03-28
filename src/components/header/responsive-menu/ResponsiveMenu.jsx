import { useState, useEffect } from "react";

import "./drawer.css";
import { NavLink } from "react-router-dom";

export default function ResponsiveMenu({ menu, isDrawerOpen, showDrawer }) {
  const changeDrawerVisibility = () => {
    showDrawer(!isDrawerOpen);
  };

  return (
    <div
      className={`drawer_wrapper ${isDrawerOpen ? "open" : "close"}`}
      onClick={changeDrawerVisibility}
    >
      <nav>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink activeClassName="active" exact to={item.link}>
                {item.name}
              </NavLink>
              {item.sub.length != 0 ? (
                <ul>
                  <div>
                    {item.sub.map((sub_item, sub_index) => (
                      <NavLink to={sub_item.link}>
                        <li key={sub_index}>{sub_item.name}</li>
                      </NavLink>
                    ))}
                  </div>
                </ul>
              ) : (
                ""
              )}
            </li>
          ))}
          <li className="drawer_donate">
            <a href="https://google.com">Donate</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
