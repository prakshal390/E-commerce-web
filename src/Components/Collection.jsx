


import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "../Pages/Card";
import { products } from "../assets/asset/assets";

const Collection = () => {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState(350);

  let filteredProducts = products
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => item.price <= priceRange);

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-zinc-700 min-h-screen text-white">

      <Header />


      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row p-6 gap-6">


        {/* Sidebar */}
        <div className="lg:w-[20%] bg-zinc-800 p-5 rounded-lg shadow-lg">

          <h2 className="text-xl font-bold mb-4">Filters</h2>


          {/* Price Range */}
          <div>
            <p className="mb-3 font-semibold">Price Range</p>

            <input
              type="range"
              min="0"
              max="370"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full accent-green-500"
            />

            <p className="mt-2 text-sm text-gray-300">
              Up to ₹{priceRange}
            </p>
          </div>

        </div>






        {/* Product Section */}
        <div className="lg:w-[80%]">

          {/* Top Controls */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

            {/* Search Bar */}
            <input
              type="text"
              placeholder="🔍 Search product..."
              className="p-3 rounded-lg bg-yellow-300 text-black w-full md:w-[60%] shadow-md focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Sorting */}
            <select
              className="p-3 rounded-lg bg-blue-400 text-black shadow-md cursor-pointer"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredProducts.map((obj,key) => (
              <Card
                key={key}
                id={obj.id}
                name={obj.name}
                image={obj.image[0]}
                description={obj.description}
                category={obj.category}
                subCategory={obj.subCategory}
                price={obj.price}
              />
            ))}

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Collection;