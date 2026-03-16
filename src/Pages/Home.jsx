// function Home(){
//     return (
//         <h1 className="text-6xl text-cyan-500 font-mono">Home Page</h1>
//     )
// }

import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Hero from "../Components/Hero"



function Home(){
    return (
        <div className="bg-zinc-700">
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    )
}


// p- padding p-4 means padding from all side 4-1rem - 16px

export default Home