import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

import banana from "../../assets/imgs/VU-Banana-1000x1000.png";
import { useState } from "react";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);

  return (
    <section className="cart">
      <div className="cart--container">
        <header>Shopping Cart</header>
        <div className="cart--subheaders">
          <p>Product</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <div className="cart--items">
          <CartItem />
          <CartItem />
        </div>
        <div className="cart--subtotal">
          <p>Subtotal: ${subtotal}</p>
        </div>
        <button>Checkout</button>
      </div>
    </section>
  );
};

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cart-item">
      <img src={banana} alt="" />
      <div className="cart-item--information">
        <Link to="/item/1" className="cart-item--information-name">
          Nike Green II
        </Link>
        <p className="cart-item--information-price">$129</p>
        <p className="cart-item--information-size">Size: 8</p>
      </div>
      <div className="cart-item--modifiers">
        <div>
          <div className="cart-item--quantity">
            <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
      <p className="cart-item--total">$129</p>
    </div>
  );
};

export default Cart;
