import { useState } from 'react'
import './App.css'
import Word from './components/Word'
import Home from './components/Home'
import Number from './components/Number'
import Blue from './components/Blue'
import { Route , Routes , Links } from 'react-router-dom'



function App() {
  


  return (
    <>
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/word/:word' element={<Word />} />
      <Route path='/number/:number' element={<Number />} />
      <Route path='/blue/:word/:color' element={<Blue />} />
    </Routes>
   



    </>
  )
}

export default App
