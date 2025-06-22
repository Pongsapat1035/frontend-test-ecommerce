import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from "react";
import type { CartItem } from "./type";

export interface MyContextType {
  cartItem: number;
  addToCart: Function;
}

const CartContext = createContext<MyContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactElement }) {
  const [cartItem, setCartItem] = useState(0);

  const getTotalCart = () => {
    const cart = localStorage.getItem("mycart");
    const convertCart: CartItem[] = cart
      ? (JSON.parse(cart) as CartItem[])
      : [];
    const totalItem = convertCart.reduce((acc, curr) => acc + curr.quantity, 0);
    setCartItem(totalItem);
  };

  const addToCart = (id: number, quantity: number) => {
    const newItem = { id, quantity };
    const response = localStorage.getItem("mycart");

    const cart = response ? JSON.parse(response) : [];
    const index = cart.findIndex((item: any) => item.id === id);

    if (index !== -1) {
      cart[index].quantity += newItem.quantity;
    } else {
      cart.push(newItem);
    }

    localStorage.setItem("mycart", JSON.stringify(cart));
    getTotalCart();
  };

//   const cart = localStorage.getItem("mycart");
//   const convertedCart: CartItem[] = cart ? JSON.parse(cart) : [];

//   const index = convertedCart.findIndex((item) => item.id === data.id);

//   if (index !== -1) {
//     convertedCart[index].quantity = newQuantity;
//   }

//   localStorage.setItem("mycart", JSON.stringify(convertedCart));

  useEffect(() => {
    getTotalCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
