import { PiPlantFill, PiHourglassHighFill } from "react-icons/pi";
import { FaRegGem } from "react-icons/fa";
import banana from "../../assets/imgs/VU-Banana-1000x1000.png";

const _Item = () => {
  return (
    <section className="itemm">
      <div className="itemm--imgs">
        <img src={banana} alt="" />
        <img src={banana} alt="" />
        <img src={banana} alt="" />
        <img src={banana} alt="" />
      </div>
      <div className="itemm--details">
        <p className="itemm--details-name">Nike Earths</p>
        <p className="itemm--details-price">$99.99</p>
        <p className="itemm--details-description">
          Crafted with precision and attention to detail, these shoes are designed to elevate every step of your
          journey, whether you're navigating city streets or exploring the great outdoors. The premium materials used in
          construction ensure durability and longevity, while innovative cushioning technology provides all-day comfort
          and support. <br />
          Experience the perfect fusion of style and functionality with our pair of shoes – a wardrobe staple that's as
          reliable as it is stylish.
        </p>
        <form>
          <select>
            <option value="" selected disabled hidden>
              Size
            </option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9.5">9.5</option>
            <option value="12">12</option>
          </select>
          <button>Add to cart</button>
        </form>
        <div className="itemm--details-attrs">
          <div>
            <div className="itemm--details-attr-header">
              <FaRegGem />
              <header>One-of-a-kind</header>
            </div>
            <p>
              We&apos;ve pushed the boundaries of traditional shoemaking, experimenting with unconventional materials,
              intricate patterns, and avant-garde designs to create something truly extraordinary.
            </p>
          </div>
          <div>
            <div className="itemm--details-attr-header">
              <PiPlantFill />
              <header>Eco-friendly</header>
            </div>
            <p>
              Step into the future with our eco-conscious footwear, designed to minimize environmental impact without
              compromising on comfort or performance.
            </p>
          </div>
          <div>
            <div className="itemm--details-attr-header">
              <PiHourglassHighFill />
              <header>Long-lasting</header>
            </div>
            <p>
              Crafted with precision and engineered to withstand the tests of time, our long-lasting shoes redefine the
              standards of durability in footwear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default _Item;