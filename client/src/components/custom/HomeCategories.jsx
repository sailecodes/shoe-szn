import { Link } from "react-router-dom";

import { data } from "../../data/data";

import styled from "styled-components";
const HomeCategoriesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem 0.5rem;

  max-width: 150rem;

  padding: 0 2rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  @media (min-width: 426px) {
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
        img={data.home.categories.casual.img}
        title={data.home.categories.casual.title}
      />
      <HomeCategoriesItem
        img={data.home.categories.streetwear.img}
        title={data.home.categories.streetwear.title}
      />
      <HomeCategoriesItem
        img={data.home.categories.comfy.img}
        title={data.home.categories.comfy.title}
      />
      <HomeCategoriesItem
        img={data.home.categories.communityPicks.img}
        title={data.home.categories.communityPicks.title}
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

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 530px) {
    a {
      font-size: 2rem;
    }
  }
`;

const HomeCategoriesItem = ({ img, title }) => {
  return (
    <HomeCategoriesItemWrapper>
      <Link to={"/" + (title === "Community Picks" ? "community-picks" : title)}>
        <img
          src={img}
          alt="Category image"
        />
        {title}
      </Link>
    </HomeCategoriesItemWrapper>
  );
};

export default HomeCategories;
