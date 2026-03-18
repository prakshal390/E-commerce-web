// import React from 'react'
// import Header from '../Components/Header'
// import Footer from '../Components/Footer'

// const CartPage = () => {
//   return (
//     <div>
//         <Header/>
//         CartPage
//         <Footer/>
//     </div>
//   )
// }

// export default CartPage






import React, { useContext } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { CartContext } from "../Context/CartContext";
import { products } from "../assets/asset/assets";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, manageCartItem  } = useContext(CartContext);

  // total price store karne ke liye
  let totalPrice = 0;

  // yaha final cart rows store hongi
  let cartRows = [];

  // yaha page ka main content store hoga
  let pageContent = null;

  // yaha checkout section store hoga
  let checkoutSection = null;

  // ================= EMPTY CART UI =================
  if (cartItems.length === 0) {
    pageContent = (
      <div className="bg-white p-8 rounded-2xl shadow-sm border text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mt-2">
          Pehle products add karo, phir yaha show honge.
        </p>
      </div>
    );
  }

  // ================= CART DATA UI =================
  if (cartItems.length > 0) {
    for (let i = 0; i < cartItems.length; i++) {
      let cartProduct = cartItems[i];

      // products array me matching product dhundo
      let singleProduct = products.find(
        (item) =>
          item._id === cartProduct.productId || item.id === cartProduct.productId
      );

      // agar product nahi mila
      if (!singleProduct) {
        cartRows.push(
          <div
            key={`missing-${i}`}
            className="bg-white p-4 rounded-2xl shadow-sm border"
          >
            <p className="text-red-500 font-medium">
              Product not found for ID: {cartProduct.productId}
            </p>
          </div>
        );

        continue;
      }

      // title nikal lo
      let productTitle = singleProduct.name || singleProduct.title || "No Title";

      // image nikal lo
      let productImage = "";
      if (Array.isArray(singleProduct.image)) {
        productImage = singleProduct.image[0];
      } else {
        productImage = singleProduct.image;
      }

      // fallback image
      if (!productImage) {
        productImage = "https://via.placeholder.com/150";
      }

      // price nikal lo
      let productPrice = singleProduct.price || 0;

      // sizes loop
      for (let j = 0; j < cartProduct.sizes.length; j++) {
        let sizeItem = cartProduct.sizes[j];
        let subTotal = productPrice * sizeItem.qty;

        // total price me add
        totalPrice = totalPrice + subTotal;

        
        
        
        
        
        
        
        cartRows.push(
          <div
            key={`${i}-${j}`}
            className="bg-white rounded-2xl shadow-sm border p-4 md:p-5"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              {/* LEFT SIDE */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {/* product image */}
                <div className="w-full sm:w-28 h-28 border rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <img
                    src={productImage}
                    alt={"Image Not Found"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* product info */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {productTitle}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Product ID: {cartProduct.productId}
                  </p>

                  <p className="text-sm text-gray-500">
                    Size: {sizeItem.size}
                  </p>

                  <p className="text-green-600 font-semibold mt-2">
                    ₹ {productPrice}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    Subtotal: ₹ {subTotal}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:items-center">
                {/* qty section */}
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Update Qty
                  </p>

                  <div className="flex items-center border rounded-xl overflow-hidden w-fit">
                    <button
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg font-semibold"
                      onClick={() =>
                        manageCartItem(cartProduct.productId, sizeItem.size, "dec") //productId, selectedSize, action tum khud pass kar rahe ho button click se
                        
                      }
                    >
                      -
                    </button>

                    <span className="px-5 py-2 font-semibold text-gray-800">
                      {sizeItem.qty}
                    </span>

                    <button
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg font-semibold"
                      onClick={() =>
                        manageCartItem(cartProduct.productId, sizeItem.size, "inc") //productId, selectedSize, action tum khud pass kar rahe ho button click se
                  
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* remove section */}
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Remove
                  </p>

                  <button
                    className="w-11 h-11 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition"
                    onClick={() =>
                      manageCartItem(cartProduct.productId, sizeItem.size, "remove") //productId, selectedSize, action tum khud pass kar rahe ho button click se
                      
                    }
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    pageContent = <div className="space-y-4">{cartRows}</div>;




    checkoutSection = (
      <div className="mt-8 bg-white rounded-2xl shadow-sm border p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Total: ₹ {totalPrice}
          </h2>
          
        </div>

        
        <Link
        to="/checkout"
        className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 font-semibold transition text-center"
        >
        Checkout
        </Link>

      </div>
    );
  }




  


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="max-w-6xl mx-auto w-full px-4 py-6 flex-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Cart Page
        </h1>

        {pageContent}

        {checkoutSection}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;