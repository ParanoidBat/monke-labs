import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const context = { cart, setCart };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
