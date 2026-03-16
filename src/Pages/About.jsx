import AboutCom from "../Components/AboutCom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Hero from "../Components/Hero"

function About(){
    return(
        <div className="bg-zinc-700">
            <Header/>
            <AboutCom/>
            <Footer/>

        </div>
    )
}



export default About