import Category from "../custom/Category";
import { data } from "../../data/data";

const Streetwear = () => {
  return <Category {...data.categories.streetwear} />;
};
export default Streetwear;
