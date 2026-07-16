/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useReducer, useEffect, useState } from "react";

const CartContext = createContext(null);

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.payload };

    case "ADD_ITEM": {
      const newItem = action.payload;
      // Unique line item key = id + color + size[cite: 1]
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].qty += newItem.qty;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, newItem] };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.color === action.payload.color &&
              item.size === action.payload.size
            )
        ),
      };
    }

    case "UPDATE_QTY": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isMounted, setIsMounted] = useState(false);

  // SSR-safe Hydration from localStorage[cite: 1]
  useEffect(() => {
    const savedCart = localStorage.getItem("banna_cart");
    if (savedCart) {
      try {
        dispatch({ type: "HYDRATE", payload: JSON.parse(savedCart) });
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
    setIsMounted(true);
  }, []);

  // Persist to localStorage whenever cart items change[cite: 1]
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("banna_cart", JSON.stringify(state.items));
    }
  }, [state.items, isMounted]);

  // Actions exposed to context
  const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  
  const removeItem = (id, color, size) =>
    dispatch({ type: "REMOVE_ITEM", payload: { id, color, size } });
    
  const updateQty = (id, color, size, qty) =>
    dispatch({ type: "UPDATE_QTY", payload: { id, color, size, qty } });
    
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  // Derived state
  const subtotal = state.items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  
  const totalItems = state.items.reduce(
    (total, item) => total + item.qty,
    0
  );

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    subtotal,
    totalItems,
    isMounted,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}