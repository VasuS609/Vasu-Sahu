"use client"

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'

const App = () => {
  return (
    <div className="w-screen h-screen bg-white overflow-auto">
    <head>
      <title>Portfolio</title>
    </head>
  <Dashboard/>
    </div>
  
  )
}

export default App
