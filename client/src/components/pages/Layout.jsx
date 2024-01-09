import { Outlet } from "react-router-dom";

import LayoutTopNav from "../custom/LayoutTopNav";
import LayoutFooter from "../custom/LayoutFooter";
import LayoutSubscribe from "../custom/LayoutSubscribe";
import LayoutAnnouncement from "../custom/LayoutAnnouncement";

import styled from "styled-components";
import { useState } from "react";
const LayoutWrapper = styled.main`
  overflow-x: hidden !important;

  .dark-bg.visible {
    position: absolute;
    z-index: 98;

    background-color: var(--color-bg);

    width: 100vw;
    height: 100vh;

    overflow: none;
  }

  .dark-bg.hidden {
    display: none;
  }
`;

const Layout = () => {
  const [isDarkBgVisible, setIsDarkBgVisible] = useState(false);

  return (
    <LayoutWrapper>
      <div className={isDarkBgVisible ? "dark-bg visible" : "dark-bg hidden"}></div>
      <LayoutAnnouncement />
      <LayoutTopNav
        isDarkBgVisible={isDarkBgVisible}
        setIsDarkBgVisible={setIsDarkBgVisible}
      />
      <Outlet />
      <LayoutSubscribe />
      <LayoutFooter />
    </LayoutWrapper>
  );
};

export default Layout;
