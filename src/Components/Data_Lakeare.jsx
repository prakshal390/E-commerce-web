import axios from "axios"
import { useEffect, useState } from "react";


function Data_Lakeare(){
    const[products,setProduct] = useState([])

// arrow function ; async await ; axios ; useEffect is used to fetch data and useState  
    const FetchData = async()=> {
    let data = await axios.get('https://fakestoreapi.com/products')
    

    console.log(data.data);
    setProduct(data.data);
    };

    useEffect(()=>{
        FetchData();
    },[])


    return(
        <div className="flex bg-red-200 "><h1>Get Data</h1>
        {products && products.slice(0,5).map((obj,index) => (

        <div className="">
          <p><img className="" src={obj.image}/> </p>  
          <h3>{obj.title}</h3>
          <h6>{obj.description.slice(0,10)}..</h6>
          <p>₹ {obj.price}</p>
        </div>
       
      ))}        
        </div>
    )
}


export default Data_Lakeare



// Rendering part samjho
// {products && products.slice(0,5).map((obj,index) => (

// Yaha 3 cheezein ho rahi hain:

// ✅ products &&
// // Check karta hai products empty nahi hai

// ✅ slice(0,5)
// Sirf first 5 products le raha hai

// ✅ map()
// Har product ke liye ek div bana raha hai