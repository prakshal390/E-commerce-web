// import React, { useState } from "react";

// const ProductAdded = () => {
//   const [product, setProduct] = useState({
//     id: "",
//     title: "",
//     price: "",
//     category: "",
//     image: "",
//     description: "",
//   });

//   const [addedProduct, setAddedProduct] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleAddProduct = (e) => {
//     e.preventDefault();

//     if (
//       !product.id ||
//       !product.title ||
//       !product.price ||
//       !product.category ||
//       !product.image ||
//       !product.description
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     setAddedProduct(product);

//     alert("Product Added Successfully");

//     setProduct({
//       id: "",
//       title: "",
//       price: "",
//       category: "",
//       image: "",
//       description: "",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 py-10 px-4">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
//         {/* Left Side Form */}
//         <div className="bg-white p-8 rounded-2xl shadow-xl">
//           <h1 className="text-3xl font-bold text-green-600 mb-2">
//             ProductAdded Page
//           </h1>
//           <p className="text-gray-700 mb-6">
//             Welcome Admin, login successful.
//           </p>

//           <form onSubmit={handleAddProduct} className="space-y-4">
//             <div>
//               <label className="block font-medium mb-1">Product ID</label>
//               <input
//                 type="text"
//                 name="id"
//                 value={product.id}
//                 onChange={handleChange}
//                 placeholder="Enter product id"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Product Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={product.title}
//                 onChange={handleChange}
//                 placeholder="Enter product title"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={product.price}
//                 onChange={handleChange}
//                 placeholder="Enter price"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={product.category}
//                 onChange={handleChange}
//                 placeholder="Enter category"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Image URL</label>
//               <input
//                 type="text"
//                 name="image"
//                 value={product.image}
//                 onChange={handleChange}
//                 placeholder="Enter image url"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Description</label>
//               <textarea
//                 name="description"
//                 value={product.description}
//                 onChange={handleChange}
//                 placeholder="Enter product description"
//                 rows="4"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//             >
//               Add Product
//             </button>
//           </form>
//         </div>

//         {/* Right Side Preview */}
//         <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Product Preview
//           </h2>

//           {addedProduct ? (
//             <div className="border rounded-2xl overflow-hidden shadow-md">
//               <img
//                 src={addedProduct.image}
//                 alt={addedProduct.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-5">
//                 <p className="text-sm text-gray-500 mb-2">
//                   Product ID: {addedProduct.id}
//                 </p>

//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                   {addedProduct.title}
//                 </h3>

//                 <p className="text-green-600 font-semibold text-lg mb-2">
//                   ₹ {addedProduct.price}
//                 </p>

//                 <p className="text-sm text-blue-600 mb-2">
//                   Category: {addedProduct.category}
//                 </p>

//                 <p className="text-gray-600">
//                   {addedProduct.description}
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="text-center text-gray-500 border-2 border-dashed rounded-2xl p-10">
//               No product added yet
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductAdded;




























import React, { useState } from "react";

const ProductAdded = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const [addedProduct, setAddedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (
      !product.id ||
      !product.title ||
      !product.price ||
      !product.category ||
      !product.image ||
      !product.description
    ) {
      alert("Please fill all fields");
      return;
    }

    setAddedProduct(product);

    if (isEditing) {
      alert("Product Updated Successfully");
      setIsEditing(false);
    } else {
      alert("Product Added Successfully");
    }

    setProduct({
      id: "",
      title: "",
      price: "",
      category: "",
      image: "",
      description: "",
    });
  };

  const handleEdit = () => {
    setProduct(addedProduct);
    setIsEditing(true);
  };

  const handleDelete = () => {
    setAddedProduct(null);
    setIsEditing(false);

    setProduct({
      id: "",
      title: "",
      price: "",
      category: "",
      image: "",
      description: "",
    });

    alert("Product Deleted Successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Left Side Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            ProductAdded Page
          </h1>
          <p className="text-gray-700 mb-6">
            Welcome Admin, login successful.
          </p>

          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Product ID</label>
              <input
                type="text"
                name="id"
                value={product.id}
                onChange={handleChange}
                placeholder="Enter product id"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Product Title</label>
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={handleChange}
                placeholder="Enter product title"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={product.category}
                onChange={handleChange}
                placeholder="Enter category"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                value={product.image}
                onChange={handleChange}
                placeholder="Enter image url"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Enter product description"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full text-white py-3 rounded-lg font-semibold transition ${
                isEditing
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isEditing ? "Update Product" : "Add Product"}
            </button>
          </form>
        </div>

        {/* Right Side Preview */}
        <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Product Preview
          </h2>

          {addedProduct ? (
            <div className="border rounded-2xl overflow-hidden shadow-md">
              <img
                src={addedProduct.image}
                alt={addedProduct.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">
                  Product ID: {addedProduct.id}
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {addedProduct.title}
                </h3>

                <p className="text-green-600 font-semibold text-lg mb-2">
                  ₹ {addedProduct.price}
                </p>

                <p className="text-sm text-blue-600 mb-2">
                  Category: {addedProduct.category}
                </p>

                <p className="text-gray-600 mb-5">
                  {addedProduct.description}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={handleEdit}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={handleDelete}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 border-2 border-dashed rounded-2xl p-10">
              No product added yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductAdded;