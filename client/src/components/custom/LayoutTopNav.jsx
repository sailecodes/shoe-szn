import { NavLink } from "react-router-dom";
import HeartIcon from "../custom/icons/HeartIcon";
import ProfileIcon from "../custom/icons/ProfileIcon";
import CartIcon from "../custom/icons/CartIcon";

import styled from "styled-components";
const LayoutTopNavWrapper = styled.nav`
  /* background-color: lightblue; */
  color: var(--color-primary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10rem;

  font-size: var(--font-text-lg);
  font-weight: 500;

  padding: 0 4rem;

  .layout-top-nav--logo {
    position: relative;

    display: flex;
    flex-direction: column;

    font-size: var(--font-logo-lg);
    font-weight: 600;
    letter-spacing: -2px;
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
    gap: 1.8rem;
  }

  .layout-top-nav--other svg {
    width: 3rem;
  }
`;

const LayoutTopNav = () => {
  return (
    <LayoutTopNavWrapper>
      <p className="layout-top-nav--logo">Shoe Szn</p>
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
