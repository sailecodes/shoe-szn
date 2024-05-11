import _Item from "./_ItemCard";

const _HomeShowcaseCategory = ({ headerText }) => {
  return (
    <div className="home-showcase-category">
      <header>{headerText}</header>
      <div className="home-showcase-category--items">
        <_Item itemName="Bee 1" itemPrice="$99.99" />
        <_Item itemName="Bee 2" itemPrice="$99.99" />
        <_Item itemName="Bee 3" itemPrice="$99.99" />
        <_Item itemName="Bee 4" itemPrice="$99.99" />
      </div>
    </div>
  );
};

export default _HomeShowcaseCategory;
