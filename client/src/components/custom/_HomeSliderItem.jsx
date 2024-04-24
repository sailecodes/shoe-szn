import { Link } from "react-router-dom";

const _HomeSliderItem = ({ headerText, tagText }) => {
  return (
    <div className="home-slider-item">
      <div className="home-slider-item--img">
        <div className="home-slider-item--img-text">
          <p className="home-slider-item--header">{headerText}</p>
          <p className="home-slider-item--tag">{tagText}</p>
          <Link className="home-slider-item--link" to="">
            Shop now
          </Link>
        </div>
      </div>
      <div>
        <p className="home-slider-item--header">{headerText}</p>
        <p className="home-slider-item--tag">{tagText}</p>
        <Link className="home-slider-item--link" to="">
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default _HomeSliderItem;
