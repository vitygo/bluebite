import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [inCartPosition, setInCartPosition] = useState([]);

  function handleAddToCart(item) {
    setInCartPosition((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return [...prev, { ...item, amount: 1 }];
    });
    toast.success(`${item.name} dodano do koszyka!`);
  }

  function handleRemoveFromCart(id) {
    setInCartPosition((prev) => prev.filter((item) => item.id !== id));
  }

  function handleIncreaseAmount(id) {
    setInCartPosition((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  }

  function handleDecreaseAmount(id) {
    setInCartPosition((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            if (item.amount === 1) return null;
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter(Boolean)
    );
  }

  function handleClearCart() {
    setInCartPosition([]);
    toast.success("Koszyk został wyczyszczony!");
  }

  return (
    <CartContext.Provider
      value={{
        inCartPosition,
        handleAddToCart,
        handleRemoveFromCart,
        handleIncreaseAmount,
        handleDecreaseAmount,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
