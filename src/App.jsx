import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Wheelsapp from "./components/Wheelsapp"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App bg-black text-white">
      <Header />

      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/wheelsapp" element={<Wheelsapp />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
