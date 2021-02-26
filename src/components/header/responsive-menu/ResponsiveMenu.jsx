import { useState, useEffect } from "react";

import "./drawer.css";
import { NavLink } from "react-router-dom";

export default function ResponsiveMenu({ menu, isDrawerOpen }) {
  const [menuIsOpen, setMenuIsOpen] = useState(isDrawerOpen);

  useEffect(() => {
    setMenuIsOpen(isDrawerOpen);
  }, [isDrawerOpen]);

  const changeDrawerVisibility = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div
      className={`drawer_wrapper ${menuIsOpen ? "open" : "close"}`}
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
                      <li key={sub_index}>
                        <NavLink to={sub_item.link}>{sub_item.name}</NavLink>
                      </li>
                    ))}
                  </div>
                </ul>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
