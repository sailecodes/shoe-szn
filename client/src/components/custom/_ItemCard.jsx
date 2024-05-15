import { Link } from "react-router-dom";
import itemCardBg from "../../assets/imgs/sneakers.jpg";

const _Item = ({ itemImg, itemName, itemPrice, isCategoryItem }) => {
  return (
    <Link className="item-card" to="/item">
      <div className="item-card--img-container">
        <img src={itemCardBg} alt="" />
      </div>
      <div className="item-card--information">
        <p>{itemName}</p>
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
    </Link>
  );
};

export default _Item;
