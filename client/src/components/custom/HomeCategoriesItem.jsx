import { Link } from "react-router-dom";
import categoryBg from "../../assets/imgs/sneakers.jpg";

const HomeCategoriesItem = ({ category }) => {
  return (
    <Link className="home-categories-item">
      <div>
        <img src={categoryBg} alt="" />
      </div>
      <p>{category}</p>
    </Link>
  );
};
export default HomeCategoriesItem;
