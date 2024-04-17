import { NavLink, Outlet } from "react-router-dom";

const _Layout = () => {
  return (
    <main className="layout">
      <section className="layout--announcement">Free shipping for first-time buyers. That&apos;s right, free.</section>
      <nav className=""></nav>
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
        <a href="https://www.linkedin.com/in/elias-iv-roman/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/sailecodes" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://eliasiv-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </footer>
    </main>
  );
};

const LayoutNav = () => {
  return (
    <nav className="layout-nav">
      <div>
        <NavLink to="/casual">Casual</NavLink>
        <NavLink to="/streetwear">Streetwear</NavLink>
        <NavLink to="/comfy">Comfy</NavLink>
        <NavLink to="/community-picks">Community Picks</NavLink>
      </div>
    </nav>
  );
};

export default _Layout;
