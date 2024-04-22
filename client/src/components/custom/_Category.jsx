import _Item from "./_Item";
import bg from "../../assets/imgs/gray-bg.jpg";

const _Category = ({ categoryName }) => {
  return (
    <main className="category">
      <div className="category--backdrop">Casual.</div>
      <div className="category--filters">
        <p>4 products</p>
        <select name="category--filters-sort" id="category--filters-sort">
          <option value="" selected disabled hidden>
            Sort by
          </option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="low-high">Price: Low-High</option>
          <option value="high-low">Price: High-Low</option>
        </select>
      </div>
      <div className="category--items">
        <_Item itemImg={bg} itemName="Bee1" itemPrice="$99.99" isCategoryItem />
        <_Item itemImg={bg} itemName="Bee2" itemPrice="$99.99" isCategoryItem />
        <_Item itemImg={bg} itemName="Bee3" itemPrice="$99.99" isCategoryItem />
        <_Item itemImg={bg} itemName="Bee4" itemPrice="$99.99" isCategoryItem />
      </div>
    </main>
  );
};

export default _Category;
