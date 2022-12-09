import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App bg-black">
      <Header />

      <Routes>
          <Route path="/" element={<Homepage />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
