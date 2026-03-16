import { useEffect,useState } from "react";


function Sample_useState_useEffect_2(){
    const [name,setName] = useState("")
    const [country,setCountry] = useState("")

    useEffect(()=>{
        console.log(country)
        console.log(name)
    },[country,name]);

    return (
        <div>
            <input className="bg-green-200 text-center" type="text" onChange={(e) => setName(e.target.value)} />
            
            
            <center><h1>MY Name Is {name} and My country is {country}</h1></center>


            <select name="" onChange={(e)=>setCountry(e.target.value)}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Brazil">Brazil</option>
            </select>
        </div>
    )
}


export default Sample_useState_useEffect_2