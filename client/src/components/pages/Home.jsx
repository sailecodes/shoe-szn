import { SiNewyorktimes, SiKik, SiJbl, SiSony, SiAmazon, SiNotion } from "react-icons/si";

import HomeShowcase from "../custom/HomeShowcase";
import kobe from "../../assets/imgs/kobe.jpg";
import testimonyshoes from "../../assets/imgs/testimony-shoes.jpg";

import { styled } from "styled-components";
const HomeWrapper = styled.main`
  .home--hero {
    position: relative;

    background-image: url(${kobe});
    background-size: cover;
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
    padding: 0 var(--padding-side);
    margin-bottom: 10rem;
  }

  .home--testimony > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  .home--testimony img {
    max-width: 100%;
    width: 80rem;
    height: auto;

    object-fit: cover;
  }

  .home--testimony-text p {
    max-width: 60rem;

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
          color="var(--color-gray-400)"
        />
        <SiKik
          size={140}
          color="var(--color-gray-400)"
        />
        <SiJbl
          size={130}
          color="var(--color-gray-400)"
        />
        <SiSony
          size={180}
          color="var(--color-gray-400)"
        />
        <SiNewyorktimes
          size={100}
          color="var(--color-gray-400)"
        />
        <SiNotion
          size={100}
          color="var(--color-gray-400)"
        />
      </div>
      <HomeShowcase />
      <div className="home--testimony">
        <div>
          <div>
            <img
              src={testimonyshoes}
              alt=""
            />
          </div>
          <div className="home--testimony-text">
            <p>
              &quot;The blank is a perfect blend of comfort and style. It&apos;s a bit expensive but worthwhile for what
              it offers. Probably my most used pair this year.&quot;
            </p>
            <p>- Raphael Roman</p>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
