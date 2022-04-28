import React from "react";
import { NavLink } from "react-router-dom";

import userRoutes from "./user-routes";

import Icon from "../assets/svg";
import menuIcon from "../assets/svg/menu.svg";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const routes = userRoutes?.slice(0, 3);

  return (
    <div className="navbar_container">
      {window.innerWidth < 991 && (
        <div
          className="sidebar_toggler"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <Icon name="close" />
          ) : (
            <img src={menuIcon} alt="" />
          )}
        </div>
      )}

      <div className="links">
        {routes?.map((link, i) => (
          <NavLink key={i} to={link?.to}>
            {link?.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
