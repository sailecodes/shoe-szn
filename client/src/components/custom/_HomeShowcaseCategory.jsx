import { gql, useQuery } from "@apollo/client";
import _Item from "./_ItemCard";

const _HomeShowcaseCategory = ({ category }) => {
  const { loading, error, data } = useQuery(
    gql`
      query GetShowcaseItemsFromCategory($itemCategory: String!) {
        data: getShowcaseItemsFromCategory(itemCategory: $itemCategory) {
          item_id
          item_name
          item_price
        }
      }
    `,
    {
      variables: {
        itemCategory: `${category === "Best Streetwear" ? "Streetwear" : "Community Picks"}`,
      },
    }
  );

  if (loading) console.log("loading");
  else if (error) console.log("error");
  else console.log(data.data);

  return (
    <div className="home-showcase-category">
      <header>{category}</header>
      <div className="home-showcase-category--items">
        {data?.data.map((item) => (
          <_Item key={item.item_id} itemName={item.item_name} itemPrice={item.item_price} />
        ))}
      </div>
    </div>
  );
};

export default _HomeShowcaseCategory;
