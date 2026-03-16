// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from './Pages/Home.jsx'
// import About from './Pages/About.jsx'
// import Products from './Components/Products.jsx'
// import Sample_useState from './Components/Sample_useState.jsx'
// import Sample_useEffect from './Components/Sample_useEffect.jsx'
// import Sample_useState_useEffect_2 from './Components/Sample_useState_useEffect_2.jsx'
// import Data_Lakeare from './Components/Data_Lakeare.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './Context/CartContext.jsx'


 


createRoot(document.getElementById('root')).render(
  
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>


    // {/* <Home /> */}
    // {/* <About/> */}

    // {/* <Products/> */}

    // {/* <Sample_useState/> */}

    // {/* <Sample_useEffect/> */}

    // {/* <Sample_useState_useEffect_2/> */}

    // {/* <Data_Lakeare/> */}

   
 
)
