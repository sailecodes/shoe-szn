import { Link, NavLink } from "react-router-dom";
import HeartIcon from "../custom/icons/HeartIcon";
import ProfileIcon from "../custom/icons/ProfileIcon";
import CartIcon from "../custom/icons/CartIcon";

import styled from "styled-components";
const LayoutTopNavWrapper = styled.nav`
  color: var(--color-primary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10rem;

  font-size: var(--font-text-lg);
  font-weight: 500;

  padding: 0 var(--padding-side);

  .layout-top-nav--logo {
    position: relative;

    display: flex;
    flex-direction: column;

    color: var(--color-primary);

    width: 22rem;

    font-family: "Rubik Glitch", system-ui;
    font-size: var(--font-logo-lg);
  }

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

  .layout-top-nav--other {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.8rem;

    width: 22rem;
  }

  .layout-top-nav--other svg {
    width: 3rem;
  }
`;

const LayoutTopNav = () => {
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
          <HeartIcon stroke={"var(--color-primary)"} />
        </NavLink>
        <NavLink>
          <ProfileIcon stroke={"var(--color-primary)"} />
        </NavLink>
        <NavLink>
          <CartIcon stroke={"var(--color-primary)"} />
        </NavLink>
      </div>
    </LayoutTopNavWrapper>
  );
};

export default LayoutTopNav;
