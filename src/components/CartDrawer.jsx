import React from 'react';

export default function CartDrawer() {
  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-[38.2%] bg-[#F9F9F7] dark:bg-slate-900 shadow-2xl border-l border-slate-900/5 z-[60] flex flex-col p-[34px] translate-x-full transition-transform duration-500 ease-out-expo hidden" id="cart-drawer">
      <div className="flex justify-between items-center mb-xxl">
        <h2 className="font-serif italic text-lg text-slate-800 dark:text-slate-200">CART</h2>
        <button className="material-symbols-outlined" data-icon="close">close</button>
      </div>
      <div className="flex-grow flex flex-col gap-lg overflow-y-auto">
        <div className="text-center py-xxxl">
          <span className="material-symbols-outlined text-slate-300 text-6xl mb-md" data-icon="shopping_basket">shopping_basket</span>
          <p className="font-body-lg text-body-lg text-outline">Your basket is waiting for a story.</p>
        </div>
        <div className="mt-auto border-t border-slate-200 pt-xl">
          <p className="font-label-caps text-[10px] text-outline mb-md">EXPLORE COLLECTIONS</p>
          <div className="flex flex-col gap-sm">
            <a className="flex items-center gap-md p-md bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-200 border-r-2 border-sky-400 font-sans tracking-widest text-sm hover:pl-2 transition-all duration-300" href="#">
              <span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span> Heritage Collection
            </a>
            <a className="flex items-center gap-md p-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 font-sans tracking-widest text-sm hover:pl-2 transition-all duration-300" href="#">
              <span className="material-symbols-outlined" data-icon="diamond">diamond</span> Silk Series
            </a>
            <a className="flex items-center gap-md p-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 font-sans tracking-widest text-sm hover:pl-2 transition-all duration-300" href="#">
              <span className="material-symbols-outlined" data-icon="style">style</span> Modern Batik
            </a>
          </div>
        </div>
      </div>
      <button className="w-full bg-primary py-xl text-on-primary font-label-caps tracking-[0.2em] mt-xl hover:bg-on-primary-fixed-variant transition-colors">
        CHECKOUT
      </button>
    </div>
  );
}
