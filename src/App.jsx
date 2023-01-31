import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
      </Routes>
    </div>
  )
}

export default App
