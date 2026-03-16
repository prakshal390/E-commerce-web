import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/asset/assets";
import { productReviews } from "../assets/reviews";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { CartContext } from "../Context/CartContext";
import RelatedProduct from "../Components/RelatedProduct";

const Product = () => {
  const { pid } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);
  const [image, setImage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [likes, setLikes] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log("PID:", pid);                                    // show product id
    console.log("Products:", products);                          // show all available product

    const foundProduct = products.find((p) => p.id === pid);     // check and compare click vali pid with actual object json vali id k sath OR Finding the Clicked Product
    console.log("Single Product:", foundProduct);                // show that particular singleProduct OR Show Found Product

    if (foundProduct) {
      setSingleProduct(foundProduct);
      setImage(foundProduct.image[0]);                           //Sets first image as default image which shows on Main Image
    }

    const reviewData = productReviews[pid];

    if (reviewData) {
      setReviews(reviewData.reviews);
      setLikes(reviewData.likes);
    }
  }, [pid]);

  return (
    <div>
      <Header />

      {singleProduct && (                                       // If product exists → show UI   If not → show nothing
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* Product Section */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Thumbnail Images */}
            <div className="thumbnail flex gap-4">
              <div className="flex flex-col gap-8">
                {singleProduct.image.map((i, ind) => (
                  <img
                    key={ind}
                    src={i}
                    // Image Click Logic   
                    // User clicks image 3  
                    // image = img3
                    onClick={() => setImage(i)}
                    className="w-20 border cursor-pointer hover:scale-105 transition"
                  />
                ))}
              </div>


              {/* Main Image */}
              <img
                src={image}
                className="w-[400px] rounded-lg shadow-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">{singleProduct.name}</h1>

              <p className="text-gray-600">{singleProduct.description}</p>

              <p className="text-2xl font-semibold text-green-600">
                ₹ {singleProduct.price}
              </p>

              {/* Likes */}
              <div className="flex items-center gap-2 text-red-500">
                ❤️ {likes} Likes
              </div>

              {/* Sizes */}
              <div>
                <p className="font-semibold mb-2">Select Size</p>

                <div className="flex gap-3">
                  {singleProduct.sizes.map((size, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSize(size)}
                      className={`border px-4 py-2 transition rounded
                        ${
                          selectedSize === size
                            ? "bg-black text-white"
                            : "hover:bg-black hover:text-white"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* selected size show karne ke liye */}
                <p className="mt-3 text-sm text-gray-500">
                  Selected Size: {selectedSize ? selectedSize : "None"}
                </p>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(singleProduct.id, selectedSize)}   // ye dono cartContext.jsx ma ja rahi hai
                className="bg-black text-white py-3 rounded-lg hover:bg-gray-500 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>

            <div className="space-y-5">
              {reviews.length > 0 ? (
                reviews.map((rev, i) => (
                  <div
                    key={i}
                    className="border p-4 rounded-lg shadow-sm"
                  >
                    <p className="font-semibold">{rev.user}</p>

                    <p className="text-yellow-500">
                      {"⭐".repeat(rev.rating)}
                    </p>

                    <p className="text-gray-600">{rev.comment}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet</p>
              )}
            </div>
          </div>



            {/* Related Product */}
              <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Related Product</h2>
              {/* Related Product  */}
              <RelatedProduct category={singleProduct.category} subcategory={singleProduct.subCategory} /> 
              
             </div>


        </div>

        
      )}

            

             

      <Footer />
    </div>
  );
};

export default Product;