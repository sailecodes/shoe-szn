import { Link } from "react-router-dom";

import ItemCard from "./ItemCard";

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

const Category = ({ heroImg, heroTitle, shoes }) => {
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
        {shoes.map((shoe) => (
          <ItemCard
            key={"category--content" + shoe.name}
            isHomeCard={false}
            name={shoe.name}
            price={shoe.price}
            img={shoe.img}
            options={shoe.options}
          />
        ))}
      </div>
    </CategoryWrapper>
  );
};

export default Category;
