"use client"

import React from 'react';
import { Link } from 'next/link';
import Header from '../components/Header';
import Body from '../components/body';
import Footer from '../components/footer';

const Dashboard = () => {
  return (
    <div className='bg-white w-screen h-screen text-black'>
     <nav>
      <Header/>
     </nav>

     <main>
      <Body/>
     </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Dashboard
