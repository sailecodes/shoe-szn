import gray from "../../assets/imgs/gray-bg.jpg";

import styled from "styled-components";
const ItemWrapper = styled.section`
  display: grid;
  place-items: center;

  padding-top: 4rem;
  margin-bottom: 4rem;

  .item--container {
    display: flex;

    width: 150rem;

    border: 1px solid black;

    padding: 0 4rem;
  }

  .item--images {
    display: flex;
    flex-wrap: wrap;

    max-width: 86rem;
  }

  .item--images img {
    width: 40rem;
    height: 40rem;
  }

  .item--name {
    color: var(--color-primary);

    font-size: var(--font-text-7);
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 5dvh;

    margin-bottom: 1rem;
  }

  .item--price {
    color: var(--color-primary);

    font-size: var(--font-text-6);

    margin-bottom: 1rem;
  }

  .item--sizes {
    margin-bottom: 1.5rem;
  }

  select {
    color: var(--color-primary);
    background-color: var(--color-white);

    width: 10rem;
    height: 3.6rem;

    font-size: var(--font-text-3);

    border: 1px solid var(--color-primary);
  }

  button {
    color: var(--color-primary);

    height: 3.6rem;
    width: 20rem;

    font-size: var(--font-text-3);

    border: 1px solid var(--color-primary);

    transition: color 0.3s, background-color 0.3s;
  }

  button:hover {
    color: var(--color-white);
    background-color: var(--color-primary);
  }
`;

const Item = () => {
  const sizes = [8, 9, 12, 15];

  return (
    <ItemWrapper>
      <div className="item--container">
        <div className="item--images">
          <img
            src={gray}
            alt=""
          />
          <img
            src={gray}
            alt=""
          />
          <img
            src={gray}
            alt=""
          />
        </div>
        <div className="item--information">
          <p className="item--name">Nike Earths</p>
          <div className="item--reviews"></div>
          <p className="item--price">$99.99</p>
          <div className="item--sizes">
            <select>
              <option selected="selected">Size</option>
              {sizes.map((size) => (
                <option
                  key={"item--sizes-" + size + "-Nike Earths"}
                  className="item--size">
                  {size}
                </option>
              ))}
            </select>
          </div>
          <button>Add to cart</button>
          <p className="item--description">Hoorah.</p>
          <div className="item--features"></div>
        </div>
      </div>
    </ItemWrapper>
  );
};
export default Item;
