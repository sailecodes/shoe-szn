import { Link } from "react-router-dom";

import toe from "../../assets/imgs/toe-temp.jpg";

import styled from "styled-components";
const HomeShowcaseWrapper = styled.section`
  color: var(--color-primary);

  padding: 0 var(--padding-side);
  margin-bottom: 10rem;
`;

const HomeShowcase = () => {
  const data = [
    {
      name: "Optimus Maximum III",
      price: "$99.99",
    },
    {
      name: "Yizis",
      price: "$67.99",
    },
    {
      name: "Mamba Memento",
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
    font-size: var(--font-section-lg);
    font-weight: 500;

    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 4rem;
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
  /* flex-shrink: 1; */

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .temp {
    background-color: black;

    max-width: 100%;
    height: auto;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .home-showcase-section-card--info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .home-showcase-section-card--text {
    font-size: var(--font-text-lg);
  }

  .home-showcase-section-card--text:nth-child(1) {
    font-weight: 500;
  }

  a {
    display: grid;
    place-items: center;

    color: var(--color-primary);

    height: 4rem;

    font-size: var(--font-text-lg);
    font-weight: 500;

    border: 1px solid var(--color-primary);

    transition: color 0.3s, background-color 0.3s;
  }

  a:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

const HomeShowcaseSectionCard = ({ imgUrl, name, price }) => {
  return (
    <HomeShowcaseSectionCardWrapper>
      <img
        src={toe}
        alt=""
      />
      {/* <div className="temp"></div> */}
      <div className="home-showcase-section-card--info">
        <p className="home-showcase-section-card--text">{name}</p>
        <p className="home-showcase-section-card--text">{price} USD</p>
      </div>
      <Link>See item</Link>
    </HomeShowcaseSectionCardWrapper>
  );
};

export default HomeShowcase;
