import styled from "styled-components";
import { Outlet } from "react-router-dom";

import LayoutTopNav from "../custom/LayoutTopNav";
import LayoutFooter from "../custom/LayoutFooter";
import LayoutSubscribe from "../custom/LayoutSubscribe";

const LayoutWrapper = styled.section`
  .layout--announcement {
    display: grid;
    place-items: center;

    background-color: var(--color-primary);
    color: var(--color-white);

    height: 5rem;

    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.5px;

    padding: 0 4rem;
  }

  @media (min-width: 530px) {
    .layout--announcement {
      font-size: 1.4rem;
    }
  }
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <section className="layout--announcement">Free shipping for first-time buyers. That&apos;s right, free.</section>
      <LayoutTopNav />
      <Outlet />
      <LayoutSubscribe />
      <LayoutFooter />
    </LayoutWrapper>
  );
};

export default Layout;
