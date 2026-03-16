import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/assets/assets";

function Product() {
  let { pid } = useParams();
  const [image, setImage] = useState(false);
  const [singleProduct, setSingleProduct] = useState(false);
  useEffect(() => {
    let singleProduct1 = products.find((i) => i._id == pid);
    if (singleProduct1) {
      setSingleProduct(singleProduct1);
      setImage(singleProduct1.image[0]);
    }
    console.log(singleProduct);
  }, [pid]);
  return (
    <div>
      {singleProduct && (
        <div className="flex mx-10 mt-14">
          <div className="left flex gap-4">
            <div className="thumbnail flex sm:flex-col flex-row gap-3">{
                
                    singleProduct.image.map((i,ind)=>(
                        <img key={ind} onClick={()=>setImage(i)} className="w-24 cursor-pointer" src={i} alt="" />
                    ))
                
            }</div>
            <div className="image">
                <img src={image} alt="" />
            </div>
          </div>
          <div className="right"></div>
        </div>
      )}
    </div>
  );
}

export default Product;
