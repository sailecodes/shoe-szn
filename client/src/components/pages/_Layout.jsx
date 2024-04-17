import { Outlet } from "react-router-dom";
import _LayoutNav from "../custom/_LayoutNav";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const _Layout = () => {
  return (
    <main className="layout">
      <section className="layout--announcement">Free shipping for first-time buyers. That&apos;s right, free.</section>
      <_LayoutNav />
      <Outlet />
      <section className="layout--subscribe">
        <div>
          <p className="layout--subscribe-header">Let&apos;s stay in touch</p>
          <p className="layout--subscribe-tag">
            Subscribe to our newsletter. Get 50% off your first purchase, exclusive offers, and a sneak peak into future
            releases.
          </p>
          <div>
            <input type="text" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
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

export default _Layout;
