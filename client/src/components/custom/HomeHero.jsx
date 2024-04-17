import { Link } from "react-router-dom";
import graybg from "../../assets/imgs/gray-bg.jpg";

import styled from "styled-components";

const HomeHeroWrapper = styled.section`
  .home-hero--main {
    position: relative;

    background-image: url(${graybg});
    background-size: cover;

    height: 50rem;
  }

  .home-hero--main div {
    display: none;
  }

  .home-hero--solo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--color-gray-layout-text00);
    color: var(--color-primary);

    padding: 4rem 2rem 5rem 2rem;
    margin-bottom: 10rem;
  }

  p:nth-child(1) {
    font-size: 3.4rem;
    font-weight: 600;
    text-align: center;
    line-height: 40px;

    margin-bottom: 1rem;
  }

  p:nth-child(2) {
    font-size: 2rem;
    text-align: center;

    margin-bottom: 1.7rem;
  }

  a {
    display: grid;
    place-items: center;

    background-color: var(--color-primary);
    color: var(--color-white);

    font-size: 1.4rem;

    height: 4rem;
    width: 22rem;
  }

  @media (min-width: 426px) {
    .home-hero--solo-text {
      padding: 4rem var(--padding-side) 5rem var(--padding-side);
    }
  }

  @media (min-width: 530px) {
    p:nth-child(1) {
      font-size: 4rem;
      line-height: 50px;
    }

    p:nth-child(2) {
      font-size: 2.2rem;
    }

    a {
      width: 25rem;

      font-size: 1.6rem;
    }
  }

  @media (min-width: 860px) {
    .home-hero--main {
      display: grid;
      place-content: center;

      color: var(--color-primary);

      height: 72rem;

      padding: 0 var(--padding-side);
      margin-bottom: 10rem;
    }

    .home-hero--main div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      max-width: 110rem;
    }

    .home-hero--solo-text {
      display: none;
    }

    p:nth-child(1) {
      font-size: 5rem;
    }

    p:nth-child(2) {
      font-size: 2.5rem;

      margin-bottom: 1.7rem;
    }

    a {
      width: 26rem;
    }
  }
`;

const HomeHero = () => {
  return (
    <HomeHeroWrapper>
      <div className="home-hero--main">
        <div>
          <p>Shoes by the community, for the community</p>
          <p>
            Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe
            lover? No worries. You&apos;ve still come to the right place.
          </p>
          <Link to="/community-picks">See our community picks</Link>
        </div>
      </div>
      <div className="home-hero--solo-text">
        <p>Shoes by the community, for the community</p>
        <p>
          Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe
          lover? No worries. You&apos;ve still come to the right place.
        </p>
        <Link to="/community-picks">See our community picks</Link>
      </div>
    </HomeHeroWrapper>
  );
};

export default HomeHero;
