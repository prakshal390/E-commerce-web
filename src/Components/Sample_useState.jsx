import React, { useState } from "react";


function Sample_useState(){
  const [currentStatus, setCurrentStatus] = useState(true);
  console.log(currentStatus)
  return(
            <div><h1>hiii</h1>
            <button onClick={(e) => setCurrentStatus(!currentStatus)} className="bg-red-500">Button</button>
            </div>
            
        )
}

// true -> false

export default Sample_useState