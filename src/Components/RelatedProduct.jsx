import React, { useEffect, useState } from 'react'
import { products } from '../assets/asset/assets'
import Card from "../Pages/Card";

const RelatedProduct = ({category,subcategory}) => {
    const [related,setRelated] = useState([])

    useEffect(()=>{                      
            let pcopy = products.slice()
            console.log("before :- ",pcopy)           // Shows all 52 product
            pcopy = pcopy.filter((i)=> category == i.category)
            console.log("after catogory :- ",pcopy)   // filter the product by category
            pcopy = pcopy.filter((i)=> subcategory == i.subCategory)
            console.log("after subcatogory :- ",pcopy) // filter the product by subcategory
            setRelated(pcopy)
        
    },[])
  return (
    <div>
        {/* RelatedProduct */}
        {/* <h1>category:{category}</h1>
        <h1>subcatory:{subcategory}</h1> */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {related.slice(0,4).map((obj,key) => (      // map and show all related product
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
  )
}

export default RelatedProduct