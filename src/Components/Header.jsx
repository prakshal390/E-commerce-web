

import React, { useContext, useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);           //CartContext wale box me jo cartItems hain mujhe de do.

  // Simple for loop se total cart count
  let cartCount = 0;
  console.log("Starting cartCount:", cartCount);           // Starting cartCount: 0 

  for (let i = 0; i < cartItems.length; i++) {
    //Cart me jitne products hain sabko ek-ek karke dekhega
    //   cartItems = [
    //  {productId:1, sizes:[...]},
    // ]
    let product = cartItems[i];
    //Cart me jo product hai usko product variable me rakh lo.
    //product = {productId:1, sizes:[...]}

    // Product console
    console.log("Product:", product);                      // Product: {productId:1, sizes:[...]}
    console.log("Product ID:", product.productId);         // Product ID: 1

    // Size console
    for (let j = 0; j < product.sizes.length; j++) {
      console.log("Size Object:", product.sizes[j]);      // Size Object: {size: 'S', qty: 1}
      console.log("Size Name:", product.sizes[j].size);   // Size Name: S
      console.log("Size Qty:", product.sizes[j].qty);     // Size Qty: 1

      cartCount = cartCount + product.sizes[j].qty;
    }
  }

  console.log("Final cartCount:", cartCount);            //Final cartCount: 1

  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Prakshal_Jain_Cart</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg">
          <Link className="cursor-pointer hover:text-yellow-400" to="/">
            Home
          </Link>
          <Link className="cursor-pointer hover:text-yellow-400" to="/about">
            About
          </Link>
          <Link className="cursor-pointer hover:text-yellow-400" to="/products">
            Products
          </Link>
          <Link className="cursor-pointer hover:text-yellow-400" to="/contact">
            Contact
          </Link>
          <Link className="cursor-pointer hover:text-yellow-400" to="/collection">
            Collection
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="hidden md:flex gap-6 text-xl items-center">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="cursor-pointer text-2xl" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold min-w-5 h-5 px-1 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/login">
            <FaUser className="cursor-pointer text-2xl" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6">
          <Link className="cursor-pointer hover:text-yellow-400" to="/">
            Home
          </Link>
          <Link className="cursor-pointer hover:text-yellow-400" to="/about">
            About
          </Link>
          <Link className="cursor-pointer hover:text-yellow-400" to="/products">
            Products
          </Link>
          <Link className="cursor-pointer hover:text-yellow-400" to="/contact">
            Contact
          </Link>
          <Link className="cursor-pointer hover:text-yellow-400" to="/collection">
            Collection
          </Link>

          <Link to="/cart" className="flex gap-2 items-center relative">
            <FaShoppingCart />
            Cart

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-6 bg-red-500 text-white text-[10px] font-bold min-w-5 h-5 px-1 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/login" className="flex gap-2 items-center">
            <FaUser />
            Login
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;