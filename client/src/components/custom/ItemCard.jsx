import { Link } from "react-router-dom";
import itemCardBg from "../../assets/imgs/sneakers.jpg";

const ItemCard = ({ itemId, itemImg, itemName, itemPrice, itemSizes, isCategoryItem }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${itemId}`}>
        <div className="item-card--img-container">
          <img src={itemCardBg} alt="" />
        </div>
        <div className="item-card--meta">
          <p>{itemName}</p>
          <p>{itemPrice}</p>
        </div>
      </Link>
      {isCategoryItem && (
        <div className="item-card--sizes">
          <select name="category-size">
            <option value="" selected disabled hidden>
              Size
            </option>
            {itemSizes.map((size) => (
              <option key={itemName + size}>{size}</option>
            ))}
          </select>
          <button>Add to cart</button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
