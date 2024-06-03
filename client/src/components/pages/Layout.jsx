import { Outlet } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import LayoutNav from "../custom/LayoutNav";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Layout = () => {
  return (
    <main className="layout">
      <LoginPopup />
      <section className="layout--announcement">Free shipping for first-time buyers.</section>
      <LayoutNav />
      <Outlet />
      <section className="layout--subscribe">
        <p className="layout--subscribe-header">Let&apos;s stay in touch</p>
        <p className="layout--subscribe-tag">
          Subscribe to our newsletter. Get 50% off your first purchase, exclusive offers, and a sneak peak into future
          releases.
        </p>
        <div>
          <input type="text" placeholder="Enter email" />
          <button>Subscribe</button>
        </div>
      </section>
      <footer className="layout--footer">
        <a href="https://github.com/sailecodes" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/elias-iv-roman/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://eliasiv-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
          <CgWebsite />
        </a>
      </footer>
    </main>
  );
};

const LoginPopup = () => {
  const [loginPopupInactive, setLoginPopupInactive] = useState(false);
  const [formInactive, setFormInactive] = useState(true);

  return (
    <div className={`login-popup--bg ${loginPopupInactive ? "inactive" : ""}`}>
      <div className="login-popup">
        <IoCloseOutline onClick={() => setLoginPopupInactive(!loginPopupInactive)} />
        <div>
          <p>Seems you are not logged in. Please sign in or consider joining us!</p>
          <form className={`login-popup--form ${!formInactive ? "inactive" : ""}`}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign in</button>
            <p onClick={() => setFormInactive(!formInactive)}>
              Not a member? <span>Register</span>
            </p>
          </form>
          <form className={`login-popup--form ${formInactive ? "inactive" : ""}`}>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <p onClick={() => setFormInactive(!formInactive)}>
              Already a member? <span>Log in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Layout;
