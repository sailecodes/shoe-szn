import StarIcon from "../custom/icons/StarIcon";
import ph1000 from "../../assets/imgs/VU-Banana-1000x1000.png";

import styled from "styled-components";
const ItemWrapper = styled.section`
  display: grid;
  place-items: center;

  padding: 4rem 2rem 0 2rem;
  margin-bottom: 4rem;

  .item--container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 150rem;
  }

  .item--images img {
    max-width: 100%;
    height: auto;
  }

  .item--name {
    color: var(--color-primary);

    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.2;

    margin-bottom: 1rem;
  }

  .item--reviews {
    margin-bottom: 0.5rem;
  }

  .item--reviews svg {
    width: 1.6rem;
  }

  .item--price {
    color: var(--color-primary);

    font-size: 2rem;

    margin-bottom: 1rem;
  }

  .item--description {
    color: var(--color-primary);

    font-size: 1.5rem;

    margin-bottom: 2rem;
  }

  .item--btn-container {
    display: flex;
    gap: 1rem;
  }

  select {
    color: var(--color-primary);
    background-color: var(--color-white);

    width: 8rem;
    height: 3.6rem;

    font-size: 1.4rem;

    border: 1px solid var(--color-primary);
  }

  button {
    color: var(--color-primary);

    height: 3.6rem;
    width: 100%;

    font-size: 1.4rem;

    border: 1px solid var(--color-primary);
    margin-left: auto;

    transition: color 0.3s, background-color 0.3s;
  }

  button:hover {
    color: var(--color-white);
    background-color: var(--color-primary);
  }

  @media (min-width: 426px) {
    padding: 4rem 4rem 0 4rem;
  }

  @media (min-width: 530px) {
    .item--name {
      font-size: 3.5rem;
    }

    .item--reviews svg {
      width: 1.8rem;
    }

    .item--price {
      font-size: 2.2rem;
    }

    .item--description {
      font-size: var(--font-text-3);
    }

    select {
      font-size: var(--font-text-3);
    }

    button {
      font-size: var(--font-text-3);
    }
  }

  @media (min-width: 670px) {
    .item--container {
      display: grid;
      grid-template-columns: 40% 1fr;
      column-gap: 3rem;
    }
  }

  @media (min-width: 860px) {
    .item--container {
      grid-template-columns: 60% 1fr;

      padding: 0 4rem;
    }

    .item--name {
      font-size: var(--font-text-7);

      margin-bottom: 0.8rem;
    }

    .item--reviews {
      margin-bottom: 0.4rem;
    }

    .item--reviews svg {
      width: 2rem;
    }

    .item--price {
      font-size: var(--font-text-6);
    }

    .item--description {
      font-size: var(--font-text-3);
    }
  }
`;

const Item = () => {
  const sizes = [8, 9, 12, 15];

  return (
    <ItemWrapper>
      <div className="item--container">
        <div className="item--images">
          <img
            src={ph1000}
            alt=""
          />
        </div>
        <div className="item--information">
          <p className="item--name">Nike Earths</p>
          <div className="item--reviews">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="item--price">$99.99</p>
          <p className="item--description">
            It’s our bestselling boot - but upgraded. Be anywhere and do anything, in a boot that does it all. The Z is
            made with a water resistant upper, extra warm lining and grippy rubber sole. Featuring an inside zip that
            makes it easy to slip them on-and-off for life on the go. And the best part - each pair is 100% vegan and
            made with 95% natural and recycled materials.
          </p>
          <div className="item--btn-container">
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
          </div>
          <div className="item--features"></div>
        </div>
      </div>
    </ItemWrapper>
  );
};
export default Item;
