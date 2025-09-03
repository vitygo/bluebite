import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";


export function Cart() {
  const {
    inCartPosition,
    handleRemoveFromCart,
    handleIncreaseAmount,
    handleDecreaseAmount,
    handleClearCart,
  } = useCart();

  const totalPrice = inCartPosition.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  return (
    <div className="cart">
      <div className="cart__header">
        <IoCartOutline size="20px" />
        <p className="cart__header-title">
          {`Koszyk (${inCartPosition.reduce((t, i) => t + i.amount, 0)})`}
        </p>
        {inCartPosition.length > 0 && (
          <button className="cart__empty-cart-btn" onClick={handleClearCart}>
            Wyczyść
          </button>
        )}
      </div>

      <div className="cart__selected-positions">
        {inCartPosition.length > 0 ? (
          inCartPosition.map((item) => (
            <CartPositon
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              amount={item.amount}
              onRemove={() => handleRemoveFromCart(item.id)}
              onIncrease={() => handleIncreaseAmount(item.id)}
              onDecrease={() => handleDecreaseAmount(item.id)}
            />
          ))
        ) : (
          <div className="cart__body">
            <img className="cart__body-img" src="./empty-box.png" alt="" />
            <p className="cart__body-empty-text">Twój koszyk jest pusty.</p>
          </div>
        )}
      </div>

      {inCartPosition.length > 0 && (
        <>
          <p className="cart__total-price">
            {`Razem: ${totalPrice.toFixed(2)} zł`}
          </p>
          <Link to="/checkout">
      <button className="cart__order-btn">Zamów</button>
    </Link>
        </>
      )}
    </div>
  );
}

export function CartPositon({
  name,
  price,
  image,
  amount,
  onRemove,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="cart-position">
      <div className="cart-position__header">
        <img className="cart-position__img" src={image} alt="" />
        <p className="cart-position__title">{name}</p>
        <button className="cart-position__remove-btn" onClick={onRemove}>
          <RxCross2 />
        </button>
      </div>

      <div className="cart-position__body">
        <div className="cart-position__amount">
          <button
            className="amount__btn amount__btn--reduce"
            onClick={onDecrease}
          >
            -
          </button>
          <p className="amount__amount">{amount}</p>
          <button
            className="amount__btn amount__btn--increase"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
        <p className="cart-position__price">
          {(price * amount).toFixed(2)} zł
        </p>
      </div>
    </div>
  );
}
