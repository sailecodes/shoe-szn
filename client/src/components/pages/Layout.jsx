import { Outlet } from "react-router-dom";
import { useState } from "react";

import LayoutTopNav from "../custom/LayoutTopNav";
import LayoutFooter from "../custom/LayoutFooter";
import LayoutSubscribe from "../custom/LayoutSubscribe";
import LayoutAnnouncement from "../custom/LayoutAnnouncement";

import styled from "styled-components";
const LayoutWrapper = styled.main`
  .dark-bg.visible {
    position: absolute;
    z-index: 98;

    background-color: var(--color-bg);

    width: 100vw;
    height: 100vh;
  }

  .dark-bg.hidden {
    display: none;
  }
`;

const Layout = () => {
  const [isDarkBgVisible, setIsDarkBgVisible] = useState(false);

  return (
    <LayoutWrapper $bodyHasOverflow={!isDarkBgVisible}>
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
