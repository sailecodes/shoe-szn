import { SiKik, SiJbl, SiSony } from "react-icons/si";
import { SiNewyorktimes } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import { SiAmazon } from "react-icons/si";

import HomeShowcase from "../custom/HomeShowcase";
import HomeTestimony from "../custom/HomeTestimony";

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
          color="gray"
        />
        <SiKik
          size={140}
          color="gray"
        />
        <SiJbl
          size={130}
          color="gray"
        />
        <SiSony
          size={180}
          color="gray"
        />
        <SiNewyorktimes
          size={100}
          color="gray"
        />
        <SiNotion
          size={100}
          color="gray"
        />
      </div>
      <HomeShowcase />
      <HomeTestimony />
    </HomeWrapper>
  );
};

export default Home;
