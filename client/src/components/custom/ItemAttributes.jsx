import ItemAttribute from "./ItemAttribute";

const ItemAttributes = ({ itemAttributes }) => {
  return (
    <div className="item-attributes">
      {itemAttributes.map((attr, ind) => (
        <ItemAttribute key={ind} header={attr} />
      ))}
    </div>
  );
};

export default ItemAttributes;
