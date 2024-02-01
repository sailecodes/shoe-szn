import gray from "../../assets/imgs/gray-bg.jpg";

import styled from "styled-components";
const ItemWrapper = styled.section`
  display: grid;
  place-items: center;

  padding: 4rem 4rem 0;
  margin-bottom: 4rem;

  .item--container {
    display: flex;
    justify-content: space-between;

    max-width: 150rem;

    border: 1px solid black;
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
  }

  .item--price {
    color: var(--color-primary);

    font-size: var(--font-text-5);
  }

  .item--sizes {
    display: flex;
    gap: 1rem;
  }

  .item--size {
    display: grid;
    place-items: center;

    color: var(--color-primary);

    width: 6rem;
    height: 3.6rem;

    font-size: var(--font-text-3);

    border: 1px solid var(--color-primary);

    transition: color 0.3s, background-color 0.3s;
  }

  .item--size:hover {
    cursor: pointer;

    background-color: var(--color-primary);
    color: var(--color-white);
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
        <div>
          <p className="item--name">Nike Earths asdf asdfdas fadsf ads</p>
          <div className="item--reviews"></div>
          <p className="item--price">$99.99</p>
          <div className="item--sizes">
            {sizes.map((size) => (
              <div
                key={"item--sizes-" + size + "-Nike Earths"}
                className="item--size">
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
};
export default Item;
