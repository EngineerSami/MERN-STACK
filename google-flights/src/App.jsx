import { useState } from 'react'
import NavBar from './components/navbar'
import MidPage from './components/midpage'
import FAQ from './components/faq'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <MidPage />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
