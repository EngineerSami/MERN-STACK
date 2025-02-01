import React,{ useState } from 'react'
import NavBar from './components/navbar'
import MidPage from './components/midpage'
import FAQ from './components/faq'
import Footer from './components/footer'
import PopularTrips from './components/Popular-trips'
import SearchFlights from './components/searchFlights'
import MapPart from './components/mapPart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <MidPage />
      <PopularTrips />
      <MapPart />
      <FAQ />
      <SearchFlights />
      <Footer />
    </>
  )
}

export default App
