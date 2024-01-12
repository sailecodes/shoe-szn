import { Link } from "react-router-dom";
import toe from "../../assets/imgs/toe-temp.jpg";

import styled from "styled-components";
const HomeCategoriesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem 0.5rem;

  max-width: 142.5rem;

  padding: 0 2rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  @media (min-width: 425px) {
    padding: 0 var(--padding-side);
  }

  @media (min-width: 860px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const HomeCategories = () => {
  return (
    <HomeCategoriesWrapper>
      <HomeCategoriesItem
        imgSrc={toe}
        title="Casual"
      />
      <HomeCategoriesItem
        imgSrc={toe}
        title="Streetwear"
      />
      <HomeCategoriesItem
        imgSrc={toe}
        title="Comfy"
      />
      <HomeCategoriesItem
        imgSrc={toe}
        title="Community Picks"
      />
    </HomeCategoriesWrapper>
  );
};

const HomeCategoriesItemWrapper = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    font-size: 1.5rem;
    font-weight: 500;
  }

  @media (min-width: 530px) {
    a {
      font-size: 1.6rem;
    }
  }
`;

const HomeCategoriesItem = ({ imgSrc, title }) => {
  return (
    <HomeCategoriesItemWrapper>
      <Link>
        <img
          src={imgSrc}
          alt=""
        />
        {title}
      </Link>
    </HomeCategoriesItemWrapper>
  );
};

export default HomeCategories;
