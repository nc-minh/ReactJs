import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to='/header'>Header</Link>
      <Link to='/'>Index</Link>
      <Routes>
        <Route path='/header' element={<Header/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
