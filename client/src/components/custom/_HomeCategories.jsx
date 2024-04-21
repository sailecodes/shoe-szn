import { Link } from "react-router-dom";
import bg from "../../assets/imgs/gray-bg.jpg";

const _HomeCategories = () => {
  return (
    <section className="home-categories">
      <div className="home-categories--item">
        <img src={bg} alt="" />
        <Link to="">Casual</Link>
      </div>
      <div className="home-categories--item">
        <img src={bg} alt="" />
        <Link to="">Streetwear</Link>
      </div>
      <div className="home-categories--item">
        <img src={bg} alt="" />
        <Link to="">Comfy</Link>
      </div>
      <div className="home-categories--item">
        <img src={bg} alt="" />
        <Link to="">Community Picks</Link>
      </div>
    </section>
  );
};

export default _HomeCategories;
