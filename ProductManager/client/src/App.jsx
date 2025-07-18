import { useState } from 'react'
import ProudectCreate from './Components/ProudectCreate'
import ProductList from './Components/ProudectList'
import { Routes, Route } from 'react-router-dom';
import ProductView from './Components/ProductView';
import ProductUpdate from './Components/ProductUpdate';


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={
            <div>
                <ProudectCreate/>
                <ProductList/>
            </div>
        } />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/product/edit/:id" element={<ProductUpdate />} />
     </Routes>
    </>
  )
}

export default App
