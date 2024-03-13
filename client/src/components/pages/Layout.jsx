import styled from "styled-components";
import { Outlet } from "react-router-dom";

import LayoutTopNav from "../custom/LayoutTopNav";
import LayoutFooter from "../custom/LayoutFooter";

const LayoutWrapper = styled.section`
  .layout--announcement {
    display: grid;
    place-items: center;

    background-color: var(--color-primary);
    color: var(--color-white);

    height: 5rem;

    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.5px;

    padding: 0 4rem;
  }

  .layout--subscribe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: var(--color-gray-300);
    color: var(--color-primary);

    height: 40rem;

    padding: 0 2rem;
  }

  .layout--subscribe header {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    line-height: 40px;
  }

  .layout--subscribe p {
    max-width: 100rem;

    color: var(--color-gray-500);

    font-size: 1.6rem;
    text-align: center;

    margin-bottom: 1rem;
  }

  .layout--subscribe input,
  .layout--subscribe button {
    height: 3.5rem;

    font-size: 1.4rem;

    padding: 0 2rem;
  }

  .layout--subscribe input {
    width: 20rem;
    border: 1px solid var(--color-primary);
  }

  .layout--subscribe button {
    background-color: var(--color-primary);
    color: var(--color-white);

    width: 11rem;
  }

  @media (min-width: 426px) {
    .layout--subscribe {
      padding: 0 4rem;
    }

    .layout--subscribe input {
      width: fit-content;
    }
  }

  @media (min-width: 530px) {
    .layout--announcement {
      font-size: 1.4rem;
    }

    .layout--subscribe header {
      font-size: 3.5rem;
      line-height: 50px;
    }

    .layout-subscribe p {
      font-size: 2rem;
    }

    .layout--subscribe input,
    .layout--subscribe button {
      height: 4rem;

      font-size: 1.6rem;
    }

    .layout--subscribe button {
      width: 13rem;
    }
  }

  @media (min-width: 860px) {
    .layout--subscribe header {
      font-size: 4rem;
    }

    .layout--subscribe p {
      font-size: 2.2rem;
    }
  }
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <section className="layout--announcement">Free shipping for first-time buyers. That&apos;s right, free.</section>
      <LayoutTopNav />
      <Outlet />
      <section className="layout--subscribe">
        <header>Let&apos;s stay in touch</header>
        <p>
          Subscribe to our newsletter. Get 50% off your first purchase, exclusive offers, and a sneak peak into future
          releases.
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter email"
          />
          <button>Subscribe</button>
        </div>
      </section>
      <footer>
        <p>Check me out</p>
        <div>
          <a
            href="https://www.linkedin.com/in/elias-iv-roman/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
          <div>&middot;</div>
          <a
            href="https://github.com/sailecodes"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
          <div>&middot;</div>
          <a
            href="https://eliasiv-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Portfolio
          </a>
        </div>
      </footer>
      <LayoutFooter />
    </LayoutWrapper>
  );
};

export default Layout;
