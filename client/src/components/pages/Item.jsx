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

  if (loading) console.log("[Item.jsx] Loading data...");
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
          <p className="item--details-name">Nike Earths</p>
          <p className="item--details-price">$99.99</p>
          <p className="item--details-description">
            Crafted with precision and attention to detail, these shoes are designed to elevate every step of your
            journey, whether you&apos;re navigating city streets or exploring the great outdoors.
          </p>
          <form onSubmit={handleAddToCart}>
            <select name="shoe-size">
              <option value="" selected disabled hidden>
                Size
              </option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9.5">9.5</option>
              <option value="12">12</option>
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
