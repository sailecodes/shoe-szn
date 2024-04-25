import { useMutation } from "@tanstack/react-query";
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

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  form .item-card--btns {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a,
  form button {
    display: grid;
    place-items: center;

    color: var(--color-primary);

    height: 3.6rem;
    width: 100%;

    font-size: 1.4rem;
    font-weight: 500;

    border: 1px solid var(--color-primary);

    transition: color 0.3s, background-color 0.3s;
  }

  form button {
    line-height: 1;
  }

  a:hover,
  form button:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  form select {
    color: var(--color-primary);

    font-family: inherit;
    font-size: 1.4rem;

    height: 3.6rem;

    border: 1px solid var(--color-primary);
  }

  @media (min-width: 530px) {
    p,
    a,
    form button {
      font-size: 1.6rem;
    }

    form select {
      font-size: 1.6rem;
    }
  }
`;

const ItemCard = ({ isHomeCard, name, price, img, options }) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => {
      console.log(data); // TODO: Implement
    },
    onSuccess: (data) => {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.size === "Size") return; // TODO: Display error message

    mutate({ name: name, price: price, size: data.size });
  };

  return (
    <ItemCardWrapper>
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <p>{price} USD</p>
      </div>
      {!isHomeCard && (
        <form onSubmit={handleSubmit}>
          <select id="size" name="size">
            <option selected="selected">Size</option>
            {options.map((option) => (
              <option key={"option" + name} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="item-card--btns">
            <Link to="/item">See item</Link>
            <button>Add to cart</button>
          </div>
        </form>
      )}
      {isHomeCard && <Link to="/item">See item</Link>}
    </ItemCardWrapper>
  );
};

export default ItemCard;
