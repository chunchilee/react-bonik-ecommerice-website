import { createContext, useContext, useState } from "react";
import Data from "../components/Data";

const Context = createContext();

const Provider = ({ children }) => {
  const [CartItem, setCartItem] = useState([]);
  const { productItems } = Data;

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    console.log(productExit);
    if (productExit) {
      setCartItem(
        // 購物車內新增item
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    //點擊的Cart === CartItem[i].id ，qty===1 刪除Cart ，或將Cart.qty-1
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  // console.log(CartItem);
  const valueProps = {
    CartItem,
    productItems,
    addToCart,
    decreaseQty,
  };
  return <Context.Provider value={valueProps}>{children}</Context.Provider>;
};

const useProductItemsContext = () => {
  return useContext(Context);
};

export { useProductItemsContext };
export { Provider };
