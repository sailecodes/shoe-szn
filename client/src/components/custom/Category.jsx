import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import ItemCard from "./ItemCard";
import categoryBg from "../../assets/imgs/categoryBG1.jpg";

const Category = ({ categoryName }) => {
  const [sortMethod, setSortMethod] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const { loading, error, data } = useQuery(
    gql`
      query GetAllItemsFromCategory($itemCategory: String!, $pageNumber: Int!) {
        data: getAllItemsFromCategory(itemCategory: $itemCategory, pageNumber: $pageNumber) {
          item_id
          item_name
          item_price
          item_sizes
        }
      }
    `,
    {
      variables: {
        itemCategory: categoryName,
        pageNumber: pageNumber,
      },
    }
  );

  // if (sortMethod === "name-asc") {
  //   shoes = Object.entries(shoes)
  //     .sort((a, b) => a[1].name.localeCompare(b[1].name))
  //     .map((shoe) => shoe[1]);
  // } else if (sortMethod === "name-desc") {
  //   shoes = Object.entries(shoes)
  //     .sort((a, b) => b[1].name.localeCompare(a[1].name))
  //     .map((shoe) => shoe[1]);
  // } else if (sortMethod === "price-asc") {
  //   shoes = Object.entries(shoes)
  //     .sort((a, b) => Number(a[1].price.substring(1)) - Number(b[1].price.substring(1)))
  //     .map((shoe) => shoe[1]);
  // } else if (sortMethod === "price-desc") {
  //   shoes = Object.entries(shoes)
  //     .sort((a, b) => Number(b[1].price.substring(1)) - Number(a[1].price.substring(1)))
  //     .map((shoe) => shoe[1]);
  // }

  // const res = gql`

  // `);

  if (loading) console.log("loading");
  else if (error) console.log("error");
  else if (data.data) console.log(data);

  return (
    <main className="category">
      <div className="category--backdrop" style={{ backgroundImage: `url(${categoryBg})` }}>
        {categoryName + "."}
      </div>
      <div>
        <div>
          <div className="category--filters">
            <p>4 products</p>
            <select name="category--filters-sort">
              <option value="" selected disabled hidden>
                Sort by
              </option>
              <option value="name-asc">A-Z</option>
              <option value="name-desc">Z-A</option>
              <option value="price-asc">Price: Low-High</option>
              <option value="price-desc">Price: High-Low</option>
            </select>
          </div>
          <div className="category--items">
            {data?.data.map((item) => (
              <ItemCard key={item.item_id} itemName={item.item_name} itemPrice={item.item_price} isCategoryItem />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
