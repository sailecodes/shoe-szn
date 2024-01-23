import { Link } from "react-router-dom";

import styled from "styled-components";
const ItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    color: var(--color-primary);

    font-size: 1.5rem;
  }

  p:nth-child(1) {
    font-weight: 500;
  }

  a,
  button {
    display: grid;
    place-items: center;

    color: var(--color-primary);

    height: 3.6rem;

    font-size: 1.4rem;
    font-weight: 500;

    border: 1px solid var(--color-primary);

    transition: color 0.3s, background-color 0.3s;
  }

  a:hover,
  button:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  select {
    color: var(--color-primary);

    font-family: inherit;

    border: 1px solid var(--color-primary);
  }

  @media (min-width: 530px) {
    p,
    a,
    button {
      font-size: 1.6rem;
    }

    select {
      font-size: 1.4rem;
    }
  }
`;

const ItemCard = ({ isHomeCard, name, price, img, options }) => {
  return (
    <ItemCardWrapper>
      <img
        src={img}
        alt=""
      />
      <div>
        <p>{name}</p>
        <p>{price} USD</p>
      </div>
      {!isHomeCard && (
        <select
          id="size"
          name="size">
          {options.map((option) => (
            <option
              key={"option" + name}
              value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {!isHomeCard && <button>Add to cart</button>}
      {isHomeCard && <Link>See item</Link>}
    </ItemCardWrapper>
  );
};

export default ItemCard;
