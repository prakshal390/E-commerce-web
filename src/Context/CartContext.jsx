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





  const manageCartItem = (productId, selectedSize, action) => {
  setCartItems((prevItems) => {
    let updatedCart = structuredClone(prevItems);                           //🔁 Deep copy bana rahe hain taaki original state mutate na ho
    let product = updatedCart.find((item) => item.productId === productId); // 🔍 Step 1: product dhundo cart me
    if (!product) return prevItems;                                         // ❌ agar product nahi mila to state change mat karo

    let size = product.sizes.find((item) => item.size === selectedSize);    // 🔍 Step 2: selected size dhundo us product ke andar
    if (!size) return prevItems;                                            // ❌ agar size nahi mili to state change mat karo

    if (action === "inc") size.qty += 1;                                    // ➕ Step 3: quantity increase
    if (action === "dec") size.qty -= 1;                                    // ➖ Step 4: quantity decrease
    if (action === "remove" || size.qty <= 0)                               // 🗑️ Step 5: remove condition    // ya to action "remove" ho ya qty 0 ho gayi ho
    {                 
      product.sizes = product.sizes.filter((item) => item.size !== selectedSize);   
    }

    updatedCart = updatedCart.filter((item) => item.sizes.length > 0);      // 🧹 Step 6: agar kisi product me koi size nahi bacha to pura product cart se hata do
    return updatedCart;                                                     // ✅ final updated cart return karo
  });
};













  // provider ke through cartItems aur functions sab components ko dena
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, manageCartItem, }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;