import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Compenent/Navbar/Navbar'
import Footer from './Compenent/Footer/Footer';
import Home from './Compenent/Home/Home';
import About from './Compenent/About/About';
import Contact from './Compenent/Contact/Contact';
import MasterLayout from './Compenent/MasterLayout/MasterLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './Compenent/Products/Products';
import NotFound from './Compenent/NotFound/NotFound';

function App() {
let routes=createBrowserRouter([{path:"/",
element:<MasterLayout/>,
errorElement:<NotFound/>,
children:[
  {index:true,element:<Home/>},
  {path:"home",element:<Home/>},
  {path:"about",element:<About/>},
  {path:"contact",element:<Contact/>},
  {path:"products",element:<Products/>}
]
}])
  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}
export default App
