import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import { PiPlantFill, PiHourglassHighFill } from "react-icons/pi";
import { FaRegGem } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import tmpImg from "../../assets/imgs/sneakers.jpg";

const Item = () => {
  const { id } = useParams();
  const [attrBools, setAttrBools] = useState([]);
  const [bool, setBool] = useState(false);

  console.log(id);

  const { loading, error, data } = useQuery(
    gql`
      query GetItem($itemId: ID!) {
        data: getItem(itemId: $itemId) {
          item_id
          item_name
          item_price
          item_description
          item_sizes
          item_attributes
        }
      }
    `,
    {
      variables: {
        itemId: id,
      },
      onCompleted: ({ data }) => {
        let arr = [];
        console.log(data.item_attributes);
      },
    }
  );

  const handleAddToCart = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (Object.keys(data).length === 0) return;
  };

  const controls = useAnimationControls();
  const handleAttrClick = () => {
    controls.start("active");
  };

  if (loading) console.log("loading");
  else if (error) console.log("error");

  console.log(data?.data);

  return (
    <section className="item">
      <div className="item--imgs">
        <img src={tmpImg} alt="" />
        <img src={tmpImg} alt="" />
        <img src={tmpImg} alt="" />
        <img src={tmpImg} alt="" />
      </div>
      <div className="item--details">
        <p className="item--details-name">Nike Earths</p>
        <p className="item--details-price">$99.99</p>
        <p className="item--details-description">
          Crafted with precision and attention to detail, these shoes are designed to elevate every step of your
          journey, whether you&apos;re navigating city streets or exploring the great outdoors.
        </p>
        <form onSubmit={handleAddToCart}>
          <select name="shoe-size">
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
        <div className="item--details-attrs">
          {/* <div>
            <div className="item--details-attr-header">
              <FaRegGem />
              <header>One-of-a-kind</header>
              <motion.button
                style={{
                  display: "grid",
                  placeItems: "center",
                  marginLeft: "2rem",
                }}
                variants={{
                  initial: {
                    rotate: "0deg",
                  },
                  active: {
                    rotate: "180deg",
                  },
                }}
                initial="initial"
                animate={controls}
                onClick={handleAttrClick}>
                <MdKeyboardArrowDown />
              </motion.button>
            </div>
            <motion.div
              className="item--details-attr-description"
              style={{
                display: "grid",
                gridTemplateRows: "0fr",
              }}
              variants={{
                initial: {
                  gridTemplateRows: "0fr",
                },
                active: {
                  gridTemplateRows: "1fr",
                },
              }}
              initial="initial"
              animate={controls}>
              <p>
                We&apos;ve pushed the boundaries of traditional shoemaking, experimenting with unconventional materials,
                intricate patterns, and avant-garde designs to create something truly extraordinary.
              </p>
            </motion.div>
          </div> */}
          <div>
            <div className="item--details-attr-header">
              <PiPlantFill />
              <header>Eco-friendly</header>
              <button
                className={`item--details-attr-header-btn ${bool ? "active" : ""}`}
                onClick={() => setBool(!bool)}>
                <MdKeyboardArrowDown />
              </button>
            </div>
            <div className={`item--details-attr-description ${bool ? "active" : ""}`}>
              <p>
                Step into the future with our eco-conscious footwear, designed to minimize environmental impact without
                compromising on comfort or performance.
              </p>
            </div>
          </div>
          {/* <div>
            <div className="item--details-attr-header">
              <PiHourglassHighFill />
              <header>Long-lasting</header>
            </div>
            <p>
              Crafted with precision and engineered to withstand the tests of time, our long-lasting shoes redefine the
              standards of durability in footwear.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Item;
