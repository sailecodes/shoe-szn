import Category from "../custom/Category";
import { data } from "../../data/data";

const Casual = () => {
  return <Category {...data.categories.casual} />;
};
export default Casual;
