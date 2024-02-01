import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import ProfileIcon from "../custom/icons/ProfileIcon";
import CartIcon from "../custom/icons/CartIcon";
import CategoriesIcon from "../custom/icons/CategoriesIcon";

import styled from "styled-components";
import LeftArrowIcon from "./icons/LeftArrowIcon";

const LayoutTopNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 97;

  background-color: var(--color-white);
  color: var(--color-primary);

  height: 10rem;

  padding: 0 2rem;
  border-bottom: 1px solid var(--color-border);

  .layout-top-nav--logo {
    position: relative;

    display: flex;
    flex-direction: column;

    color: var(--color-primary);

    width: 22rem;

    font-family: "Rubik Glitch", system-ui;
    font-size: 3.8rem;
  }

  .layout-top-nav--category-links {
    display: none;
  }

  .layout-top-nav--user-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.8rem;
  }

  .layout-top-nav--user-links a {
    display: none;
  }

  .layout-top-nav--user-links button {
    display: grid;
    place-items: center;
  }

  .layout-top-nav--user-links svg {
    width: 3rem;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 530px) {
    .layout-top-nav--logo {
      font-size: var(--font-text-8);
    }

    .layout-top-nav--link {
      font-size: 1.6rem;
      font-weight: 500;
    }

    .layout-top-nav--user-links {
      width: 22rem;
    }

    .layout-top-nav--user-links a {
      display: grid;
      place-items: center;
    }
  }

  @media (min-width: 1000px) {
    .layout-top-nav--category-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .layout-top-nav--category-links a:hover,
    .layout-top-nav--category-links a.active {
      text-decoration: underline;
    }

    .layout-top-nav--user-links button {
      display: none;
    }
  }
`;

const LayoutTopNav = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const data = [
    {
      name: "Casual",
      linkName: "casual",
    },
    {
      name: "Streetwear",
      linkName: "streetwear",
    },
    {
      name: "Comfy",
      linkName: "comfy",
    },
    {
      name: "Community Picks",
      linkName: "community-picks",
    },
    {
      name: "Profile",
      linkName: "Profile",
    },
    {
      name: "Cart",
      linkName: "cart",
    },
  ];

  return (
    <LayoutTopNavWrapper>
      <Link
        to="/"
        className="layout-top-nav--logo">
        Shoe Szn
      </Link>
      <div className="layout-top-nav--category-links">
        <NavLink
          to="/casual"
          className="layout-top-nav--link">
          Casual
        </NavLink>
        <NavLink
          to="/streetwear"
          className="layout-top-nav--link">
          Streetwear
        </NavLink>
        <NavLink
          to="/comfy"
          className="layout-top-nav--link">
          Comfy
        </NavLink>
        <NavLink
          to="/community-picks"
          className="layout-top-nav--link">
          Community Picks
        </NavLink>
      </div>
      <div className="layout-top-nav--user-links">
        <NavLink to="/profile">
          <ProfileIcon stroke={"var(--color-primary)"} />
        </NavLink>
        <NavLink to="/cart">
          <CartIcon stroke={"var(--color-primary)"} />
        </NavLink>
        <button
          onClick={() => {
            setIsSidebarVisible(!isSidebarVisible);
          }}>
          <CategoriesIcon stroke={"var(--color-primary)"} />
        </button>
      </div>
      <Sidebar
        linksInfo={data}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </LayoutTopNavWrapper>
  );
};

const SidebarWrapper = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;

    background-color: var(--color-sidebar-overlay);

    opacity: 0;
  }

  &.visible {
    right: 0;
    bottom: 0;

    opacity: 1;
  }

  nav {
    display: ${(props) => (props.isSidebarVisible ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;

    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;

    background-color: var(--color-white);

    height: 100vh;

    font-size: 1.8rem;

    padding: 4rem 2rem 2rem 15rem;
  }

  nav button {
    display: grid;
    place-items: center;

    position: relative;
    left: 4.5%;
  }

  nav svg {
    width: 3rem;

    margin-bottom: 3rem;
  }

  nav a:hover {
    text-decoration: underline;
  }

  nav a.active {
    text-decoration: underline;
  }

  @media (min-width: 530px) {
    a:nth-child(5),
    a:nth-child(6) {
      display: none;
    }
  }
`;

const Sidebar = ({ linksInfo, isSidebarVisible, setIsSidebarVisible }) => {
  if (isSidebarVisible) document.body.classList.add("no-scroll");
  else document.body.classList.remove("no-scroll");

  return (
    <SidebarWrapper
      className={isSidebarVisible ? "visible" : ""}
      isSidebarVisible={isSidebarVisible}>
      <nav>
        <button
          onClick={() => {
            setIsSidebarVisible(!isSidebarVisible);
          }}>
          <LeftArrowIcon fill={"var(--color-primary)"} />
        </button>
        {linksInfo.map((linkInfo) => (
          <NavLink
            key={"sidebar-" + linkInfo.name}
            to={linkInfo.linkName}
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
            {linkInfo.name}
          </NavLink>
        ))}
      </nav>
    </SidebarWrapper>
  );
};

export default LayoutTopNav;
