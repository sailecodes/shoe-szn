import { Link } from "react-router-dom";
import yellow from "../../assets/imgs/yellow.jpg";

import styled from "styled-components";

const CategoryWrapper = styled.main`
  .category--hero {
    background-image: url(${yellow});
    background-size: cover;

    height: 30rem;
  }

  .category--filter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    max-width: 140rem;

    padding: 4rem 4rem;
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

    max-width: 140rem;

    padding: 0 4rem;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  @media (min-width: 530px) {
    .category--hero {
      height: 40rem;
    }

    .category--filter p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 860px) {
    .category--content {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const Category = ({ data }) => {
  return (
    <CategoryWrapper>
      <div className="category--hero"></div>
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
    font-size: 1.5rem;
  }

  p:nth-child(1) {
    font-weight: 500;
  }

  a {
    display: grid;
    place-items: center;

    color: var(--color-primary);

    height: 3.6rem;

    font-size: 1.4rem;
    font-weight: 500;

    border: 1px solid var(--color-primary);

    transition: color 0.3s, background-color 0.3s;
  }

  a:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  @media (min-width: 530px) {
    p {
      font-size: 1.6rem;
    }

    a {
      font-size: 1.6rem;
    }
  }
`;

const ItemCard = ({ isHomeCard }) => {
  return (
    <ItemCardWrapper>
      <img
        src={yellow}
        alt=""
      />
      <div>
        <p>Mamba</p>
        <p>$89.99 USD</p>
      </div>
      {!isHomeCard && <div>Input</div>}
      <Link>Add to cart</Link>
    </ItemCardWrapper>
  );
};

export default Category;
