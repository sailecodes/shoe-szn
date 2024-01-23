import { Link } from "react-router-dom";
import gray from "../../assets/imgs/gray-bg.jpg";

import styled from "styled-components";

const CategoryWrapper = styled.main`
  .category--hero {
    display: grid;
    place-items: center;

    background-size: cover;

    height: 30rem;
  }

  .category--hero p {
    color: var(--color-primary);

    font-size: 3.4rem;
    font-weight: 600;
  }

  .category--filter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    max-width: 150rem;

    padding: 4rem 2rem;
    margin: 0 auto;
  }

  .category--filter p {
    color: var(--color-gray-500);

    font-size: 1.3rem;
  }

  .category--filter > p {
    margin-left: auto;
  }

  .category--content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem 0.5rem;

    max-width: 150rem;

    padding: 0 2rem;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  @media (min-width: 425px) {
    .category--filter {
      padding: 4rem 4rem;
    }

    .category--content {
      padding: 0 4rem;
    }
  }

  @media (min-width: 530px) {
    .category--hero {
      height: 40rem;
    }

    .category--hero p {
      font-size: 4rem;
    }

    .category--filter p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 860px) {
    .category--hero p {
      font-size: 5rem;
    }

    .category--content {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const Category = ({ heroImg, heroTitle }) => {
  return (
    <CategoryWrapper>
      <div
        className="category--hero"
        style={{ backgroundImage: `url(${heroImg})` }}>
        <p>{heroTitle}</p>
      </div>
      <nav className="category--filter">
        <div>
          <p>Filter: Size</p>
        </div>
        <div>
          <p>Sort by: Featured</p>
        </div>
        <p>3 products</p>
      </nav>
      <div className="category--content">
        <ItemCard isHomeCard={false} />
        <ItemCard isHomeCard={false} />
        <ItemCard isHomeCard={false} />
        <ItemCard isHomeCard={false} />
      </div>
    </CategoryWrapper>
  );
};

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

const ItemCard = ({ isHomeCard, img, name, price, options }) => {
  return (
    <ItemCardWrapper>
      <img
        src={gray}
        alt=""
      />
      <div>
        <p>Mamba</p>
        <p>$89.99 USD</p>
      </div>
      {!isHomeCard && (
        <select
          id="size"
          name="size">
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      )}
      {!isHomeCard && <button>Add to cart</button>}
      {isHomeCard && <Link>See item</Link>}
      <div className="overlay"></div>
    </ItemCardWrapper>
  );
};

export default Category;
