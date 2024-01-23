import ItemCard from "./ItemCard";
import { data } from "../../data/data";

import styled from "styled-components";
const HomeShowcaseWrapper = styled.section`
  color: var(--color-primary);

  max-width: 150rem;

  padding: 0 2rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  > section:first-child {
    margin-bottom: 8rem;
  }

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }
`;

const HomeShowcase = () => {
  return (
    <HomeShowcaseWrapper>
      <HomeShowcaseSection
        header={data.home.showcase.sectionOne.header}
        shoes={data.home.showcase.sectionOne.shoes}
      />
      <HomeShowcaseSection
        header={data.home.showcase.sectionTwo.header}
        shoes={data.home.showcase.sectionTwo.shoes}
      />
    </HomeShowcaseWrapper>
  );
};

const HomeShowcaseSectionWrapper = styled.section`
  header {
    font-size: 1.9rem;
    font-weight: 500;

    margin-bottom: 2rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem 0.5rem;
  }

  @media (min-width: 530px) {
    header {
      font-size: var(--font-text-6);
    }
  }

  @media (min-width: 860px) {
    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const HomeShowcaseSection = ({ header, shoes }) => {
  return (
    <HomeShowcaseSectionWrapper>
      <header>{header}</header>
      <div>
        {shoes.map((shoe) => (
          <ItemCard
            isHomeCard={true}
            key={shoe.name}
            name={shoe.name}
            price={shoe.price}
            img={shoe.img}
          />
        ))}
      </div>
    </HomeShowcaseSectionWrapper>
  );
};

export default HomeShowcase;
