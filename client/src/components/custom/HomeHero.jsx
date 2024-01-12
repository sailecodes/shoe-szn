import kobe from "../../assets/imgs/kobe.jpg";
import yellow from "../../assets/imgs/yellow.jpg";

import styled from "styled-components";

const HomeHeroWrapper = styled.section`
  .home-hero--main {
    position: relative;

    background-image: url(${yellow});
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

    background-color: var(--color-gray-300);
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
    font-size: 1.5rem;
    text-align: center;

    margin-bottom: 1.7rem;
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-white);

    font-size: 1.3rem;

    height: 4rem;
    width: 21rem;
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
      font-size: 1.6rem;

      padding: 0 5rem;
    }

    button {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 860px) {
    .home-hero--main {
      color: var(--color-primary);

      height: 80rem;

      padding: 0 var(--padding-side);
      margin-bottom: 10rem;
    }

    .home-hero--main div {
      display: unset;

      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);

      width: 70rem;
    }

    .home-hero--solo-text {
      display: none;
    }

    p:nth-child(1) {
      font-size: var(--font-text-9);
      text-align: left;

      padding: 0;
    }

    p:nth-child(2) {
      font-size: var(--font-text-3);
      text-align: left;

      padding: 0;
      margin-bottom: 1.3rem;
    }

    button {
      font-size: var(--font-btn-lg);

      width: 22rem;
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
          <button>See our community picks</button>
        </div>
      </div>
      <div className="home-hero--solo-text">
        <p>Shoes by the community, for the community</p>
        <p>
          Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe
          lover? No worries. You&apos;ve still come to the right place.
        </p>
        <button>See our community picks</button>
      </div>
    </HomeHeroWrapper>
  );
};

export default HomeHero;
