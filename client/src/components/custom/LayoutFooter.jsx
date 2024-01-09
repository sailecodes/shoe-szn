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
    font-size: 1.7rem;
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

    font-size: 1.4rem;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 425px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 530px) {
    p {
      font-size: var(--font-text-4);
    }

    a {
      font-size: var(--font-text-3);
    }
  }
`;

const LayoutFooter = () => {
  return (
    <LayoutFooterWrapper>
      <p>Like what you see? Check me out!</p>
      <div>
        <a
          href="https://github.com/sailecodes"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </a>
        <div>&middot;</div>
        <a
          href="https://www.linkedin.com/in/elias-roman-38440028b/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
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
