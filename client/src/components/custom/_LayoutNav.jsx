import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import CategoriesIcon from "./icons/CategoriesIcon";
import LeftArrowIcon from "./icons/LeftArrowIcon";

const _LayoutNav = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <nav className="layout-nav">
      <Link className="layout-nav--logo" to="/">
        Shoe Szn
      </Link>
      <div className="layout-nav--links">
        <NavLink to="/casual">Casual</NavLink>
        <NavLink to="/streetwear">Streetwear</NavLink>
        <NavLink to="/comfy">Comfy</NavLink>
        <NavLink to="/community-picks">Community Picks</NavLink>
      </div>
      <div className="layout-nav--sidebar-container">
        <button className="layout-nav--hamburger-menu" onClick={() => setSidebarActive(!sidebarActive)}>
          <CategoriesIcon stroke="green" />
        </button>
        <div className={`layout-nav--sidebar-overlay ${sidebarActive ? "active" : ""}`}>
          <div className={`layout-nav--sidebar ${sidebarActive ? "active" : ""}`}>
            <button className="layout-nav--sidebar-back-btn" onClick={() => setSidebarActive(!sidebarActive)}>
              <LeftArrowIcon stroke="green" />
            </button>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/casual">Casual</NavLink>
            <NavLink to="/streetwear">Streetwear</NavLink>
            <NavLink to="/comfy">Comfy</NavLink>
            <NavLink to="/community-picks">Community Picks</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <footer className="layout-nav--sidebar-footer">
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
    </nav>
  );
};

export default _LayoutNav;
