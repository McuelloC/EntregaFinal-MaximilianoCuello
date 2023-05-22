import { CartContext } from "./CartContex";
import { useState } from "react";

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartPrice,setCartPrice] = useState(0);
 


  const addToCart = (item, quantity, id, price) => {
    const isInCart = cartList.some((item) => item.id === id);
  
    if (quantity !== undefined) {
      price *= quantity;
    }
  
    if (!isInCart) {
      setCartList([...cartList, { item, quantity, id, price }]);
      setCartPrice(prevPrice => prevPrice + price);
      
    }
  };
 

  const removeList = () => {
    setCartList([]);
    setCartPrice(0);
  };
  const deleteItem = (id) => {
    const deleteItemCartList = cartList.filter((item) => item.id !== id);
    const newPrice = deleteItemCartList.reduce((total, item) => total + item.price, 0);
    setCartList(deleteItemCartList);
    setCartPrice(newPrice);
  };


  return (
    <CartContext.Provider
      value={{ cartList,cartPrice, addToCart, deleteItem, removeList }}
    >
      {children}
    </CartContext.Provider>
  );
};
