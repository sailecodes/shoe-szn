import { useState } from "react";
import { FaRegGem } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiHourglassHighFill, PiPlantFill } from "react-icons/pi";

const ItemAttribute = ({ header }) => {
  const [attrFlag, setAttrFlag] = useState(false);

  return (
    <div className="item-attribute">
      <div className="item-attribute--header">
        {header === "One-of-a-kind" && <FaRegGem />}
        {header === "Eco-friendly" && <PiPlantFill />}
        {header === "Long-lasting" && <PiHourglassHighFill />}
        <header>{header}</header>
        <button
          className={`item-attribute--header-btn ${attrFlag ? "active" : ""}`}
          onClick={() => setAttrFlag(!attrFlag)}>
          <MdKeyboardArrowDown />
        </button>
      </div>
      <div className={`item-attribute--description ${attrFlag ? "active" : ""}`}>
        {header === "One-of-a-kind" && (
          <p>
            We&apos;ve pushed the boundaries of traditional shoemaking, experimenting with unconventional materials,
            intricate patterns, and avant-garde designs to create something truly extraordinary.
          </p>
        )}
        {header === "Eco-friendly" && (
          <p>
            Step into the future with our eco-conscious footwear, designed to minimize environmental impact without
            compromising on comfort or performance.
          </p>
        )}
        {header === "Long-lasting" && (
          <p>
            Crafted with precision and engineered to withstand the tests of time, our long-lasting shoes redefine the
            standards of durability in footwear.
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemAttribute;
