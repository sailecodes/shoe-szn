import { Outlet } from "react-router-dom";

import LayoutTopNav from "../custom/LayoutTopNav";
import LayoutFooter from "../custom/LayoutFooter";
import LayoutSubscribe from "../custom/LayoutSubscribe";
import LayoutAnnouncement from "../custom/LayoutAnnouncement";

import styled from "styled-components";
const LayoutWrapper = styled.main`
  overflow-x: hidden;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <LayoutAnnouncement />
      <LayoutTopNav />
      <Outlet />
      <LayoutSubscribe />
      <LayoutFooter />
    </LayoutWrapper>
  );
};

export default Layout;
