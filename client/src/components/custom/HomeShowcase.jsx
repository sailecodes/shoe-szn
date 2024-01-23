import { Link } from "react-router-dom";

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
        data={data.home.showcase.sectionOne.shoes}
      />
      <HomeShowcaseSection
        header={data.home.showcase.sectionTwo.header}
        data={data.home.showcase.sectionTwo.shoes}
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

const HomeShowcaseSection = ({ header, data }) => {
  return (
    <HomeShowcaseSectionWrapper>
      <header>{header}</header>
      <div>
        {data.map((shoeInfo) => (
          <HomeShowcaseSectionCard
            key={shoeInfo.name}
            img={shoeInfo.img}
            name={shoeInfo.name}
            price={shoeInfo.price}
          />
        ))}
      </div>
    </HomeShowcaseSectionWrapper>
  );
};

const HomeShowcaseSectionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    max-width: 100%;
    height: auto;
  }

  .home-showcase-section-card--info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .home-showcase-section-card--text {
    font-size: 1.5rem;
  }

  .home-showcase-section-card--text:nth-child(1) {
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
    .home-showcase-section-card--text {
      font-size: var(--font-text-3);
    }

    a {
      height: 4rem;

      font-size: var(--font-text-3);
    }
  }
`;

const HomeShowcaseSectionCard = ({ img, name, price }) => {
  return (
    <HomeShowcaseSectionCardWrapper>
      <img
        src={img}
        alt={name}
      />
      <div className="home-showcase-section-card--info">
        <p className="home-showcase-section-card--text">{name}</p>
        <p className="home-showcase-section-card--text">{price} USD</p>
      </div>
      <Link>See item</Link>
    </HomeShowcaseSectionCardWrapper>
  );
};

export default HomeShowcase;
