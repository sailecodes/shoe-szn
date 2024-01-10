import LeftArrowIcon from "../custom/icons/LeftArrowIcon";
import RightArrowIcon from "../custom/icons/RightArrowIcon";

import toe from "../../assets/imgs/toe-temp.jpg";

import styled from "styled-components";
const HomeSliderWrapper = styled.section`
  position: relative;

  margin-bottom: 10rem;

  .home-slider--slider {
    /* display: flex; */
  }

  .home-slider--nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 3.5rem;

    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  .home-slider--nav svg {
    width: 1.2rem;
  }

  .home-slider--nav > div {
    width: 1rem;
    height: 1rem;

    border: 1px solid var(--color-gray-400);
    border-radius: 100%;
  }

  .home-slider--nav > div:nth-child(2) {
    background-color: var(--color-primary);
  }

  .home-slider--nav > div:hover {
    cursor: pointer;
    border: 1px solid var(--color-primary);
  }

  .home-slider--nav > button:nth-child(1) {
    margin-right: 1rem;
  }

  .home-slider--nav > button:last-child {
    margin-left: 1rem;
  }

  .home-slider--nav button {
    display: grid;
    place-items: center;
  }

  .home-slider--nav button:hover svg {
    fill: var(--color-primary);
  }

  @media (min-width: 860px) {
    .home-slider--nav {
      height: 4rem;
    }

    .home-slider--nav svg {
      width: 1.5rem;
    }

    .home-slider--nav > div {
      width: 1.2rem;
      height: 1.2rem;

      border: 1px solid var(--color-gray-400);
      border-radius: 100%;
    }

    .home-slider--nav > button:nth-child(1) {
      margin-right: 1.2rem;
    }

    .home-slider--nav > button:last-child {
      margin-left: 1.2rem;
    }
  }
`;

const HomeSlider = () => {
  return (
    <HomeSliderWrapper>
      <div className="home-slider--slider">
        <HomeSliderItem />
        {/* <HomeSliderItem /> */}
      </div>
      <nav className="home-slider--nav">
        <button>
          <LeftArrowIcon fill="var(--color-gray-500)" />
        </button>
        <div></div>
        <div></div>
        <div></div>
        <button>
          <RightArrowIcon fill="var(--color-gray-500)" />
        </button>
      </nav>
    </HomeSliderWrapper>
  );
};

const HomeSliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .home-slider-item--main {
    background-image: url(${toe});
    background-size: cover;

    height: 39rem;
  }

  .home-slider-item--main div {
    display: none;
  }

  .home-slider-item--solo-text {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-gray-300);
    color: var(--color-primary);

    padding: 4rem 2rem 5rem 2rem;
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

  .home-slider-item--solo-text button {
    background-color: var(--color-primary);
    color: var(--color-white);

    font-size: 1.3rem;

    height: 4rem;
    width: 12rem;
  }

  @media (min-width: 425px) {
    .home-slider-item--solo-text {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  @media (min-width: 530px) {
    .home-slider-item--main {
      height: 45rem;
    }

    p:nth-child(1) {
      font-size: 4rem;
      line-height: 50px;
    }

    p:nth-child(2) {
      font-size: 2.2rem;
    }

    .home-slider-item--solo-text button {
      font-size: 1.4rem;

      width: 13rem;
    }
  }

  @media (min-width: 860px) {
    .home-slider-item--main {
      display: grid;
      place-items: center;

      height: 72rem;

      padding: 0 var(--padding-side);
    }

    .home-slider-item--main > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: var(--color-primary);
    }

    .home-slider-item--main p:nth-child(1) {
      font-size: 5rem;
    }

    .home-slider-item--main p:nth-child(2) {
      font-size: 2.5rem;
    }

    .home-slider-item--main button {
      background-color: var(--color-primary);
      color: var(--color-white);

      font-size: 1.4rem;

      height: 4rem;
      width: 12rem;
    }

    .home-slider-item--solo-text {
      display: none;
    }
  }
`;

const HomeSliderItem = () => {
  return (
    <HomeSliderItemWrapper>
      <div className="home-slider-item--main">
        <div>
          <p>Lowkey. Low maintenance. Low price.</p>
          <p>Be comfortable in style.</p>
          <button>Shop now</button>
        </div>
      </div>
      <div className="home-slider-item--solo-text">
        <p>Lowkey. Low maintenance. Low price.</p>
        <p>Be comfortable in style.</p>
        <button>Shop now</button>
      </div>
    </HomeSliderItemWrapper>
  );
};

export default HomeSlider;
