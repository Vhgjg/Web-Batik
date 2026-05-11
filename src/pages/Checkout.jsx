import React from 'react';

export default function Checkout() {
  return (
    <main className="pt-[120px] pb-xxxl px-[5.6%] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xxl items-start">
        {/* Left Column: Shipping & Payment */}
        <div className="lg:col-span-7 space-y-xxl">
          {/* Section Header */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Secure Checkout</h2>
            <p className="font-body-lg text-on-surface-variant">Step 1: Finalize your details for the Baby Blue Collection.</p>
          </div>

          {/* Shipping Address */}
          <section className="bg-surface-container-lowest p-xl rounded-lg border border-slate-900/5 shadow-[0_20px_50px_rgba(0,31,63,0.04)]">
            <div className="flex items-center gap-md mb-xl">
              <span className="material-symbols-outlined text-primary" data-icon="local_shipping">local_shipping</span>
              <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">Shipping Address</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div className="md:col-span-2">
                <label className="block font-body-sm text-body-sm text-on-surface-variant uppercase mb-xs">Full Name</label>
                <input className="w-full border-b border-slate-900/10 bg-transparent py-sm font-body-lg focus:border-primary-container transition-colors duration-300" placeholder="Aditya Kusuma" type="text" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-body-sm text-body-sm text-on-surface-variant uppercase mb-xs">Street Address</label>
                <input className="w-full border-b border-slate-900/10 bg-transparent py-sm font-body-lg focus:border-primary-container transition-colors duration-300" placeholder="Jl. Senopati No. 42" type="text" />
              </div>
              <div>
                <label className="block font-body-sm text-body-sm text-on-surface-variant uppercase mb-xs">City</label>
                <input className="w-full border-b border-slate-900/10 bg-transparent py-sm font-body-lg focus:border-primary-container transition-colors duration-300" placeholder="Jakarta" type="text" />
              </div>
              <div>
                <label className="block font-body-sm text-body-sm text-on-surface-variant uppercase mb-xs">Postal Code</label>
                <input className="w-full border-b border-slate-900/10 bg-transparent py-sm font-body-lg focus:border-primary-container transition-colors duration-300" placeholder="12190" type="text" />
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-surface-container-lowest p-xl rounded-lg border border-slate-900/5 shadow-[0_20px_50px_rgba(0,31,63,0.04)]">
            <div className="flex items-center justify-between mb-xl">
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined text-primary" data-icon="encrypted">encrypted</span>
                <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">Secure Payment</h3>
              </div>
              <div className="flex gap-sm">
                <span className="material-symbols-outlined text-secondary text-lg" data-icon="credit_card">credit_card</span>
                <span className="material-symbols-outlined text-secondary text-lg" data-icon="account_balance">account_balance</span>
              </div>
            </div>
            <div className="space-y-xl">
              <div className="relative">
                <label className="block font-body-sm text-body-sm text-on-surface-variant uppercase mb-xs">Card Number</label>
                <div className="relative">
                  <input className="w-full border-b border-slate-900/10 bg-transparent py-sm font-body-lg focus:border-primary-container transition-colors duration-300 pr-xl" placeholder="**** **** **** 8829" type="text" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <p className="text-[10px] text-primary mt-sm tracking-wider uppercase">Automated identity verification active</p>
              </div>
              <div className="grid grid-cols-2 gap-xl">
                <div>
                  <label className="block font-body-sm text-body-sm text-on-surface-variant uppercase mb-xs">Expiry Date</label>
                  <input className="w-full border-b border-slate-900/10 bg-transparent py-sm font-body-lg focus:border-primary-container transition-colors duration-300" placeholder="MM / YY" type="text" />
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm text-on-surface-variant uppercase mb-xs">CVC</label>
                  <input className="w-full border-b border-slate-900/10 bg-transparent py-sm font-body-lg focus:border-primary-container transition-colors duration-300" placeholder="***" type="password" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 sticky top-[120px]">
          <aside className="bg-surface-container-low border border-slate-900/5 p-xl rounded-lg">
            <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-xl border-b border-slate-900/5 pb-md">Order Summary</h3>
            <div className="space-y-lg mb-xl">
              {/* Product Item */}
              <div className="flex gap-lg">
                <div className="w-24 aspect-[1/1.618] bg-surface-container-highest overflow-hidden rounded-sm">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWrtKlZN8h-DxvGFb7JQHyi_lK1p0pcGFLwoaNU_srMCxwn553g0e6LZaPtJN4acFsD5DIm422Rj2ARep6yUgU3x95vdlRCEnsRqFpcbz7_ZNccXnH9jiucKHo9HZVYXifkxnDaBWnwo9BGSy3_QcMk9bWrFdccdcVGF8doyTNAn18hJQfDMI4k6OJgHiSqYej0hhj37ArngcN1QSutfna7VpGwr9tI7xjMF9kH684n7CFI-402LaCmTMzIc4hAeXOwJjR9IMSwYWS" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-xs">
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface uppercase mb-xs">Baby Blue Collection</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Hand-stamped Silk Scarf</p>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="px-sm py-[2px] bg-primary-container/20 text-on-primary-container text-[10px] rounded-sm font-semibold tracking-wider">SILK</span>
                    <span className="font-body-lg text-body-lg text-on-surface">IDR 2,450,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-md border-t border-slate-900/5 pt-xl">
              <div className="flex justify-between font-body-lg text-on-surface-variant">
                <span>Subtotal</span>
                <span>IDR 2,450,000</span>
              </div>
              <div className="flex justify-between font-body-lg text-on-surface-variant">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="flex justify-between font-body-lg text-on-surface-variant">
                <span>Taxes</span>
                <span>IDR 245,000</span>
              </div>
              <div className="flex justify-between font-headline-md text-headline-md text-on-surface pt-md border-t border-slate-900/10">
                <span>Total</span>
                <span>IDR 2,695,000</span>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full mt-xl py-xl bg-on-primary-fixed text-primary-fixed font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-on-primary-fixed-variant transition-all duration-500 shadow-xl shadow-on-primary-fixed/10">
              Complete Purchase
            </button>
            <div className="mt-xl flex items-center justify-center gap-sm text-on-surface-variant/60">
              <span className="material-symbols-outlined text-sm" data-icon="lock">lock</span>
              <span className="font-body-sm text-body-sm uppercase tracking-tighter">SSL Secured Checkout System</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
