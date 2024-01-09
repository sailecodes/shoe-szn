import { SiNewyorktimes, SiKik, SiJbl, SiSony, SiAmazon, SiNotion } from "react-icons/si";

import HomeShowcase from "../custom/HomeShowcase";

import { styled } from "styled-components";
const HomeWrapper = styled.main`
  .home--hero {
    position: relative;

    background-color: black;
    color: var(--color-primary);

    height: 80rem;

    margin-bottom: 10rem;
  }

  .home--hero div {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);

    width: 70rem;
  }

  .home--hero p:nth-child(1) {
    font-size: var(--font-hero-lg);
    font-weight: 600;
    line-height: 50px;

    margin-bottom: 1rem;
  }

  .home--hero p:nth-child(2) {
    font-size: var(--font-text-lg);

    margin-bottom: 1.3rem;
  }

  .home--hero button {
    background-color: var(--color-primary);
    color: var(--color-white);

    font-size: var(--font-btn-lg);

    height: 4rem;
    width: 22rem;
  }

  .home--sponsors {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;

    margin-bottom: 10rem;
  }

  .home--testimony {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    margin-bottom: 10rem;
  }

  .home--testimony .temp {
    background-color: black;

    width: 60rem;
    height: 60rem;
  }

  .home--testimony-text p {
    width: 80rem;

    font-size: 2rem;
    font-style: italic;
  }

  .home--testimony-text p:nth-child(1) {
    margin-bottom: 0.5rem;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <section className="home--hero">
        <div>
          <p>Shoes by the community, for the community</p>
          <p>
            Every pair is chosen by a community of individuals who love and are passionate about shoes. Not a big shoe
            lover? No worries. You&apos;ve still come to the right place.
          </p>
          <button>See our community picks</button>
        </div>
      </section>
      <div className="home--sponsors">
        <SiAmazon
          size={100}
          color="rgb(187, 187, 187)"
        />
        <SiKik
          size={140}
          color="rgb(187, 187, 187)"
        />
        <SiJbl
          size={130}
          color="rgb(187, 187, 187)"
        />
        <SiSony
          size={180}
          color="rgb(187, 187, 187)"
        />
        <SiNewyorktimes
          size={100}
          color="rgb(187, 187, 187)"
        />
        <SiNotion
          size={100}
          color="rgb(187, 187, 187)"
        />
      </div>
      <HomeShowcase />
      <div className="home--testimony">
        <div className="temp"></div>
        <div className="home--testimony-text">
          <p>
            &quot;The blank is a perfect blend of comfort and style. It&apos;s a bit expensive but worthwhile for what
            it offers. Probably my most used pair this year.&quot;
          </p>
          <p>- Raphael Roman</p>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
