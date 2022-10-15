import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
      const totalQuantities = JSON.parse(
        localStorage.getItem("totalQuantities")
      );

      if (cartItems.length > 0) {
        setCartItems(cartItems);
      } else {
        localStorage.setItem("cartItems", JSON.stringify([]));
      }

      if (totalPrice) {
        setTotalPrice(totalPrice);
      } else {
        localStorage.setItem("totalPrice", JSON.stringify(0));
      }

      if (totalQuantities) {
        setTotalQuantities(totalQuantities);
      } else {
        localStorage.setItem("totalQuantities", JSON.stringify(0));
      }
    }
  }, []);

  const addToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    localStorage.setItem(
      "totalPrice",
      JSON.stringify(totalPrice + product.price * quantity)
    );
    localStorage.setItem(
      "totalQuantities",
      JSON.stringify(totalQuantities + quantity)
    );

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, product])
      );
    }

    toast.success(`${qty} ${product.name} ditambahkan ke keranjang.`);
  };

  const removeFromCart = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);

    localStorage.setItem(
      "totalPrice",
      JSON.stringify(totalPrice - foundProduct.price * foundProduct.quantity)
    );
    localStorage.setItem(
      "totalQuantities",
      JSON.stringify(totalQuantities - foundProduct.quantity)
    );
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);

      localStorage.setItem(
        "cartItems",
        JSON.stringify([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity + 1 },
        ])
      );
      localStorage.setItem(
        "totalPrice",
        JSON.stringify(totalPrice + foundProduct.price)
      );
      localStorage.setItem(
        "totalQuantities",
        JSON.stringify(totalQuantities + 1)
      );
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);

        localStorage.setItem(
          "cartItems",
          JSON.stringify([
            ...newCartItems,
            { ...foundProduct, quantity: foundProduct.quantity - 1 },
          ])
        );
        localStorage.setItem(
          "totalPrice",
          JSON.stringify(totalPrice - foundProduct.price)
        );
        localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities - 1));
      }
    }
  };

  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrementQty = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        showSearch,
        setShowSearch,
        showSidebar,
        setShowSidebar,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        addToCart,
        removeFromCart,
        toggleCartItemQuantity,
        incrementQty,
        decrementQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
