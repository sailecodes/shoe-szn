import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import { CgWebsite } from "react-icons/cg";

const _LayoutNavSidebar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="layout-nav-sidebar">
      <button className="layout-nav-sidebar--icon" onClick={() => setSidebarActive(!sidebarActive)}>
        <HamburgerMenuIcon />
      </button>
      <div className={`layout-nav-sidebar--overlay ${sidebarActive ? "active" : ""}`}>
        <div className={`layout-nav-sidebar--window ${sidebarActive ? "active" : ""}`}>
          <button className="layout-nav-sidebar--window-back-btn" onClick={() => setSidebarActive(!sidebarActive)}>
            <LeftArrowIcon />
          </button>
          <NavLink to="/" onClick={() => setSidebarActive(false)}>
            Home
          </NavLink>
          <NavLink to="/casual" onClick={() => setSidebarActive(false)}>
            Casual
          </NavLink>
          <NavLink to="/streetwear" onClick={() => setSidebarActive(false)}>
            Streetwear
          </NavLink>
          <NavLink to="/comfy" onClick={() => setSidebarActive(false)}>
            Comfy
          </NavLink>
          <NavLink to="/community-picks" onClick={() => setSidebarActive(false)}>
            Community Picks
          </NavLink>
          <NavLink to="/cart" onClick={() => setSidebarActive(false)}>
            Cart
          </NavLink>
          <NavLink to="/profile" onClick={() => setSidebarActive(false)}>
            Profile
          </NavLink>
          <footer className="layout-nav-sidebar--window-footer">
            <a href="https://github.com/sailecodes" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/elias-iv-roman/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://eliasiv-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
              <CgWebsite />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default _LayoutNavSidebar;
