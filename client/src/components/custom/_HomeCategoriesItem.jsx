import { Link } from "react-router-dom";
import categoryBg from "../../assets/imgs/sneakers.jpg";

const _HomeCategoriesItem = ({ category }) => {
  return (
    <Link className="home-categories-item">
      <div className="home--categories-item-img-container">
        <img src={categoryBg} alt="" />
      </div>
      <p>{category}</p>
    </Link>
  );
};
export default _HomeCategoriesItem;
