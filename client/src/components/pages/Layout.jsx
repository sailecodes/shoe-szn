import { Outlet } from "react-router-dom";

import LayoutTopNav from "../custom/LayoutTopNav";
import LayoutFooter from "../custom/LayoutFooter";
import LayoutSubscribe from "../custom/LayoutSubscribe";
import LayoutAnnouncement from "../custom/LayoutAnnouncement";

const Layout = () => {
  return (
    <main>
      <LayoutAnnouncement />
      <LayoutTopNav />
      <Outlet />
      <LayoutSubscribe />
      <LayoutFooter />
    </main>
  );
};

export default Layout;
