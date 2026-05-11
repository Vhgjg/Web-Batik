import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-900/10 dark:border-white/10 shadow-[0_8px_30px_rgb(0,31,63,0.05)] transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center w-full px-[5.6%] py-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 cursor-pointer hover:text-sky-400 transition-colors duration-300" data-icon="menu">menu</span>
          <span className="font-serif tracking-[0.2em] uppercase text-xs md:text-sm text-sky-400 dark:text-sky-300">Catalogue</span>
        </div>
        <Link to="/" className="text-xl font-light tracking-[0.4em] text-slate-900 dark:text-slate-100">
          <h1>SERENE</h1>
        </Link>
        <div className="flex items-center gap-xl">
          <nav className="hidden md:flex gap-xl">
            <Link className="font-serif tracking-[0.2em] uppercase text-xs text-sky-500 font-semibold transition-colors duration-300" to="/products">Collection</Link>
            <a className="font-serif tracking-[0.2em] uppercase text-xs text-slate-600 dark:text-slate-400 hover:text-sky-400 transition-colors duration-300" href="#">Process</a>
            <a className="font-serif tracking-[0.2em] uppercase text-xs text-slate-600 dark:text-slate-400 hover:text-sky-400 transition-colors duration-300" href="#">About</a>
          </nav>
          <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 cursor-pointer hover:text-sky-400 transition-colors duration-300" data-icon="shopping_bag">shopping_bag</span>
        </div>
      </div>
    </header>
  );
}
