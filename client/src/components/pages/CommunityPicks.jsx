import Category from "../custom/Category";
import { data } from "../../data/data";

const CommunityPicks = () => {
  return <Category {...data.categories.communityPicks} />;
};
export default CommunityPicks;
