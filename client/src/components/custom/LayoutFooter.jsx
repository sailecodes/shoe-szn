import styled from "styled-components";
const LayoutFooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: var(--color-primary);
  color: var(--color-white);

  height: 15rem;

  padding: 0 2rem;

  p {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-gray-400);
  }

  a {
    color: var(--color-gray-400);

    font-size: 1.3rem;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 530px) {
    p {
      font-size: 1.8rem;
    }

    a {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 860px) {
    p {
      font-size: 2rem;
    }

    a {
      font-size: 1.4rem;
    }
  }
`;

const LayoutFooter = () => {
  return (
    <LayoutFooterWrapper>
      <p>Check me out</p>
      <div>
        <a
          href="https://www.linkedin.com/in/elias-roman-38440028b/"
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
    </LayoutFooterWrapper>
  );
};

export default LayoutFooter;
