import styled from "styled-components";

const LayoutSubscribeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: rgba(235, 235, 235, 0.75);
  color: var(--color-primary);

  height: 40rem;

  header {
    font-size: 4rem;
    font-weight: 500;
  }

  p {
    width: 100rem;
    color: #575757;

    font-size: 2.2rem;
    text-align: center;

    margin-bottom: 2rem;
  }

  input,
  button {
    height: 4rem;

    font-size: 1.6rem;

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
