import { useEffect, useState } from "react";


function Sample_useEffect(){

const [count,setcount] = useState(0);

useEffect(()=>{
    console.log("Count Change :-",count)
},[count])


return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setcount(count+1)}>
        COUNT INCREASE
    </button>
    </>
)
}

export default Sample_useEffect