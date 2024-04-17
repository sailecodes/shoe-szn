import styled from "styled-components";
const HomeEmailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: var(--color-white);
  background-color: var(--color-primary);

  height: 45rem;

  padding: 0 2rem;
  margin-bottom: 10rem;

  header {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    line-height: 40px;
  }

  p {
    color: var(--color-gray-layout-text00);

    max-width: 100rem;

    font-size: 1.6rem;
    text-align: center;
  }

  p span {
    text-decoration: underline;
  }

  p span:hover {
    cursor: pointer;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 530px) {
    header {
      font-size: 3.5rem;
      line-height: 50px;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 860px) {
    header {
      font-size: var(--font-text-7);
    }

    p {
      font-size: var(--font-text-5);
    }
  }
`;

const HomeEmail = () => {
  return (
    <HomeEmailWrapper>
      <header>Want to be a part of our team?</header>
      <p>
        We have members from all over the world bringing their unique, individual insights and appreciation of shoes
        into the mix. Get in contact with us and be a part of our collaborative experience.
      </p>
      <p>
        Email us at <span>team@shoeszn.com</span>.
      </p>
    </HomeEmailWrapper>
  );
};
export default HomeEmail;
