import React from 'react';
import Header from '../components/Header';
import Body from '../components/body';
import Footer from '../components/footer';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <Body activeSection="home" />
      <Footer />
    </div>
  );
}


