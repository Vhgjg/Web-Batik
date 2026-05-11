import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
      {/* Global FAB from first file, or left out if not needed globally. Let's add it. */}
      <button className="fixed bottom-xl right-xl bg-primary text-white w-xxl h-xxl rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-40">
        <span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
      </button>
    </>
  );
}
