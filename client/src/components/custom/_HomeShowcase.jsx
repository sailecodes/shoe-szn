import { Link } from "react-router-dom";

import bg from "../../assets/imgs/gray-bg.jpg";

const _HomeShowcase = () => {
  return (
    <section className="home-showcase">
      <_HomeShowcaseCategory headerText="Popular Community Picks" />
      <_HomeShowcaseCategory headerText="Best Streetwear" />
    </section>
  );
};

const _HomeShowcaseCategory = ({ headerText }) => {
  return (
    <div className="home-showcase-category">
      <header>{headerText}</header>
      <div className="home-showcase-category--items">
        <_Item itemName="Bee" itemPrice="$99.99" />
        <_Item itemName="Bee" itemPrice="$99.99" />
        <_Item itemName="Bee" itemPrice="$99.99" />
        <_Item itemName="Bee" itemPrice="$99.99" />
      </div>
    </div>
  );
};

const _Item = ({ itemImg, itemName, itemPrice }) => {
  return (
    <div className="item">
      <img src={bg} alt="" />
      <div>
        <p>{itemName}</p>
        <p>{itemPrice}</p>
      </div>
      <Link to="">See item</Link>
    </div>
  );
};

export default _HomeShowcase;
