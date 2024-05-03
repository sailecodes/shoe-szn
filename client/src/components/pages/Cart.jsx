import { Link } from "react-router-dom";

import banana from "../../assets/imgs/VU-Banana-1000x1000.png";

const Cart = () => {
  return (
    <section className="cart">
      <div className="cart--container">
        <header>Cart</header>
        <div className="cart--items">
          <CartItem />
          <CartItem />
        </div>
      </div>
    </section>
  );
};

const CartItem = () => {
  return (
    <div className="cart-item">
      <img src={banana} alt="" />
      <div className="cart-item--information">
        <p className="cart-item--information-name">Nike Green II</p>
        <p className="cart-item--information-price">$129.99</p>
        <p className="cart-item--information-size">Size: 8</p>
      </div>
      <div className="cart-item--btns">
        <Link to="">See item</Link>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Cart;
