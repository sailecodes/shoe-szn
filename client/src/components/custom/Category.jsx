import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import ItemCard from "./ItemCard";
import categoryBg from "../../assets/imgs/categoryBG1.jpg";
import { sortItems } from "../../util/utilities";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Category = ({ categoryName }) => {
  const [sortMethod, setSortMethod] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);

  let { loading, error, refetch } = useQuery(
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
      onCompleted: ({ data }) => setData(data),
    }
  );

  const handleSortChange = (e) => {
    setSortMethod(e.target.value);
    setData(sortItems(data, e.target.value));
  };

  const handlePageChange = (newPageNumber) => {
    if (newPageNumber < 0 && newPageNumber > 1) return; // FIXME:

    setPageNumber(newPageNumber);
    refetch({ pageNumber: newPageNumber });
  };

  if (loading) console.log("loading");
  else if (error) console.log("error");

  return (
    <main className="category">
      <div className="category--backdrop" style={{ backgroundImage: `url(${categoryBg})` }}>
        {categoryName + "."}
      </div>
      <div>
        <div>
          <div className="category--filters">
            <p>4 products</p>
            <select name="category--filters-sort" value={sortMethod} onChange={handleSortChange}>
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
            {data.map((item) => (
              <ItemCard
                key={item.item_id}
                itemId={item.item_id}
                itemName={item.item_name}
                itemPrice={item.item_price}
                isCategoryItem
              />
            ))}
          </div>
          {/* <nav className="category--pages">
            <button onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 0 ? true : false}>
              <RiArrowLeftSLine />
            </button>
            <button onClick={() => handlePageChange(pageNumber + 1)}>
              <RiArrowRightSLine />
            </button>
          </nav> */}
        </div>
      </div>
    </main>
  );
};

export default Category;
