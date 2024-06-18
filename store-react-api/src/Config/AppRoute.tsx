import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import SingleProduct from '../Pages/SingleProduct'
import Products from '../Pages/Products'

export default function AppRoute() {
  return (
    <>  
    <BrowserRouter>
    <Routes>
        <Route path='Products' element={<Products/>} />
        <Route path='Singleproducts' element={<SingleProduct/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
