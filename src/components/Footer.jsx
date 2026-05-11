import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-900/5 bg-white dark:bg-slate-950 pt-[55px] pb-[34px] transition-opacity duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[34px] px-[5.6%] max-w-[1440px] mx-auto">
        <div className="space-y-xl">
          <p className="text-sm font-bold tracking-widest text-slate-900 dark:text-slate-100">SERENE BATIK</p>
          <div className="flex flex-wrap gap-xl">
            <a className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 hover:text-sky-400 transition-colors" href="#">Philosophy</a>
            <a className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 hover:text-sky-400 transition-colors" href="#">Shipping</a>
            <a className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 hover:text-sky-400 transition-colors" href="#">Care Guide</a>
            <a className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 hover:text-sky-400 transition-colors" href="#">Contact</a>
          </div>
        </div>
        <div className="md:text-right space-y-md">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500">
            © 2024 SERENE BATIK. MATHEMATICAL HARMONY.
          </p>
          <div className="flex md:justify-end gap-md">
            <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors" data-icon="share">share</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer transition-colors" data-icon="language">language</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
