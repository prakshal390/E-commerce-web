

import React, { createContext, useState } from "react";

// Context banana taaki cart data poore app me use ho sake
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // cartItems start me empty array hoga
  const [cartItems, setCartItems] = useState([]);

  // productId and selectedSize Product.jsx se aa rahe hain
  const addToCart = (productId, selectedSize) => {
    // agar size select nahi hui
    if (!selectedSize) {
      alert("Pehle size select karo");
      return;
    }

    // previous cart state ke basis par update karenge
    setCartItems((prevItems) => {
      // pehle purane cart ka copy bana lo
      let updatedCart = [...prevItems];

      // product dhundo ki yeh pehle se cart me hai ya nahi
      let productObj = updatedCart.find((item) => item.productId === productId);

      // agar product mil gaya
      if (productObj) {
        // ab us product ke andar size dhundo
        let sizeObj = productObj.sizes.find(
          (item) => item.size === selectedSize
        );

        // agar same size mil gayi to qty bada do
        if (sizeObj) {
          sizeObj.qty = sizeObj.qty + 1;

          console.log("Same product and same size mila");   //// IMPORTANT
          console.log("Updated Cart:", updatedCart);        //// IMPORTANT
          console.log("Current Product:", productObj);      //// IMPORTANT

          return [...updatedCart];
        }

        // agar size nahi mili to nayi size add karo
        productObj.sizes.push({
          size: selectedSize,
          qty: 1,
        });

        console.log("Same product mila, lekin new size add hui");
        console.log("Updated Cart:", updatedCart);
        console.log("Current Product:", productObj);

        return [...updatedCart];
      }

      // agar product nahi mila to naya product add karo
      updatedCart.push({
        productId: productId,
        sizes: [
          {
            size: selectedSize,
            qty: 1,
          },
        ],
      });

      console.log("Naya product cart me add hua");
      console.log("Updated Cart:", updatedCart);
      console.log(
        "Current Product:",
        updatedCart.find((item) => item.productId === productId)
      );

      return [...updatedCart];
    });
  };

  // provider ke through cartItems aur addToCart sab components ko dena
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;