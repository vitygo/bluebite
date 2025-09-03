import React, { useState } from "react";
import { useCart } from "./CartContext";
import { CartPositon } from "./Cart/Cart";
import "./CartPage.css";
import DeliverySection from './DeliverySection/DeliverySection'
import { useEffect } from "react";

export default function CartPage() {
  const { 
    inCartPosition, 
    handleRemoveFromCart, 
    handleIncreaseAmount, 
    handleDecreaseAmount, 
    handleClearCart 
  } = useCart();


  const [isOpen, setIsOpen] = useState(true); // старт закритий

  const totalPrice = inCartPosition.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const visibleItems = isOpen ? inCartPosition : inCartPosition.slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="cart-page">

        <DeliverySection/>
      <div className="cart-page__cart">

        {/* Заголовок + кнопка в одному рядку */}
        <div className="cart-page__header">
          <h1 
            onClick={() => setIsOpen(!isOpen)} 
            className="cart-page__title"
          >
            Twój koszyk {isOpen ? "▲" : "▼"}
          </h1>

          {inCartPosition.length > 0 && (
            <button 
              className="cart__empty-cart-btn" 
              onClick={handleClearCart}
            >
              Wyczyść koszyk
            </button>
          )}
        </div>

        <div className={`cart-page__accordion ${isOpen ? "open" : ""}`}>
          {inCartPosition.length === 0 ? (
            <div className="cart__body">
              <img className="cart__body-img" src="./empty-box.png" alt="" />
              <p className="cart__body-empty-text">Twój koszyk jest pusty.</p>
            </div>
          ) : (
            <>
              <div className="cart__selected-positions">
                {visibleItems.map((item, index) => (
                  <div key={item.id} className="cart-page__position-wrapper">
                    <CartPositon
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      amount={item.amount}
                      onRemove={() => handleRemoveFromCart(item.id)}
                      onIncrease={() => handleIncreaseAmount(item.id)}
                      onDecrease={() => handleDecreaseAmount(item.id)}
                    />
                    {index < visibleItems.length - 1 && (
                      <hr className="cart-page__divider" />
                    )}
                  </div>
                ))}
              </div>

              <p className="cart__total-price">
                Razem: {totalPrice.toFixed(2)} zł
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
