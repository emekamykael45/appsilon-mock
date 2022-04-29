import React from "react";
import { NavLink } from "react-router-dom";

import Button from "./button";

import userRoutes from "./user-routes";

import Icon from "../assets/svg";
import Logo from "../assets/img/logo-icon.png";
import UserImage from "../assets/img/user-image.png";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleSidebarToggle = () => {
    if (window.innerWidth < 840) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <div className={`sidebar_container${isSidebarOpen ? " open" : ""}`}>
      <div className="top_section">
        <div className="logo_container">
          <img src={Logo} alt="Logo" />
          <p>Insurance Portal</p>
        </div>

        <div className="signed_in_user_container">
          <img src={UserImage} alt="User img" />
          <h5>Hello! Rusalba Ruiz</h5>
          <p>Welcome Back To Your Insurance Portal</p>
          <h6>
            Your Plan : <span>Free</span>
          </h6>

          <Button
            text={
              <>
                Create New Plan<span>+</span>
              </>
            }
          />
        </div>

        <div className="links_container">
          {userRoutes?.map((link, i) => (
            <NavLink
              key={i}
              className="link"
              to={link?.to}
              onClick={handleSidebarToggle}
            >
              <Icon name={link?.icon} />
              {link?.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="logout" onClick={handleSidebarToggle}>
        <Icon name="logout" />
        Log Out
      </div>
    </div>
  );
};

export default Sidebar;
