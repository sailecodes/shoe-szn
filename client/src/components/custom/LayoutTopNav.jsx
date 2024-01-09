import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import ProfileIcon from "../custom/icons/ProfileIcon";
import CartIcon from "../custom/icons/CartIcon";
import CategoriesIcon from "../custom/icons/CategoriesIcon";

import styled from "styled-components";

const LayoutTopNavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  color: var(--color-primary);

  height: 10rem;

  font-size: var(--font-text-3);
  font-weight: 500;

  padding: 0 2rem;

  .layout-top-nav--logo {
    position: relative;

    display: flex;
    flex-direction: column;

    color: var(--color-primary);

    width: 22rem;

    font-family: "Rubik Glitch", system-ui;
    font-size: 3.8rem;
  }

  .layout-top-nav--links {
    display: none;
  }

  .layout-top-nav--other {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.8rem;
  }

  .layout-top-nav--other a {
    display: none;
  }

  .layout-top-nav--other button {
    display: grid;
    place-items: center;
  }

  .layout-top-nav--other svg {
    width: 3rem;
  }

  .layout-top-nav--menu {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    position: absolute;
    z-index: 99;
    top: 100%;
    right: 0;

    background-color: var(--color-white);

    height: 100vh;

    font-size: 1.8rem;
    text-align: right;

    padding: 2rem 2.5rem 2rem 15rem;
  }

  .layout-top-nav--menu.hidden {
    display: none;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 530px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    color: var(--color-primary);

    height: 10rem;

    font-size: var(--font-text-3);
    font-weight: 500;

    padding: 0 var(--padding-side);

    .layout-top-nav--logo {
      position: relative;

      display: flex;
      flex-direction: column;

      color: var(--color-primary);

      width: 22rem;

      font-family: "Rubik Glitch", system-ui;
      font-size: var(--font-text-8);
    }

    .layout-top-nav--links {
      display: none;
    }

    .layout-top-nav--other {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.8rem;

      width: 22rem;
    }

    .layout-top-nav--other a {
      display: grid;
      place-items: center;
    }

    .layout-top-nav--other svg {
      width: 3rem;
    }

    .layout-top-nav--menu {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      position: absolute;
      z-index: 99;
      top: 100%;
      right: 0;

      background-color: var(--color-white);

      height: 100vh;

      font-size: 1.8rem;
      text-align: right;

      padding: 2rem 2.5rem 2rem 15rem;
    }

    .layout-top-nav--menu.hidden {
      display: none;
    }

    .layout-top-nav--menu a:nth-child(5),
    .layout-top-nav--menu a:nth-child(6) {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    .layout-top-nav--links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .link-underline {
      background-color: var(--color-primary);

      height: 1px;
      width: 0;

      transition: width 0.3s;
    }

    .layout-top-nav--link:hover .link-underline {
      width: 100%;
    }

    .layout-top-nav--other button {
      display: none;
    }
  }
`;

const LayoutTopNav = ({ isDarkBgVisible, setIsDarkBgVisible }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <LayoutTopNavWrapper>
      <Link
        to="/"
        className="layout-top-nav--logo">
        Shoe Szn
      </Link>
      <div className="layout-top-nav--links">
        <NavLink className="layout-top-nav--link">
          Casual <div className="link-underline"></div>
        </NavLink>
        <NavLink className="layout-top-nav--link">
          Streetwear <div className="link-underline"></div>
        </NavLink>
        <NavLink className="layout-top-nav--link">
          Comfy <div className="link-underline"></div>
        </NavLink>
        <NavLink className="layout-top-nav--link">
          Community Picks <div className="link-underline"></div>
        </NavLink>
      </div>
      <div className="layout-top-nav--other">
        <NavLink>
          <ProfileIcon stroke={"var(--color-primary)"} />
        </NavLink>
        <NavLink>
          <CartIcon stroke={"var(--color-primary)"} />
        </NavLink>
        <button
          onClick={() => {
            setIsMenuOpened(!isMenuOpened);
            setIsDarkBgVisible(!isDarkBgVisible);
          }}>
          <CategoriesIcon stroke={"var(--color-primary)"} />
        </button>
      </div>
      <nav className={isMenuOpened ? "layout-top-nav--menu visible" : "layout-top-nav--menu hidden"}>
        <NavLink>Casual</NavLink>
        <NavLink>Streetwear</NavLink>
        <NavLink>Comfy</NavLink>
        <NavLink>Community Picks</NavLink>
        <NavLink>Cart</NavLink>
        <NavLink>Profile</NavLink>
      </nav>
    </LayoutTopNavWrapper>
  );
};

export default LayoutTopNav;
