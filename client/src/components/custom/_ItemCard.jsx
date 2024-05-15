import { Link } from "react-router-dom";
import banana from "../../assets/imgs/VU-Banana-1000x1000.png";
import itemCardBg from "../../assets/imgs/sneakers.jpg";

const _Item = ({ itemImg, itemName, itemPrice, isCategoryItem }) => {
  return (
    <div className="item-card">
      <img src={itemCardBg} alt="" />
      <div className="item-card--information">
        <Link to="/item">{itemName}</Link>
        <p>{itemPrice}</p>
      </div>
      {isCategoryItem && (
        <div className="item-card--sizes">
          <select name="category-size">
            <option value="" selected disabled hidden>
              Size
            </option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9.5">9.5</option>
            <option value="12">12</option>
          </select>
          <button>Add to cart</button>
        </div>
      )}
    </div>
  );
};

export default _Item;
