import { Outlet } from "react-router-dom";

const Test = () => {
  return (
    <main className="layout">
      <section className="layout--announcement">Free shipping for first-time buyers. That&apos;s right, free.</section>
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
        Inspired by me.
        {/* <p>Check me out</p>
        <div>
          <a href="https://www.linkedin.com/in/elias-iv-roman/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <div>&middot;</div>
          <a href="https://github.com/sailecodes" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <div>&middot;</div>
          <a href="https://eliasiv-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            Portfolio
          </a>
        </div> */}
      </footer>
    </main>
  );
};

export default Test;
