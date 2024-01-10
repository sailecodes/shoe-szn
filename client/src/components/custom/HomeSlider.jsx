import LeftArrowIcon from "../custom/icons/LeftArrowIcon";
import RightArrowIcon from "../custom/icons/RightArrowIcon";

import toe from "../../assets/imgs/toe-temp.jpg";

import styled from "styled-components";
const HomeSliderWrapper = styled.section`
  margin-bottom: 10rem;
`;

const HomeSlider = () => {
  return (
    <HomeSliderWrapper>
      <div className="home-slider--slider">
        <HomeSliderItem />
      </div>
    </HomeSliderWrapper>
  );
};

const HomeSliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 100%;
    height: auto;
  }

  .home-slider-item--text {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-gray-300);
    color: var(--color-primary);

    padding: 4rem 2rem 5rem 2rem;
  }

  p:nth-child(1) {
    font-size: 3.2rem;
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

  .home-slider-item--text button {
    background-color: var(--color-primary);
    color: var(--color-white);

    font-size: 1.3rem;

    height: 4rem;
    width: 12rem;
  }

  .home-slider-item--nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 3.5rem;

    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  .home-slider-item--nav svg {
    width: 1.2rem;
  }

  .home-slider-item--nav > div {
    width: 1rem;
    height: 1rem;

    border: 1px solid var(--color-gray-400);
    border-radius: 100%;
  }

  .home-slider-item--nav > button:nth-child(1) {
    margin-right: 1rem;
  }

  .home-slider-item--nav > button:last-child {
    margin-left: 1rem;
  }

  .home-slider-item--nav button {
    display: grid;
    place-items: center;
  }
`;

const HomeSliderItem = () => {
  return (
    <HomeSliderItemWrapper>
      <img
        src={toe}
        alt=""
      />
      <div className="home-slider-item--text">
        <p>Lowkey. Low maintenance. Low price.</p>
        <p>Be comfortable in style.</p>
        <button>Shop now</button>
      </div>
      <nav className="home-slider-item--nav">
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
    </HomeSliderItemWrapper>
  );
};

export default HomeSlider;
