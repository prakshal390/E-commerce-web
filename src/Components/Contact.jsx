import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className="bg-zinc-700">
            <Header/>
           <div className="h-[77vh] bg-pink-500 text-center  pt-16 text-white" > <h1 >Hello, MY Contact Number :- <b>8171782872</b> <br/>
           MY Email :- <a href="mailto:jainprakshal@gmail.com" className='text-yellow-500'> <b>jainprakshal@gmail.com</b>  </a>
           
           </h1>  </div>
            <Footer/>

        </div>
  )
}

export default Contact