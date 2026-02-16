import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layouts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layouts;