import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <main className="pt-[120px]">
      {/* Hero Title Section */}
      <section className="px-[5.6%] max-w-[1440px] mx-auto mb-xxl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-lg">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-primary mb-md block">ARTISANAL HERITAGE</span>
            <h2 className="font-display text-headline-lg md:text-display text-on-surface leading-none">The Essence of Harmony.</h2>
          </div>
          <div className="pb-sm">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
              Discover our curated collection of hand-drawn Batik, where each stroke tells a story of mathematical precision and cultural soul.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Filtering Bar */}
      <section className="sticky top-[80px] z-40 bg-[#F9F9F7]/90 backdrop-blur-md px-[5.6%] py-lg border-y border-slate-900/5 mb-xxl">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-lg">
          <div className="flex flex-wrap items-center gap-md">
            {/* Batik Type Filter */}
            <div className="relative group">
              <button className="flex items-center gap-sm px-xl py-md border-b border-on-surface-variant font-label-caps text-label-caps hover:border-primary transition-all">
                TECHNIQUE <span className="material-symbols-outlined text-[16px]" data-icon="expand_more">expand_more</span>
              </button>
            </div>
            {/* Occasion Filter */}
            <div className="relative group">
              <button className="flex items-center gap-sm px-xl py-md border-b border-on-surface-variant font-label-caps text-label-caps hover:border-primary transition-all">
                OCCASION <span className="material-symbols-outlined text-[16px]" data-icon="expand_more">expand_more</span>
              </button>
            </div>
            {/* Size Filter */}
            <div className="relative group">
              <button className="flex items-center gap-sm px-xl py-md border-b border-on-surface-variant font-label-caps text-label-caps hover:border-primary transition-all">
                SIZE <span className="material-symbols-outlined text-[16px]" data-icon="expand_more">expand_more</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <span className="font-body-sm text-body-sm text-outline">FILTERING BY:</span>
            <div className="bg-primary-container/20 px-md py-xs rounded-sm flex items-center gap-xs">
              <span className="font-label-caps text-[10px] text-on-primary-container">HAND-DRAWN (TULIS)</span>
              <span className="material-symbols-outlined text-[12px] cursor-pointer" data-icon="close">close</span>
            </div>
            <div className="bg-primary-container/20 px-md py-xs rounded-sm flex items-center gap-xs">
              <span className="font-label-caps text-[10px] text-on-primary-container">FORMAL</span>
              <span className="material-symbols-outlined text-[12px] cursor-pointer" data-icon="close">close</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid: Fibonacci-scaled cards */}
      <section className="px-[5.6%] max-w-[1440px] mx-auto mb-xxxl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {/* Product Card 1 */}
          <Link to="/product" className="group relative block bg-white border border-slate-900/5 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)] transition-all duration-500">
            <div className="aspect-[1/1.618] overflow-hidden relative">
              <img alt="Premium Silk Batik" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEKvId1bK9s2RPi5e2P2jRpqmR5-G4KOMKLo7-c-xvvDChnVgNQZfeaxC9iUcGoegLue17a2JRTdC_Cyy8EvXxA-CZIZL8CzjFkP5jt7NQwiNeZ4PSmA8E2kSs-hBlMhuvI5yXlg0ZkH7lYR8LJ_L6ExDqbVhI7ozmk7x2b2OqXdCUc_jEle4ikSyg7me6gmSjWPbXNmxaI8_Uy--9Tad_TwXNp0Is74U8R_Cryw7aGCwejAdAazk97xikQK4SrFONz4UhIpDH9thg" />
              <button className="absolute bottom-xl right-xl bg-primary-container text-on-primary-container p-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
              </button>
              <div className="absolute top-xl left-xl">
                <span className="bg-[#F9F9F7] px-md py-xs font-label-caps text-[10px] text-primary border border-primary/10">HERITAGE</span>
              </div>
            </div>
            <div className="p-xl space-y-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-sm text-body-sm text-outline uppercase tracking-widest">Batik Tulis</p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">The Celestial Shore</h3>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface">$480</p>
              </div>
              <div className="flex gap-xs pt-md">
                <span className="w-3 h-3 rounded-full bg-slate-900"></span>
                <span className="w-3 h-3 rounded-full bg-sky-900"></span>
                <span className="w-3 h-3 rounded-full bg-amber-900"></span>
              </div>
            </div>
          </Link>
          {/* Product Card 2 */}
          <Link to="/product" className="group relative block bg-white border border-slate-900/5 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)] transition-all duration-500 md:mt-xxl">
            <div className="aspect-[1/1.618] overflow-hidden relative">
              <img alt="Modern Indigo Batik" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGeAMG2cl-7jT-ruFFd-QzC_T-OzMYz7CXppah5jkrwHsU9M-AeYX1u0ot5Xs74ktxZEIgnTuBt06RExv4WAz7yW4R4FXs7KhTwpBCABuKhhHrhtCLMk8HEe9R6ONp0QXJ6GDUtKUyP_4fPPRkiVBQFh0TkPcgtfVUyQVgVSh6HeoxFS0xWpjSiAD6INMeAsoHrpYIAhZ-Qa2w4ecqdA3yhEso87a6g8tRD_swYs1fdQ0xsoYOJJS0-OQesI6X91rEJdQCrqZK0T25" />
              <button className="absolute bottom-xl right-xl bg-primary-container text-on-primary-container p-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
              </button>
              <div className="absolute top-xl left-xl">
                <span className="bg-[#F9F9F7] px-md py-xs font-label-caps text-[10px] text-primary border border-primary/10">LIMITED EDITION</span>
              </div>
            </div>
            <div className="p-xl space-y-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-sm text-body-sm text-outline uppercase tracking-widest">Batik Cap</p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Indigo Horizon</h3>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface">$220</p>
              </div>
              <div className="flex gap-xs pt-md">
                <span className="w-3 h-3 rounded-full bg-blue-950"></span>
                <span className="w-3 h-3 rounded-full bg-slate-200"></span>
              </div>
            </div>
          </Link>
          {/* Product Card 3 */}
          <Link to="/product" className="group relative block bg-white border border-slate-900/5 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)] transition-all duration-500">
            <div className="aspect-[1/1.618] overflow-hidden relative">
              <img alt="Luxury Silk Batik" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASBNBMnRKSnUlejPoTTXj49GT_rMAy_Lm6x2Z_ISqjnf6Qxb4jNOnLlXF-xpLtp7ExFt7XhfZGFhEvZwnPY4ezdXxjenC9f0kjEtX5PJv6B-uz4XdorXQvTIib4V65aoxcp4Qbu5GHryv9cS8vnHgy6zj6DC576RCltICKY2v2HkPGDSogBItyHWm4rF08yEbFV4mEFI5h__9XNdcu78W5pv1_vL0q16qQIrnKlKWA0NVtUxN03YwkI3yUPbcZEiHhrHyiMV3cOhQm" />
              <button className="absolute bottom-xl right-xl bg-primary-container text-on-primary-container p-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
              </button>
              <div className="absolute top-xl left-xl">
                <span className="bg-[#F9F9F7] px-md py-xs font-label-caps text-[10px] text-primary border border-primary/10">SILK SERIES</span>
              </div>
            </div>
            <div className="p-xl space-y-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-sm text-body-sm text-outline uppercase tracking-widest">Batik Tulis</p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Golden Symmetry</h3>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface">$550</p>
              </div>
              <div className="flex gap-xs pt-md">
                <span className="w-3 h-3 rounded-full bg-yellow-700"></span>
                <span className="w-3 h-3 rounded-full bg-orange-900"></span>
              </div>
            </div>
          </Link>
          {/* Product Card 4 */}
          <Link to="/product" className="group relative block bg-white border border-slate-900/5 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)] transition-all duration-500">
            <div className="aspect-[1/1.618] overflow-hidden relative">
              <img alt="Contemporary Batik" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_23dqXs3NMn04GVpZ2_aqW0am1MHA7oNU7z4JkkywmLqS_DVOTAdbFSMy064mnercwVL3VVhtOtLq46XucZerl707KPDKMHp065cD_tnf25fSEVR6QrKfWD5rOA8f_X7D-3rODVOnKFonU2OhfUJsIPlw3N0UvFJ_DiWNQTibL9wuHqSmqlQsisyQwVLZOTHDkbno9mmktWu7w95Te2T1xz-whP7r4F4F995g09sIQXxNBVF_Xw_S_X3M8_v_I0FBn2D3B9dpIYsx" />
              <button className="absolute bottom-xl right-xl bg-primary-container text-on-primary-container p-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
              </button>
            </div>
            <div className="p-xl space-y-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-sm text-body-sm text-outline uppercase tracking-widest">Batik Print</p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Shadow Essence</h3>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface">$125</p>
              </div>
            </div>
          </Link>
          {/* Product Card 5 */}
          <Link to="/product" className="group relative block bg-white border border-slate-900/5 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)] transition-all duration-500 md:mt-xxl">
            <div className="aspect-[1/1.618] overflow-hidden relative">
              <img alt="Traditional Motifs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5MW2wWRRKHgkbSEtHoBPWETvpliR29qYrpmNgd6GJsUf9Ms6PTFbdBRxIxmqb9ZDD5mXDlu3CwWTWX91Pzb95svvH1B15sK7s1_vV43XzJXaVGUenIWqez7xVzRUw2f7VHhuyNf8LhCA-7oj62MOU0axUyt3CQw-H7hr4GnDk51DaaDEx1Zl4ytrH8B_lLOnA-4_XJUh6l90kb5-PGcSgDX4y0s4-YclhG_tFqv80VuQh7M7SY0LHGoZ5O39wc6DbDAwJHB5TduT" />
              <button className="absolute bottom-xl right-xl bg-primary-container text-on-primary-container p-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
              </button>
            </div>
            <div className="p-xl space-y-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-sm text-body-sm text-outline uppercase tracking-widest">Batik Tulis</p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Earthbound Rhythm</h3>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface">$420</p>
              </div>
            </div>
          </Link>
          {/* Product Card 6 */}
          <Link to="/product" className="group relative block bg-white border border-slate-900/5 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)] transition-all duration-500">
            <div className="aspect-[1/1.618] overflow-hidden relative">
              <img alt="Luxury Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwIpAoWe_Z8_Ul6GgJyM6mU8jf4XTfOQBmeZevEDRVLeURrMNv14pKcikIWWGQtRkOcFgRb1UYWU95M0rOW4yOnqaHAJbH80qh-fNsbDuwW_S9xkVflO8XUT-GnwNm_WGN4y9KDdiUaugiFYqHx04eFv9Trcr3MAh48-33w_awvCwbKT-YyTAhXO8DOAV9sH30mN2Q910PNzJsuaJqSPAmeUxJ8LfsSckao7ZEIdjJN1hBgBgvEBOTVUHcfeHQnqY86yuvY4dlLlgD" />
              <button className="absolute bottom-xl right-xl bg-primary-container text-on-primary-container p-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl" onClick={(e) => e.preventDefault()}>
                <span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
              </button>
            </div>
            <div className="p-xl space-y-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-sm text-body-sm text-outline uppercase tracking-widest">Batik Silk</p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Royal Mandala</h3>
                </div>
                <p className="font-label-caps text-label-caps text-on-surface">$395</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
