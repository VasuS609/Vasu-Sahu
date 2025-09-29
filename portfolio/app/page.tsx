"use client"

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'

const App = () => {
  return (
    <>
    <head>
      <title>Portfolio</title>
    </head>
    <main>
      Welcome to my portfolio
    </main>
  <Dashboard/>
    </>
  
  )
}

export default App
