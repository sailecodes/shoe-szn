import { useState } from "react";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import RightArrowIcon from "./icons/RightArrowIcon";
import _HomeSliderItem from "./_HomeSliderItem";

const _HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) newIndex = 0;
    else if (newIndex >= 3) newIndex = 2;

    setActiveIndex(newIndex);
  };

  return (
    <section className="home-slider">
      <div className="home-slider--slider" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        <_HomeSliderItem headerText="Lowkey. Low maintenance. Low price." tagText="Be comfortable in style." />
        <_HomeSliderItem headerText="Sporty. Springy. Smooth." tagText="Redefine sports shoes." />
        <_HomeSliderItem headerText="Compact. Reinforced. Made to last." tagText="Rely on the reliable." />
      </div>
      <nav className="home-slider--nav">
        <button className="home-slider--nav-btn" onClick={() => updateIndex(activeIndex - 1)}>
          <LeftArrowIcon />
        </button>
        <div className={`home-slider--nav-marker ${activeIndex == 0 ? "active" : ""}`} onClick={() => updateIndex(0)} />
        <div className={`home-slider--nav-marker ${activeIndex == 1 ? "active" : ""}`} onClick={() => updateIndex(1)} />
        <div className={`home-slider--nav-marker ${activeIndex == 2 ? "active" : ""}`} onClick={() => updateIndex(2)} />
        <button className="home-slider--nav-btn" onClick={() => updateIndex(activeIndex + 1)}>
          <RightArrowIcon />
        </button>
      </nav>
    </section>
  );
};

export default _HomeSlider;
