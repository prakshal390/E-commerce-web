

import { useState } from "react";
import videoBg from "../assets/abstract.mp4";
import { products } from "../assets/asset/assets";
import Card from "../Pages/Card";

function Hero() {

  const [productData] = useState(products);

  return (
    <section className="relative w-full overflow-hidden">

      {/* Background Video */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[100vh] object-cover"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>



      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-[100vh] text-center text-white px-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl">
          I am <span className="text-yellow-400 font-semibold">Prakshal Jain</span>
          <br />
          and This is My E-Commerce Website.
        </p>

      </div>



      {/* Latest Collection */}
      <div className="relative z-10 bg-white py-16">

        <h1 className="text-center text-4xl font-bold mb-12">
          Latest Collection
        </h1>

        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {productData.slice(0,10).map((obj,key) => (
            <Card
              id={obj.id}
              title={obj.title}
              image={obj.image[0]}
              description={obj.description}
              category={obj.category}
              subCategory={obj.subCategory}
              price={obj.price}

              
            />
          ))}

        </div>
      </div>



      {/* Best Seller */}
      <div className="relative z-10 bg-white py-16">

        <h1 className="text-center text-4xl font-bold mb-12">
          Best Seller
        </h1>

        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {productData.slice(20,25).map((obj) => (
            <Card
              id={obj.id}
              title={obj.title}
              image={obj.image[0]}
              description={obj.description}
              category={obj.category}
              subCategory={obj.subCategory}
              price={obj.price}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;