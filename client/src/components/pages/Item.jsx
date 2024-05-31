import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import tmpImg from "../../assets/imgs/sneakers.jpg";
import ItemAttributes from "../custom/ItemAttributes";

const Item = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(
    gql`
      query GetItem($itemId: ID!) {
        data: getItem(itemId: $itemId) {
          item_id
          item_name
          item_price
          item_description
          item_sizes
          item_attributes
        }
      }
    `,
    {
      variables: {
        itemId: id,
      },
    }
  );

  const handleAddToCart = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (Object.keys(data).length === 0) return;
  };

  if (loading || !data) console.log("[Item.jsx] Loading data...");
  else if (error) console.log("[Item.jsx] Error...");

  return (
    <section className="item">
      <div>
        <div className="item--imgs">
          <div className="item--imgs-img-container">
            <img src={tmpImg} alt="" />
          </div>
          <div className="item--imgs-img-container">
            <img src={tmpImg} alt="" />
          </div>
          <div className="item--imgs-img-container">
            <img src={tmpImg} alt="" />
          </div>
          <div className="item--imgs-img-container">
            <img src={tmpImg} alt="" />
          </div>
        </div>
        <div className="item--details">
          <p className="item--details-name">{data?.data.item_name}</p>
          <p className="item--details-price">{data?.data.item_price}</p>
          <p className="item--details-description">{data?.data.item_description}</p>
          <form onSubmit={handleAddToCart}>
            <select name="shoe-size">
              <option value="" selected disabled hidden>
                Size
              </option>
              {data?.data.item_sizes.map((size, ind) => (
                <option key={ind} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <button>Add to cart</button>
          </form>
          <ItemAttributes itemAttributes={data?.data ? data.data.item_attributes : []} />
        </div>
      </div>
    </section>
  );
};

export default Item;
