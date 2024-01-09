import { Link } from "react-router-dom";

import toe from "../../assets/imgs/toe-temp.jpg";

import styled from "styled-components";
const HomeShowcaseWrapper = styled.section`
  color: var(--color-primary);

  padding: 0 2rem;
  margin-bottom: 10rem;

  @media (min-width: 426px) {
    padding: 0 var(--padding-side);
  }
`;

const HomeShowcase = () => {
  const data = [
    {
      name: "Optimus",
      price: "$99.99",
    },
    {
      name: "Yizis",
      price: "$67.99",
    },
    {
      name: "Mamba",
      price: "$199.99",
    },
    {
      name: "Babibas 3s",
      price: "$89.99",
    },
  ];

  return (
    <HomeShowcaseWrapper>
      <HomeShowcaseSection
        header="Popular Community Picks"
        data={data}
      />

      {/* <HomeShowcaseSection
        header="Best Streetwear"
        data={data}
      /> */}
    </HomeShowcaseWrapper>
  );
};

const HomeShowcaseSectionWrapper = styled.section`
  margin-bottom: 10rem;

  header {
    font-size: var(--font-text-6);
    font-weight: 500;

    margin-bottom: 2rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem 0.5rem;
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
        {data.map((info) => (
          <HomeShowcaseSectionCard
            key={info.name + "home-showcase-section"}
            name={info.name}
            price={info.price}
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
    font-size: 1.4rem;
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

const HomeShowcaseSectionCard = ({ imgUrl, name, price }) => {
  return (
    <HomeShowcaseSectionCardWrapper>
      <img
        src={toe}
        alt=""
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
