import { Link, NavLink } from "react-router-dom";
import { CgProfile, CgShoppingCart } from "react-icons/cg";
import _LayoutNavSidebar from "./_LayoutNavSidebar";

const _LayoutNav = () => {
  return (
    <nav className="layout-nav">
      <div>
        <div>
          <Link className="layout-nav--logo" to="/">
            Shoe Szn
          </Link>
          <div className="layout-nav--links">
            <NavLink to="/casual">Casual</NavLink>
            <NavLink to="/streetwear">Streetwear</NavLink>
            <NavLink to="/comfy">Comfy</NavLink>
            <NavLink to="/community-picks">Community Picks</NavLink>
          </div>
        </div>
        <div className="layout-nav--btns">
          <NavLink to="/cart">
            <CgShoppingCart />
          </NavLink>
          <NavLink to="/profile">
            <CgProfile />
          </NavLink>
        </div>
        <_LayoutNavSidebar />
      </div>
    </nav>
  );
};

export default _LayoutNav;
