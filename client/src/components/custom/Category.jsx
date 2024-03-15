import { Link } from "react-router-dom";

import ItemCard from "./ItemCard";

import styled from "styled-components";
import { useState } from "react";

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
    gap: 5rem;

    max-width: 150rem;

    padding: 4rem 2rem;
    margin: 0 auto;
  }

  .category--filter p {
    color: var(--color-gray-500);

    font-size: 1.3rem;
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
  const [sortMethod, setSortMethod] = useState("");

  console.log(sortMethod);

  if (sortMethod === "name-asc") {
    shoes = Object.entries(shoes)
      .sort((a, b) => a[1].name.localeCompare(b[1].name))
      .map((shoe) => shoe[1]);
  } else if (sortMethod === "name-desc") {
    shoes = Object.entries(shoes)
      .sort((a, b) => b[1].name.localeCompare(a[1].name))
      .map((shoe) => shoe[1]);
  } else if (sortMethod === "price-asc") {
    shoes = Object.entries(shoes)
      .sort((a, b) => Number(a[1].price.substring(1)) - Number(b[1].price.substring(1)))
      .map((shoe) => shoe[1]);
  } else if (sortMethod === "price-desc") {
    shoes = Object.entries(shoes)
      .sort((a, b) => Number(b[1].price.substring(1)) - Number(a[1].price.substring(1)))
      .map((shoe) => shoe[1]);
  }

  return (
    <CategoryWrapper>
      <div
        className="category--hero"
        style={{ backgroundImage: `url(${heroImg})` }}>
        <p>{heroTitle}</p>
      </div>
      <nav className="category--filter">
        <p>{Object.keys(shoes).length} products</p>
        <select
          name="sort"
          id="sort"
          value={sortMethod}
          onChange={(e) => setSortMethod(e.target.value === "Sort by" ? sortMethod : e.target.value)}>
          <option selected="selected">Sort by</option>
          <option value="name-asc">A-Z</option>
          <option value="name-desc">Z-A</option>
          <option value="price-asc">Price: Low-High</option>
          <option value="price-desc">Price: High-Low</option>
        </select>
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
