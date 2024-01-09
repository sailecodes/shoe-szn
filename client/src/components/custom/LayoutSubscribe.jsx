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
  }

  p {
    max-width: 100rem;
    color: var(--color-gray-500);

    font-size: 1.4rem;
    text-align: center;

    margin-bottom: 1.5rem;
  }

  input,
  button {
    height: 3.5rem;

    font-size: 1.3rem;

    padding: 0 2rem;
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-white);

    width: 10rem;
  }

  @media (min-width: 425px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 530px) {
    header {
      font-size: 3.5rem;
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
