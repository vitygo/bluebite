import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export function Cart() {
  const cartItems = useSelector((state) => state.cart.value);

  return (
    <div className="cart">
      <div className="cart__header">
        <IoCartOutline size="20px" />
        <p className="cart__header-title">{`Koszyk ()`}</p>

        <button className="cart__empty-cart-btn">Wyczyść</button>
      </div>

      <div className="cart__selected-positions">
        {cartItems.map(item => <CartPosition name={item.name} image={item.image}/>)}
      </div>

      <p className="cart__total-price">{`Razem:  zł`}</p>
      <Link to="/checkout">
        <button className="cart__order-btn">Zamów</button>
      </Link>
    </div>
  );
}

export function CartPositon({image, name}) {
  return (
    <div className="cart-position">
      <div className="cart-position__header">
        <img className="cart-position__img" src={image} alt="" />
        <p className="cart-position__title">{name}</p>
        <button className="cart-position__remove-btn">
          <RxCross2 />
        </button>
      </div>

      <div className="cart-position__body">
        <div className="cart-position__amount">
          <button className="amount__btn amount__btn--reduce">-</button>
          <p className="amount__amount"></p>
          <button className="amount__btn amount__btn--increase">+</button>
        </div>
        <p className="cart-position__price">zł</p>
      </div>
    </div>
  );
}
