import { Outlet } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import LayoutNav from "../custom/LayoutNav";

const Layout = () => {
  return (
    <main className="layout">
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

export default Layout;
