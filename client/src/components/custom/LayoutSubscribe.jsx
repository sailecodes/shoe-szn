import styled from "styled-components";

const LayoutSubscribeWrapper = styled.section`
  @media (min-width: 640px) {
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: var(--color-gray-300);
  color: var(--color-primary);

  height: 40rem;

  padding: 0 var(--padding-side);

  header {
    font-size: var(--font-text-7);
    font-weight: 500;
  }

  p {
    max-width: 100rem;
    color: var(--color-gray-500);

    font-size: var(--font-text-5);
    text-align: center;

    margin-bottom: 2rem;
  }

  input,
  button {
    height: 4rem;

    font-size: var(--font-text-3);

    padding: 0 2rem;
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-white);

    width: 12rem;
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
