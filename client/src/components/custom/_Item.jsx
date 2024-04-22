import { Link } from "react-router-dom";
import bg from "../../assets/imgs/gray-bg.jpg";

const _Item = ({ itemImg, itemName, itemPrice, isCategoryItem }) => {
  return (
    <div className="item">
      <img src={bg} alt="" />
      <div>
        <p>{itemName}</p>
        <p>{itemPrice}</p>
      </div>
      {!isCategoryItem && <Link to="">See item</Link>}
      {isCategoryItem && (
        <div>
          <select name="item--category-size" id="">
            <option value="" selected disabled hidden>
              Size
            </option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9.5">9.5</option>
            <option value="12">12</option>
          </select>
          <Link to="">See item</Link>
          <button>Add to cart</button>
        </div>
      )}
    </div>
  );
};

export default _Item;
