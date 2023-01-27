import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const HatsPage = () => (
      <div>
        <p>Get your Hats here</p>
      </div>
  )

  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/hats" element={<HatsPage/>} />
      </Routes>
    </div>
  )
}

export default App
