import HomeHero from "../custom/HomeHero";
import HomeSponsors from "../custom/HomeSponsors";
import HomeShowcase from "../custom/HomeShowcase";

import testimonyshoes from "../../assets/imgs/testimony-shoes.jpg";

import { styled } from "styled-components";
const HomeWrapper = styled.main`
  .home--testimony {
    padding: 0 2rem;
    margin-bottom: 10rem;
  }

  .home--testimony > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .home--testimony img {
    max-width: 100%;
    width: 80rem;
    height: auto;

    object-fit: cover;
  }

  .home--testimony-text p {
    max-width: 60rem;

    font-size: 1.5rem;
    font-style: italic;
    text-align: center;

    margin: 0 3rem;
  }

  .home--testimony-text p:nth-child(1) {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 426px) {
    .home--testimony {
      padding: 0 var(--padding-side);
    }
  }

  @media (min-width: 530px) {
    .home--testimony > div {
      gap: 5rem;
    }

    .home--testimony-text p {
      max-width: 60rem;

      font-size: 2rem;

      margin: 0 5rem;
    }

    .home--testimony-text p:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 850px) {
    .home--testimony {
      padding: 0 var(--padding-side);
      margin-bottom: 10rem;
    }

    .home--testimony > div {
      display: flex;
      flex-direction: column;
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
      text-align: center;

      margin: 0 8rem;
    }

    .home--testimony-text p:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 900px) {
    .home--testimony {
      padding: 0 var(--padding-side);
      margin-bottom: 10rem;
    }

    .home--testimony > div {
      display: flex;
      flex-direction: row;
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

      margin: 0;
    }

    .home--testimony-text p:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeHero />
      {/* <HomeSponsors color="var(--color-gray-400)" /> */}
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
            <p>- Raphael Roman (5 stars)</p>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
