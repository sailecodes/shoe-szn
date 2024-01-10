import styled from "styled-components";

const LayoutSubscribeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: var(--color-gray-300);
  color: var(--color-primary);

  height: 40rem;

  padding: 0 2rem;

  header {
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    line-height: 40px;
  }

  p {
    max-width: 100rem;
    color: var(--color-gray-500);

    font-size: 1.6rem;
    text-align: center;

    margin-bottom: 1.5rem;
  }

  input,
  button {
    height: 3.5rem;

    font-size: 1.4rem;

    padding: 0 2rem;
  }

  input {
    width: 20rem;
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-white);

    width: 11rem;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);

    input {
      width: fit-content;
    }
  }

  @media (min-width: 530px) {
    header {
      font-size: 3.5rem;
      line-height: 50px;
    }

    p {
      font-size: 2rem;
    }

    input,
    button {
      height: 4rem;

      font-size: var(--font-text-3);
    }

    button {
      width: 12rem;
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

const LayoutSubscribe = () => {
  return (
    <LayoutSubscribeWrapper>
      <header>Interested in new releases?</header>
      <p>
        Subscribe to our newsletter. Get 50% off your first purchase, exclusive offers, and a sneak peak into future
        releases.{" "}
      </p>
      <div>
        <input
          type="text"
          placeholder="Enter email"
        />
        <button>Subscribe</button>
      </div>
    </LayoutSubscribeWrapper>
  );
};

export default LayoutSubscribe;
